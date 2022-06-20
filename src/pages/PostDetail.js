import Comment from "../components/Comment";
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
      <section>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </section>
    </>
  );
}

export default PostDetail;
