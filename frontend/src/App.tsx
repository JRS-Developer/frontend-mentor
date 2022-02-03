import { QueryClient, QueryClientProvider } from "react-query";
import Comments from "./pages/Comments";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Comments />
    </QueryClientProvider>
  );
}

export default App;
