import React, { useEffect, useState } from "react";
import { Grid, Button, Input } from "../elements";
import { getCookie } from "../shared/Cookie";
import Header from "../shared/Header";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../shared/validator";

const defaultData = {
  user_id: "",
  user_password: "",
};

const Login = (props) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(defaultData);
  const onChange = (event) => {
    const _target = event.target;
    setLoginData((prev) => ({ ...prev, [_target.name]: _target.value }));
  };
  const navigate = useNavigate();

  const login = () => {
    dispatch(
      userActions.loginFB(loginData.user_id, loginData.user_password, navigate)
    );
  };

  const onClick = (e) => {
    e.preventDefault();
    login();
  };

  const setData = (key, value) => {
    if (!value) {
      return;
    }
    setLoginData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const isValid = emailValidation(defaultData.user_id);

  useEffect(() => {
    const id = getCookie("id");
    const password = getCookie("password");

    setData("user_id", id);
    setData("user_password", password);
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
            <Button text="로그인하기" onClick={onClick} disabled={!isValid} />
          </Grid>
        </form>
      </section>
    </>
  );
};

export default Login;
