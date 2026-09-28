import PostsCard from "./components/PostCard"
import { useGetPostsQuery } from "./redux/api"

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery()

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>Error: {JSON.stringify(error)}</h2>

  return (
  <div className="app">
    <h1>Fetching API Data</h1>
    <p className="subtitle">Posts fetched with RTK Query + json-server</p>

    {isLoading && <p className="status">Loading...</p>}
    {isError && <p className="status">Error loading posts</p>}

    <div className="list">
      {isSuccess &&
        data?.map((post) => <PostsCard key={post.id} post={post} />)}
    </div>
  </div>
)}

export default App