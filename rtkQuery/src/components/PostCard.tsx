import type { Post } from "../types/post"
import type { Comment } from "../types/comment"

type Props = {
  post: Post
  comments: Comment[]
}

const PostCard = ({ post, comments }: Props) => {
  return (
    <article className="card">
      <div className="card-head">
        <h3>{post.title}</h3>
        <span className="badge">{post.views} views</span>
      </div>

      <div className="comments">
        <h4>Comments ({comments.length})</h4>

        {comments.length === 0 && (
          <p className="empty">No comments for this post.</p>
        )}

        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            {comment.text}
          </div>
        ))}
      </div>
    </article>
  )
}

export default PostCard