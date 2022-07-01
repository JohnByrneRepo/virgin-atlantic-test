export interface PartyComposition {
    adults: number
    childAges: number[]
    infants: number
}

export interface BookingRequest {
    bookingType: string
    location: string | undefined
    departureDate: string
    duration: number
    gateway: string
    partyCompositions: PartyComposition[]
}

export interface BookingResponse {
    holidays: Holiday[]
}

export interface Flight {
    airline: string
    airlineName: string
    arrivalAirport: string
    arrivalAirportCode: string
    cabinClass: string
    departureAirport: string
    departureAirportCode: string
}

export interface Holiday {
    departureDate: string
    deposit: number
    depositPerPerson: number
    hotel: Hotel
    inboundFlight: Flight
    locationWidened: boolean
    outboundFlight: Flight
    pricePerPerson: number
    selectedDate: string
    tierPoints: number
    totalPrice: number
    virginPoints: number
    webDiscount: number
}

export interface Hotel {
    id: string
    name: string
    boardBasis: string
    content: HotelContent
}

export interface HotelContent {
    accommodationType: string[]
    activities: string[]
    atAGlance: string[]
    boardBasis: string[]
    familyKids: string[]
    features: []
    holidayType: string[]
    hotelDescription: string
    hotelEdits: string[]
    hotelFacilities: string[]
    hotelLocation: string[]
    images: HotelImage[]
    keyFeatures: Feature[]
    location: Location
    name: string
    parentLocation: string
    parentUrlName: string
    propertyType: string
    resortFees: boolean
    salesMessages: string[]
    starRating: number | string
    telephoneBookable: boolean
    url: string
    urlName: string
    vRating: number | string
    video: Video
    virginView: string
}

export interface HotelImage {
    IMAGE_DESCRIPTION: string
    MOBILE_MAIN: Image
    RESULTS_CAROUSEL: Image
}

export interface Image {
    url: string
}

export interface Feature {
    description: string
    name: string
}

export interface Location {
    lat: number
    lon: number
}

export interface Video {
    url: string
    preview: string
}
