import { QueryClient, QueryClientProvider } from "react-query"; // Importing React Query
import PostsComponent from "./components/PostsComponent"; // Import your PostsComponent

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your app with the QueryClientProvider to make React Query available throughout your app
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Posts</h1>
        <PostsComponent />{" "}
        {/* The PostsComponent that handles fetching posts */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
