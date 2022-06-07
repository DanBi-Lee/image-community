import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, type, placeholder, id, value, onChange } = props;
  return (
    <>
      <LabelBox htmlFor={id}>{label}</LabelBox>
      <InputBox
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "",
  onChange: null,
};

const LabelBox = styled.label`
  font-size: 12px;
`;
const InputBox = styled.input`
  width: 100%;
  height: 46px;
  padding: 10px;
  box-sizing: border-box;
`;

export default Input;
