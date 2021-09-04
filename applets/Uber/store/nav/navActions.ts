type Action = {
	type: ActionTypes
	payload?: Payload
}

type Payload = {
	origin?: any
	destination?: any
	travelTimeInformation?: any
}

enum ActionTypes {
	SET_ORIGIN,
	SET_DESTINATION,
	SET_TRAVEL_TIME_INFORMATION
}

const setOrigin = (origin: any): Action => ({
	type: ActionTypes.SET_ORIGIN,
	payload: { origin }
})

const setDestination = (destination: any): Action => ({
	type: ActionTypes.SET_DESTINATION,
	payload: { destination }
})

const setTravelTimeInformation = (travelTimeInformation: any) => ({
	type: ActionTypes.SET_TRAVEL_TIME_INFORMATION,
	payload: { travelTimeInformation }
})

export { Action, Payload, ActionTypes, setOrigin, setDestination, setTravelTimeInformation }
