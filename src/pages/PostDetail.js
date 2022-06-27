import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";
import { Grid } from "../elements";
import Header from "../shared/Header";

function PostDetail() {
  return (
    <>
      <Header />
      <Post />
      <Grid padding="16px">
        <CommentWrite />
      </Grid>
      <CommentList>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentList>
    </>
  );
}

export default PostDetail;
