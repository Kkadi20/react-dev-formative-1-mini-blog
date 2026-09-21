import type { Post as PostType } from '../types';
import Post from './Post';

const posts: PostType[] = [
  {
    title: "Getting Started with TypeScript",
    author: "Kadi Koita ",
    content: "TypeScript adds static typing on top of JavaScript, catching errors before runtime and improving editor support.",
    datePosted: "2026-09-18",
  },
  {
    title: "Why React Uses a Virtual DOM",
    author: "Brick mass",
    content: "The Virtual DOM lets React efficiently figure out the minimal set of real DOM updates needed after a state change.",
    datePosted: "2026-09-19",
  },
  {
    title: "Understanding Props vs State",
    author: "Kelly Dove",
    content: "Props flow one-way from parent to child and are read-only, while state is local and can change over time.",
    datePosted: "2026-09-20",
  },
];

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;