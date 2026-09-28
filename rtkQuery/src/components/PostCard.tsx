import type { Post } from "../types/post"

type PostsCardProps = {
  post: Post
}

const PostsCard = ({ post }: PostsCardProps) => {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.views}</p>
    </div>
  )
}

export default PostsCard