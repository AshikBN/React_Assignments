import "./PostImage.css";
const PostImage = ({ data }) => {
  return (
    <div className="PostImage">
      <img src={data.PostImage} alt="" />
    </div>
  );
};

export default PostImage;
