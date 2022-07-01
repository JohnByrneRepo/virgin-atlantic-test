import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import HolidayComponent from './holiday.component';

configure({ adapter: new Adapter })

describe('HolidayComponent', () => {
    it('should display the holiday correctly', async () => {
        const holiday_component = mount(<HolidayComponent
            holidays={[
                {
                    departureDate: '2022-07-08',
                    deposit: 2000,
                    depositPerPerson: 1000,
                    hotel: {
                        id: '1',
                        name: 'test',
                        boardBasis: '',
                        content: {
                            accommodationType: [''],
                            activities: [''],
                            atAGlance: [''],
                            boardBasis: [''],
                            familyKids: [''],
                            features: [],
                            holidayType: [''],
                            hotelDescription: '',
                            hotelEdits: [''],
                            hotelFacilities: [''],
                            hotelLocation: [''],
                            images: [],
                            keyFeatures: [],
                            location: {lat: 0, lon: 0},
                            name: '',
                            parentLocation: '',
                            parentUrlName: '',
                            propertyType: '',
                            resortFees: true,
                            salesMessages: [''],
                            starRating: 4,
                            telephoneBookable: true,
                            url: '',
                            urlName: '',
                            vRating: 5,
                            video: {url: '', preview: ''},
                            virginView: ''
                        }
                    },
                    inboundFlight: {
                        airline: '',
                        airlineName: '',
                        arrivalAirport: '',
                        arrivalAirportCode: '',
                        cabinClass: '',
                        departureAirport: '',
                        departureAirportCode: '',
                    },
                    locationWidened: true,
                    outboundFlight: {
                        airline: '',
                        airlineName: '',
                        arrivalAirport: '',
                        arrivalAirportCode: '',
                        cabinClass: '',
                        departureAirport: '',
                        departureAirportCode: '',
                    },
                    pricePerPerson: 500,
                    selectedDate: '2022-07-08',
                    tierPoints: 1,
                    totalPrice: 5000,
                    virginPoints: 50,
                    webDiscount: 25
                }
            ]} />)

        expect(holiday_component.find('h1')).toBe(true)
    })
})
