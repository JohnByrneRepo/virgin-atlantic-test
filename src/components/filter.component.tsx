import { h, JSX } from 'preact'
import FilterSlider from './filter-slider.component'
import FilterCheckboxes from './filter-checkboxes.component'
import { useContext } from 'preact/hooks'
import { FilterContext } from '../routes/results.route'

type FilterComponentProps = {
  maxPrice: number
  facilities: string[]
}

export default function FilterComponent(props: FilterComponentProps): JSX.Element {
  const { filterOptions, setFilterOptions } = useContext(FilterContext)

  const updateFilterOptions = (type: string, data: any) => {
    switch (type) {
      case 'Price':
        setFilterOptions({
          ...filterOptions,
          pricePerPerson: { min: data.min, max: data.max }
        })
        break;
      case 'Facilities':
        setFilterOptions({
          ...filterOptions,
          facilities: data
        })
        break;
      case 'Star rating':
        setFilterOptions({
          ...filterOptions,
          starRating: { min: data.min, max: data.max }
        })
        break;
    }
  }

  return (
    <section>
      <FilterSlider onChange={updateFilterOptions} type={"Price"} min={0} max={props.maxPrice} />
      <FilterCheckboxes onChange={updateFilterOptions} type={"Facilities"} options={props.facilities} />
      <FilterSlider onChange={updateFilterOptions} type={"Star rating"} min={1} max={5} />
    </section>
  )
}
