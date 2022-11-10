import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: string;
}

const ButtonContainer = styled.button`
  background: green;
  color: white;
  cursor: pointer;

  transition: all 200ms ease-in;

  &:hover {
    background: blue;
  }
`;

export const ButtonComponent = ({ label, color, ...props }: ButtonComponentProps) => {
  return (
    <ButtonContainer type="button" {...props}>
      {label} - {color}
    </ButtonContainer>
  );
};
