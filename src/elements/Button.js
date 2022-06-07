import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, text, disabled } = props;
  return (
    <ButtonBox onClick={onClick} disabled={disabled}>
      {text}
    </ButtonBox>
  );
};

Button.defaultProps = {
  onClick: null,
  text: "버튼",
  disabled: false,
};

const ButtonBox = styled.button`
  width: 100%;
  height: 46px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

export default Button;
