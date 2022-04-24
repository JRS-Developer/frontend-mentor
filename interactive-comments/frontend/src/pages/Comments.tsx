import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { getRandomUser } from "../services/randomUser";
import { CurrentUser, Comment } from "../types/types";
import { saveUser } from "../services/user";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getComments, saveComment } from "../services/comment";

const getLocalUser = (): CurrentUser | null => {
  const localUser = localStorage.getItem("currentUser");

  if (localUser) {
    return JSON.parse(localUser);
  }
  return null;
};

const Comments = () => {
  const [user, setUser] = useState(getLocalUser());
  const [input, setInput] = useState("");

  const queryClient = useQueryClient();

  const createUserMutation = useMutation(saveUser, {
    onSuccess: (data: CurrentUser) => {
      localStorage.setItem("currentUser", JSON.stringify(data));
      setUser(data);
    },
  });

  const createCommentMutation = useMutation(saveComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const {
    isLoading,
    isError,
    data: comments,
  } = useQuery<Comment[]>("comments", getComments);

  const saveRandomUser = async () => {
    const { results } = await getRandomUser();
    const user = results[0];

    const newCurrentUser = {
      username: `${user.name.first}${user.name.last}`,
      image: user.picture.medium,
    };

    createUserMutation.mutate(newCurrentUser);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.length || !user?.id) return;

    const comment = {
      content: input,
      userId: user?.id,
    };

    setInput("");
    createCommentMutation.mutate(comment);
  };

  useEffect(() => {
    if (!user) {
      saveRandomUser();
    }
  }, []);

  const renderLoading = () => {
    return <div>Loading...</div>;
  };

  const renderError = () => {
    return <div>Error</div>;
  };

  const renderComments = () => {
    return (
      <>
        {user ? (
          <>
            <CommentList comments={comments} currentUser={user} />
            <CommentForm
              currentUser={user}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              value={input}
              formClasses="flex flex-col sm:flex-row gap-4"
              showContainer={true}
              showAvatar={true}
            />
            <footer>
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="hover:underline text-p-moderate-blue"
                rel="noopener noreferrer"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                href="https://www.frontendmentor.io/profile/JRS-Developer"
                target="_blank"
                className="hover:underline text-p-moderate-blue"
                rel="noopener noreferrer"
              >
                Jose Sanchez (JRS-Dev) 👨‍💻
              </a>
              .
            </footer>
          </>
        ) : null}
      </>
    );
  };

  return (
    <main className="py-8 px-4 min-h-screen sm:py-12 sm:px-0 text-n-gray-blue">
      <div className="flex flex-col gap-4 justify-center items-center m-auto sm:w-11/12 md:w-3/4 lg:w-3/5">
        {isLoading
          ? renderLoading()
          : isError
          ? renderError()
          : renderComments()}
      </div>
    </main>
  );
};
export default Comments;
