import type { Post as PostType } from '../types';
import './Post.css';
interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">By {post.author}</p>
      <p className="post-preview">{post.content.split(' ').slice(0, 10).join(' ')}...</p>
      <p className="post-date">{post.datePosted}</p>
    </div>
  );
};

export default Post;