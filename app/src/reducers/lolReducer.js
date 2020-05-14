import { INITIAL_CARD_FETCH, CARD_FETCH_SUCCESS } from "../actions/champActions"
const initialState = {
    isFetching: false,
    data: [],
    error: ""
}

export const lolReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_CARD_FETCH:
            return {
                ...state,
                isFetching: true
            }
            case CARD_FETCH_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    data: action.payload
                }
        default:
            return state
    }
} 