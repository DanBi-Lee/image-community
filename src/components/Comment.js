import { Grid, Image, Text } from "../elements";

function Comment() {
  return (
    <Grid is_flex padding="16px">
      <Image
        shape="circle"
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAogO%2Fbtrx6Nm6JNY%2FIYc3rTKLWO8mkPvMGUXB5K%2Fimg.png"
      />
      <Text bold={true}>유저 이름</Text>
      <Text>텍스트</Text>
    </Grid>
  );
}

export default Comment;
