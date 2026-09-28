import PostsCard from "./components/PostCard"
import { useGetPostsQuery } from "./redux/api"

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery()

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>Error: {JSON.stringify(error)}</h2>

  return (
    <div>
      <h1>My App</h1>

      {isSuccess &&
        data?.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
    </div>
  )
}

export default App