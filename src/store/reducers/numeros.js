import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionsTypes'

const initialState = {
    min: 1,
    max: 5
}

export default function (state = initialState, action) {
    console.log("NUMEROOOOOS")
    console.log(state, ' ', action)
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}