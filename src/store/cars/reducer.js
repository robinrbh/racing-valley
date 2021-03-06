import {
	FETCH_CARS_SUCCESS,
	FETCH_VENDORS_SUCCESS,
	POST_BOOKING_SUCCESS,
	ADD_NEW_CAR_SUCCESS,
} from "./actions"

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARS_SUCCESS:
			return action.payload

		case FETCH_VENDORS_SUCCESS:
			return action.payload

		case POST_BOOKING_SUCCESS:
			return [...state, action.payload]

		case ADD_NEW_CAR_SUCCESS:
			return [...state, action.payload]

		default:
			return state
	}
}
