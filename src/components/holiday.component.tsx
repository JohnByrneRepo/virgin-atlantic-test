import { h, JSX } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks'
import { Holiday } from '../types/booking'
import { FilterContext } from '../routes/results.route'
import styled from 'styled-components'

type HolidayComponentProps = {
  holidays: Holiday[]
}

const Container = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 10px;
  padding: 30px;
  padding-top: 5px;
  margin-bottom: 30px;
  height: 530px;
`;

export default function HolidayComponent(props: HolidayComponentProps): JSX.Element {
  const { filterOptions } = useContext(FilterContext)
  const [holidayData, setHolidayData] = useState<Holiday[]>(props.holidays)

  useEffect(() => {
    const data = { ...holidayData }
    // const filteredData = data.filter(holidayItem => {
    //   const facilities = holidayItem.hotel.content.hotelFacilities;
    //   let facilitySelected = false;
    //   for (let i = 0; i < filterOptions.facilities.length; i++) {
    //     const facility = filterOptions.facilities[i];
    //     for (let j = 0; j < facilities.length; j++) {
    //       if (facilities[j] === facility) {
    //         facilitySelected = true;
    //       }
    //     }
    //   }
    //   return (
    //     holidayItem.totalPrice >= filterOptions.pricePerPerson.min
    //     &&
    //     holidayItem.totalPrice <= filterOptions.pricePerPerson.max
    //   ) ||
    //   (
    //     holidayItem.hotel.content.starRating <= filterOptions.starRating.max
    //     &&
    //     holidayItem.hotel.content.starRating >= filterOptions.starRating.min
    //   ) || facilitySelected
    // })
    // setHolidayData(filteredData)
  }, [filterOptions, holidayData])

  return (
    <div>
      {props.holidays.map(holiday =>
        <Container>
          <div>
            <h1>{holiday.hotel.name}</h1>
            <h3>£{holiday.totalPrice}</h3>
            <img src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url} />
            <h3>Airline: {holiday.inboundFlight.airline}</h3>
            <h3>Departs from: {holiday.inboundFlight.departureAirport}</h3>
          </div>
        </Container>
      )}
    </div>
  )
}
