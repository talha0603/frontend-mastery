import PostCard from "./components/PostCard"
import {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetProfileQuery,
} from "./redux/api"


const App = () => {
  const postsQuery = useGetPostsQuery()
  const commentsQuery = useGetCommentsQuery()
  const profileQuery = useGetProfileQuery()

  return (
    <div className="app">
      <header className="hero">
        <h1>Fetched Data From API</h1>
        <p>RTK Query + json-server with related posts and comments</p>
      </header>

      <section className="profile-card">
        <div>
          <h2>Profile</h2>
          
          {profileQuery.isLoading && <p className="status">Loading profile...</p>}
          {profileQuery.isSuccess && <strong>{profileQuery.data.name}</strong>}
        </div>
      </section>

      <section>
        <h2 className="section-title">Posts</h2>

        {(postsQuery.isLoading || commentsQuery.isLoading) && (
          <p className="status">Loading posts...</p>
        )}

        {postsQuery.isError && <p className="status">Failed to load posts</p>}

        <div className="list">
          {postsQuery.isSuccess &&
            commentsQuery.isSuccess &&
            postsQuery.data.map((post) => {
              const relatedComments = commentsQuery.data.filter(
                (comment) => comment.postId === post.id
              )

              return (
                <PostCard
                  key={post.id}
                  post={post}
                  comments={relatedComments}
                />
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default App