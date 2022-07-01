/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';

enum VARIANT {
  PRIMARY,
  SECONDARY
}

interface IProps {
  skin: VARIANT
  disabled?: boolean
}

const Button = styled.button<IProps>`
  ${props => {
    switch (props.skin) {
      case VARIANT.PRIMARY:
      default:
        return `
        color: ${props.theme.primary.contrastText};
        background-color: ${props.theme.primary.main};
        `;
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.secondary.contrastText};
          background-color: ${props.theme.secondary.main};
        `;
    }
  }}
  text-align: center;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  padding: 14px 16px;
  transition: background-color @transition-speed @transition-easing, color @transition-speed @transition-easing;
`;


type ButtonType = "BUTTON" | "SUBMIT" | "RESET"

type ButtonProps = {
  text: string
  disabled?: boolean
  type?: ButtonType
  skin?: VARIANT
}

export const ButtonComponent = (props: ButtonProps) => {
  return (
    <Button
      skin={props.skin ? props.skin : VARIANT.PRIMARY}
      disabled={props?.disabled || false}
    >
      {props?.text}
    </Button>
  );
};
