/** @jsx h */
import { h } from 'preact';
import { DateTime } from "luxon";
import styled from 'styled-components';


export type Option = {
  value: string
  description: string
}

type DateComponentProps = {
  label: string
  name: string
  id: string
  required?: boolean
  value?: string
}

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
`;

export const DateComponent = (props: DateComponentProps) => {
  const format: string = "yyyy-MM-dd";
  const min = DateTime.now().plus({ days: 3}).toFormat(format);
  const max = DateTime.now().plus({ months: 12}).toFormat(format);
  const value = props?.value ? DateTime.fromFormat(props?.value, format).toFormat(format) : DateTime.now().plus({ days: 7}).toFormat(format);

  return (
    <div>
      <label for={props?.id}>
        { props?.label }
      </label>
      <Input type="date" name={props?.name} id={props?.id} value={value} min={min} max={max} required={props?.required} />
    </div>
  );
};