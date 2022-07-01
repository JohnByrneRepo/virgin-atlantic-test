import { h, JSX } from 'preact'
import ReactSlider from 'react-slider'

type FilterSliderProps = {
  min: number
  max: number
  type: string
  onChange: any
}

export default function FilterSlider(props: FilterSliderProps): JSX.Element {
  return (
    <div>
      <h1>{props.type}</h1>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[props.min, props.max]}
        pearling
        min={props.min}
        max={props.max}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(e) => {
          props.onChange(props.type, { min: e[0], max: e[1] })
        }}
      />
    </div>
  )
}
