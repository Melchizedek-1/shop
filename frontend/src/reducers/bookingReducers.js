import { 
    NEW_BOOKING_REQUEST,
    NEW_BOOKING_SUCCESS,
    NEW_BOOKING_RESET,
    NEW_BOOKING_FAIL,
    CLEAR_ERRORS
} from '../constants/bookingConstants'

export const newBookingReducer = (state = { booking : {} }, action ) => {
    switch (action.type) {
        case NEW_BOOKING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_BOOKING_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                booking: action.payload.booking
            }

        case NEW_BOOKING_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_BOOKING_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
    
        default:
            return state
    }
}