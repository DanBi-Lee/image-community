import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex padding="16px">
          <Image shape="circle" src={props.user_profile} />
          <Text bold={true}>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>content</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.user_profile} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comments_cnt}개</Text>
        </Grid>
        <div></div>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAogO%2Fbtrx6Nm6JNY%2FIYc3rTKLWO8mkPvMGUXB5K%2Fimg.png",
  },
  image_url:
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAogO%2Fbtrx6Nm6JNY%2FIYc3rTKLWO8mkPvMGUXB5K%2Fimg.png",
  contents: "리덕스 구조입니다.",
  comments_cnt: 10,
  insert_dt: "2022-02-27 10:00:00",
};

export default Post;
