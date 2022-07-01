import { createContext, h, JSX } from 'preact'
import { useRouter } from "preact-router";
import { useEffect, useState } from 'preact/hooks';
import SearchComponent from '../components/search.component';
import HolidayComponent from '../components/holiday.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse, Holiday } from '../types/booking';
import { DateTime } from 'luxon';
import FilterComponent from '../components/filter.component';
import styled from 'styled-components';

export const FilterContext = createContext({
  filterOptions: {
    pricePerPerson: { min: 0, max: 0 },
    starRating: { min: 0, max: 0 },
    facilities: []
  },
  setFilterOptions: (filterOptions) => { }
})

const Container = styled.div`
  width: 100%;
`;

const SidePanel = styled.div`
  display: inline-block;
  width: 300px;
  vertical-align: top;
  padding: 20px;
`;

const MainPanel = styled.div`
  display: inline-block;
  padding: 30px;
`;

export default function ResultsRoute(): JSX.Element {
  const [searchParams] = useRouter();
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [facilities, setFacilities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false)

  const [filterOptions, setFilterOptions] = useState({
    pricePerPerson: { min: 0, max: 0 },
    facilities: [],
    starRating: { min: 0, max: 0 }
  })

  useEffect(() => {
    if (searchParams?.matches?.departureDate) {
      const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
      const requestBody: BookingRequest = {
        "bookingType": "holiday",
        "location": searchParams?.matches?.location,
        "departureDate": departureDate,
        "duration": searchParams?.matches?.duration as unknown as number,
        "gateway": "LHR",
        "partyCompositions": [
          {
            "adults": searchParams?.matches?.adults as unknown as number,
            "childAges": [],
            "infants": 0
          }
        ]
      }

      doRequest('POST', '/cjs-search-api/search', requestBody)
        .then((response: any | BookingResponse) => {
          // console.log(response)
          setHolidays(response.holidays)

          // Get maximum total price
          let maxTotalPrice: number = 0;
          for (var i = 0; i < response.holidays.length; i++) {
            if (maxTotalPrice == null || parseInt(response.holidays[i].totalPrice) > maxTotalPrice)
              maxTotalPrice = response.holidays[i].totalPrice;
          }
          setMaxPrice(maxTotalPrice);
          // console.log('maxTotalPrice:' + maxTotalPrice);

          // Get facilities enumeration
          let facilityEnum: string[] = []
          for (var i = 0; i < response.holidays.length; i++) {
            for (var j = 0; j < response.holidays[i].hotel.content.hotelFacilities.length; j++) {
              if (facilityEnum.indexOf(response.holidays[i].hotel.content.hotelFacilities[j]) < 0) {
                facilityEnum.push(response.holidays[i].hotel.content.hotelFacilities[j]);
              }
            }
          }
          setFacilities(facilityEnum);
          // console.log('facilityEnum:' + facilityEnum);

          setShowFilters(true);
        })
    }
  }, [searchParams])

  return (
    <FilterContext.Provider value={{ filterOptions, setFilterOptions }}>
      <section>
        <SearchComponent />
      </section>
      <Container>
        <SidePanel>
          {showFilters &&
            <FilterComponent maxPrice={maxPrice} facilities={facilities} />}
        </SidePanel>
        <MainPanel>
          <HolidayComponent holidays={holidays} />
        </MainPanel>
      </Container>
    </FilterContext.Provider>
  )
}