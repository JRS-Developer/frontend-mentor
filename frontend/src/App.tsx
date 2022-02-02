import data from "./data.json";
import CommentList from "./components/CommentList";
import CommentFormContainer from "./components/CommentFormContainer";

function App() {
  const { comments, currentUser } = data;
  return (
    <main className="min-h-screen text-n-gray-blue">
      <div className="flex flex-col justify-center items-center w-3/4 m-auto">
        <CommentList comments={comments} currentUser={currentUser} />
        <CommentFormContainer
          currentUser={currentUser}
          handleSubmit={() => {}}
          formClasses="flex"
        />
      </div>
    </main>
  );
}

export default App;
