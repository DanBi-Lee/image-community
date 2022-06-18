import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  const logout = () => {
    dispatch(userActions.logOut());
  };

  return (
    <HeaderBox>
      <LogoBox>home</LogoBox>
      {is_login && is_session ? (
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
