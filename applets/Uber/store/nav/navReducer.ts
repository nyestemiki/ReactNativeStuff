import { Action, ActionTypes } from './navActions'

const initialState = {
	origin: null,
	destination: null,
	travelTimeInformation: null
}

const navReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionTypes.SET_ORIGIN:
			return {
				...state,
				origin: action?.payload?.origin
			}
		case ActionTypes.SET_DESTINATION:
			return {
				...state,
				destination: action?.payload?.destination
			}
		case ActionTypes.SET_TRAVEL_TIME_INFORMATION:
			return {
				...state,
				travelTimeInformation: action?.payload?.travelTimeInformation
			}
		default:
			return state
	}
}

export default navReducer
