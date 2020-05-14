import axios from "axios"
export const INITIAL_CARD_FETCH = "INITIAL_CARD_FETCH"
export const CARD_FETCH_SUCCESS = "CARD_FETCH_SUCCESS"


export const fetchLolChamps = () => {
    return dispatch => {
        dispatch({ type: INITIAL_CARD_FETCH })
        axios.get("http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion.json")
        .then(res => {
            console.log(res.data.data)
            dispatch({type:CARD_FETCH_SUCCESS, payload:res.data.data})

        })
    }
}