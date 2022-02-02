import data from "./data.json";
import CommentList from "./components/CommentList";
import CommentFormContainer from "./components/CommentFormContainer";

function App() {
  const { comments, currentUser } = data;
  return (
    <main className="min-h-screen">
      <CommentList comments={comments} currentUser={currentUser} />
      <CommentFormContainer
        currentUser={currentUser}
        handleSubmit={() => {}}
        formClasses="flex"
      />
    </main>
  );
}

export default App;
