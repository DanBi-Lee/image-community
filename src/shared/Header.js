import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import usePermit from "./usePermit";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userActions.logoutFB(navigate));
  };
  const { isLogin } = usePermit();

  return (
    <HeaderBox>
      <LogoBox>home</LogoBox>
      {isLogin ? (
        <>
          <div>내정보</div>
          <div>알림</div>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </>
      )}
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const LogoBox = styled.h1`
  margin-right: auto;
`;

export default Header;
