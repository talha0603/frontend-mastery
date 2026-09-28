import type { Post } from "../types/post"

const PostsCard = ({ post }: { post: Post }) => {
  return (
    <article className="card">
      <h4>{post.title}</h4>
      <span className="badge">{post.views} views</span>
    </article>
  )
}

export default PostsCard