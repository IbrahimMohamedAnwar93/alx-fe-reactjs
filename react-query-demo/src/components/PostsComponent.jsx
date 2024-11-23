import { useQuery } from "react-query";

// Define the fetchPosts function to handle the API call
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's useQuery hook with advanced options
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      // Advanced Query Options
      cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
      staleTime: 1000 * 60 * 2, // Consider data fresh for 2 minutes
      refetchOnWindowFocus: true, // Refetch when window is focused
      keepPreviousData: true, // Keep previous data until new data is fetched
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
