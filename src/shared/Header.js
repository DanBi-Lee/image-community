import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { is_login } = props;
  return (
    <HeaderBox>
      <LogoBox>home</LogoBox>
      {is_login ? (
        <>
          <div>내정보</div>
          <div>알림</div>
          <div>로그아웃</div>
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

Header.defaultProps = {
  is_login: false,
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
