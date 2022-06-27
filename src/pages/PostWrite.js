import { useState } from "react";
import { Button, Grid, Image, Input } from "../elements";

function PostWrite() {
  const [image, setImage] = useState("");
  const [src, setSrc] = useState(
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAogO%2Fbtrx6Nm6JNY%2FIYc3rTKLWO8mkPvMGUXB5K%2Fimg.png"
  );
  const [content, setContent] = useState("");

  const addFile = (event) => {
    setImage((prev) => event.target.value);
    console.log(event.target.value);
    const reader = new FileReader();

    reader.onload = (e) => {
      setSrc((prev) => e.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const addContent = (event) => {
    setContent(event.target.value);
  };

  return (
    <section>
      <form>
        <Grid padding="16px">
          <h1>게시글 작성</h1>
        </Grid>
        <Grid padding="16px">
          <Input type="file" id="image" value={image} onChange={addFile} />
        </Grid>
        <Grid padding="16px">
          <h2>미리보기</h2>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={src} />
        </Grid>
        <Grid padding="16px">
          <label htmlFor="content">게시글 내용</label>
          <textarea
            id="content"
            value={content}
            onChange={addContent}
            name="content"
          ></textarea>
        </Grid>
        <Grid padding="16px">
          <Button text="게시글 작성" />
        </Grid>
      </form>
    </section>
  );
}

export default PostWrite;
