import axios from 'axios'

import { 
    NEW_BOOKING_REQUEST,
    NEW_BOOKING_SUCCESS,
    NEW_BOOKING_FAIL,
} from '../constants/bookingConstants'

export const newBooking = (bookingData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BOOKING_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`/api/v1/booking/new`, bookingData, config)
        dispatch({
            type: NEW_BOOKING_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_BOOKING_FAIL,
            payload: error.response.data.message
        })
    }
}