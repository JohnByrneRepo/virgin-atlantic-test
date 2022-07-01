/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';

type NumberProps = {
  label: string
  name: string
  id: string
  min: number
  max: number
  value?: number | string
  required?: boolean
}

const Container = styled.div`
  transition: 'background-color @transition-speed @transition-easing, color @transition-speed @transition-easing';
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
`;


export const NumberComponent = (props: NumberProps) => {
  return (
    <Container>
      <label for={props?.id}>
        {props?.label}
      </label>
      <Input type="number" name={props?.name} id={props?.id} min={props?.min} max={props?.max} value={props?.value} required={props?.required} />
    </Container>
  );
};
