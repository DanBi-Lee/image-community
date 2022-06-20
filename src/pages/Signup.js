import React, { useState } from "react";
import { Grid, Button, Input } from "../elements";
import Header from "../shared/Header";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../shared/validator";

const defaultData = {
  user_id: "",
  user_name: "",
  user_password: "",
  user_password_check: "",
};

const Signup = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState(defaultData);
  const signup = () => {
    console.log("회원가입");
    if (
      signupData.user_id === "" ||
      signupData.user_name === "" ||
      signupData.user_password === ""
    ) {
      return;
    }

    if (signupData.user_password !== signupData.user_password_check) {
      return;
    }

    dispatch(
      userActions.signupFB(
        signupData.user_id,
        signupData.user_password,
        signupData.user_name,
        navigate
      )
    );
  };
  const onChange = (event) => {
    const _target = event.target;
    setSignupData((prev) => ({ ...prev, [_target.name]: _target.value }));
  };
  const onSignUp = (event) => {
    event.preventDefault();
    signup();
  };

  const passwordIsValid =
    signupData.user_password === signupData.user_password_check;
  const isValid = passwordIsValid && emailValidation(defaultData.user_id);

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
              value={signupData.user_id}
            />
          </Grid>
          <Grid padding="16px">
            <Input
              id="user_name"
              label="닉네임"
              placeholder="닉네임을 입력하세요."
              onChange={onChange}
              value={signupData.user_name}
            />
          </Grid>
          <Grid padding="16px">
            <Input
              id="user_password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."
              onChange={onChange}
              value={signupData.user_password}
            />
          </Grid>
          <Grid padding="16px">
            <Input
              id="user_password_check"
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력하세요."
              onChange={onChange}
              value={signupData.user_password_check}
            />
          </Grid>
          <Grid padding="16px">
            <Button
              text="회원가입하기"
              disabled={!isValid}
              onClick={onSignUp}
            />
          </Grid>
        </form>
      </section>
    </>
  );
};

export default Signup;
