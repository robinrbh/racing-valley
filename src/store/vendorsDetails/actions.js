import { apiUrl } from "../../config/constants"
import Axios from "axios"

export const FETCH_VENDORS_SUCCESS = "FETCH_VENDORS_SUCCES"
export const VENDORDETAILS_FETCHED = "VENDORDETAILS_FETCHED"

export const fetchVendorsSuccess = (vendor) => ({
	type: FETCH_VENDORS_SUCCESS,
	payload: vendor,
})

export const vendorDetailsFetched = (vendor) => ({
	type: VENDORDETAILS_FETCHED,
	payload: vendor,
})

export const fetchVendor = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors`)
		console.log("WHAT IS VENDORS (/VENDORSDETAILS)", response.data)

		dispatch(fetchVendorsSuccess(response.data))
	}
}

export const fetchVendorById = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`${apiUrl}/vendors/${id}`)
    
		dispatch(vendorDetailsFetched(response.data))
	}
}