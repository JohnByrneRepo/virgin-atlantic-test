/** @jsx h */
import { h, options } from 'preact';
import styled from 'styled-components';

export type Option = {
  value: string
  description: string
}

type SelectProps = {
  label: string
  name: string
  id: string
  options: Option[]
  value: string
  required?: boolean
}

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
`;

export const SelectComponent = (props: SelectProps) => {
  return (
    <div>
      <label for={props?.id}>
        {props?.label}
      </label>
      <Select name={props?.name} id={props?.id} required={props?.required}>
        <option value="">Please select</option>
        {
          props?.options.map((option: Option) => <option value={option?.value} selected={option.value === props?.value}>{option?.description}</option>)
        }
      </Select>
    </div>
  );
};
