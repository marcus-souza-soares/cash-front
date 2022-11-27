import React from "react";
import styled from "styled-components";

interface Props {
  children?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function OptionButton({
  children,
  disabled,
  onClick = () => 0,
}: Props): JSX.Element {
  return (
    <OptButton type="submit" disabled={disabled} onClick={onClick}>
      {children}
    </OptButton>
  );
}

const OptButton = styled.button`
  background-color: #fff;
  width: auto;
  height: 52px;
  border-radius: 10px;
  font-size: 22px;
  margin-top: 50px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
