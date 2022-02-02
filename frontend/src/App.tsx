import { comments, currentUser } from "./data.json";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <main className="min-h-screen text-n-gray-blue py-8 px-4 sm:py-12 sm:px-0">
      <div className="flex flex-col justify-center items-center sm:w-3/5 m-auto gap-4">
        <CommentList comments={comments} currentUser={currentUser} />
        <CommentForm
          currentUser={currentUser}
          handleSubmit={() => {}}
          formClasses="flex flex-col sm:flex-row gap-4"
          showContainer={true}
          showAvatar={true}
        />
      </div>
    </main>
  );
}

export default App;
