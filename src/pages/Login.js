import React, { useEffect, useState } from "react";
import { Grid, Button, Input } from "../elements";
import { getCookie, setCookie } from "../shared/Cookie";
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

  const login = () => {
    setCookie('id', loginData.user_id, 3);
    setCookie('password', loginData.user_password, 3);
    alert("로그인 되었습니다.");
  }

  const onClick = e => {
    e.preventDefault();
    login();
  }

  const setData = (key, value) => {
    if(!value){
      return;
    }
    setLoginData(prev=>({
      ...prev,
      [key] : value,
    }));
  }

  useEffect(()=>{
    const id = getCookie('id');
    const password = getCookie('password');

    setData('user_id', id);
    setData('user_password', password);
  }, []);

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
            <Button text="로그인하기" onClick={onClick} />
          </Grid>
        </form>
      </section>
    </>
  );
};

export default Login;
