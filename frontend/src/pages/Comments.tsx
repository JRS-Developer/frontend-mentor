import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { comments } from "../data.json";
import { getRandomUser } from "../services/randomUser";
import { CurrentUser } from "../types/types";

const Comments = () => {
  const [user, setUser] = useState<CurrentUser>(
    JSON.parse(localStorage.getItem("currentUser") || "{}")
  );

  const saveRandomUser = async () => {
    const { results } = await getRandomUser();
    const user = results[0];

    const newCurrentUser: CurrentUser = {
      username: `${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}`,
      image: {
        png: user.picture.thumbnail,
      },
    };

    localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));
    setUser(newCurrentUser);
  };

  useEffect(() => {
    if (!Object.keys(user).length) {
      saveRandomUser();
    }
  }, []);

  return (
    <main className="min-h-screen text-n-gray-blue py-8 px-4 sm:py-12 sm:px-0">
      <div className="flex flex-col justify-center items-center sm:w-3/5 m-auto gap-4">
        <CommentList comments={comments} currentUser={user} />
        <CommentForm
          currentUser={user}
          handleSubmit={() => {}}
          formClasses="flex flex-col sm:flex-row gap-4"
          showContainer={true}
          showAvatar={true}
        />
      </div>
    </main>
  );
};
export default Comments;
