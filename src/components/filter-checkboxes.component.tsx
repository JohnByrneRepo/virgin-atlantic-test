import { h, JSX } from 'preact'
import { useState } from 'preact/hooks';
import styled from 'styled-components';

type Options = {
  options: string[]
  onChange: any
  type: string
}

const Container = styled.div`
  width: 350px;
`;

const Label = styled.span`
  width: 250px;
  display: inline-block;
`;

export default function FilterCheckboxes(props: Options): JSX.Element {
  const [options, setOptions] = useState<Array<string>>([]);

  const selectOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    if (options.includes(selectedOption)) {
      const newOptions = options.filter((option) => option !== selectedOption);
      setOptions(newOptions);
      props.onChange(props.type, newOptions)
    } else {
      const newOptions = [...options];
      newOptions.push(selectedOption);
      setOptions(newOptions);
      props.onChange(props.type, newOptions)
    }
  };

  return (
    <div>
      <h1>{props.type}</h1>
      {props.options.length > 0 &&
        props.options.map((option, index) => (
          <Container key={index}>
            <Label>{option}</Label>
            <span>
              <input
                type="checkbox"
                value={option}
                onChange={selectOption}
                checked={options.includes(option) ? true : false}
              />
            </span>
          </Container>
        ))}
    </div>
  )
}
