export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY'

export const setTradeModalVisibitySuccess = isVisible => ({
	type: SET_TRADE_MODAL_VISIBILITY,
	payload: { isVisible }
})

export function setTradeModalVisibity(isVisible) {
	return dispatch => {
		dispatch(setTradeModalVisibitySuccess(isVisible))
	}
}
