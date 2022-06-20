import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, text, disabled, is_float } = props;

  if (is_float) {
    return (
      <>
        <FloatButton onClick={onClick}>{text}</FloatButton>
      </>
    );
  }
  return (
    <ButtonBox onClick={onClick} disabled={disabled}>
      {text}
    </ButtonBox>
  );
};

Button.defaultProps = {
  onClick: () => {},
  text: "버튼",
  disabled: false,
  is_float: false,
};

const ButtonBox = styled.button`
  width: 100%;
  height: 46px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  border: none;
  border-radius: 50px;
  text-align: center;
  vertical-align: middle;
`;

export default Button;
