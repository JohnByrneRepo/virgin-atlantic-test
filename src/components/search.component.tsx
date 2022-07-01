import { h, JSX } from 'preact'
import styled from 'styled-components';
import { LOCATIONS } from '../consts/search'
import { ButtonComponent } from './button.component'
import { DateComponent } from './date.component'
import { SelectComponent } from './select.component'
import { route } from 'preact-router';
import { NumberComponent } from './number.component'
import { useRouter } from 'preact-router'
import { sizes } from '../sizes';

const SearchForm = styled.section`
  background: ${props => props.theme.colors.blanket};
  position: relative;
  padding: 16px 0;
`;

const Grid = styled.div`
  display: grid;
  align-items: end;
  padding: 20px 0;
  grid-template-columns: repeat(6, 1fr);
  @media (min-width: ${sizes.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  }
  grid-gap: 16px;
`

const GridItem = styled.div`
  grid-column: span 6;

  &:nth-child(1) {
    @media (min-width: ${sizes.sm}) {
      grid-column: span 3;
    }
    @media (min-width:  ${sizes.md}) {
      grid-column: span 1;
    }
  }

  &:nth-child(2) {
    @media (min-width:  ${sizes.sm}) {
      grid-column: span 3;
    }
    @media (min-width:  ${sizes.md}) {
      grid-column: span 1;
    }
  }

  &:nth-child(3), &:nth-child(4), &:nth-child(5) {
    @media (min-width: ${sizes.sm}) {
      grid-column: span 2;
    }
    @media (min-width:  ${sizes.md}) {
      grid-column: span 1;
    }
  }
`;

export default function SearchComponent(): JSX.Element {
  const [searchParams] = useRouter();
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (e.target) {
      const url = `/results?location=${e.target['location']?.value}&departureDate=${e.target['departureDate'].value}&duration=${e.target['duration'].value}&adults=${e.target['adults'].value}`;
      route(url, true)
    }
  }

  return (
    <SearchForm className="full-bleed">
      <div className="wrapper">
        <form onSubmit={(e) => onSubmit}>
          <Grid>
            <GridItem>
              <SelectComponent name="location" label="Destination" id="location_field" value={searchParams?.matches?.location || ""} options={LOCATIONS} required={true} />
            </GridItem>
            <GridItem>
              <DateComponent name="departureDate" label="Date" id="departureDate" value={searchParams?.matches?.departureDate} required={true} />
            </GridItem>
            <GridItem>
              <NumberComponent name="duration" label="Duration" id="duration_field" min={1} max={31} value={searchParams?.matches?.duration || 7} required={true} />
            </GridItem>
            <GridItem>
              <NumberComponent name="adults" label="Adults" id="adults_field" min={1} max={9} value={searchParams?.matches?.adults || 2} required={true} />
            </GridItem>
            <GridItem>
              <ButtonComponent text="Search" type="SUBMIT" />
            </GridItem>
          </Grid>
        </form>
      </div>
    </SearchForm>
  )
}
