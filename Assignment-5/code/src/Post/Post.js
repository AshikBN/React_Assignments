import "./Post.css";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import PostImage from "../PostImage";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <PostHeader data={data} />
      <PostImage data={data} />
      <PostFooter data={data} />
    </div>
  );
};

export default Post;
