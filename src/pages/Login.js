import React, { useState } from "react";
import { Grid, Button, Input } from "../elements";
import Header from "../shared/Header";

const defaultData = {
  user_id: "",
  user_password: "",
};

const Login = (props) => {
  const [loginData, setLoginData] = useState(defaultData);
  const onChange = (event) => {
    const _target = event.target;
    setLoginData((prev) => ({ ...prev, [_target.name]: _target.value }));
  };

  return (
    <>
      <Header />
      <section>
        <form>
          <Grid padding="16px">
            <Input
              id="user_id"
              label="아이디"
              placeholder="아이디를 입력하세요."
              onChange={onChange}
              value={loginData.user_id}
            />
          </Grid>
          <Grid padding="16px">
            <Input
              id="user_password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."
              onChange={onChange}
              value={loginData.user_password}
            />
          </Grid>
          <Grid padding="16px">
            <Button text="로그인하기" />
          </Grid>
        </form>
      </section>
    </>
  );
};

export default Login;
