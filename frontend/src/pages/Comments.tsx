import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { getRandomUser } from "../services/randomUser";
import { CurrentUser, Comment } from "../types/types";
import { saveUser } from "../services/user";
import { useMutation, useQuery } from "react-query";
import { getComments } from "../services/comment";

const getLocalUser = (): CurrentUser | null => {
  const localUser = localStorage.getItem("currentUser");

  if (localUser) {
    return JSON.parse(localUser);
  }
  return null;
};

const Comments = () => {
  const [user, setUser] = useState(getLocalUser());

  const mutation = useMutation(saveUser, {
    onSuccess: (data: CurrentUser) => {
      localStorage.setItem("currentUser", JSON.stringify(data));
      setUser(data);
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

    mutation.mutate(newCurrentUser);
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
        {user && comments?.length ? (
          <>
            <CommentList comments={comments} currentUser={user} />
            <CommentForm
              currentUser={user}
              handleSubmit={() => {}}
              formClasses="flex flex-col sm:flex-row gap-4"
              showContainer={true}
              showAvatar={true}
            />
          </>
        ) : null}
      </>
    );
  };

  return (
    <main className="min-h-screen text-n-gray-blue py-8 px-4 sm:py-12 sm:px-0">
      <div className="flex flex-col justify-center items-center sm:w-3/5 m-auto gap-4">
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
