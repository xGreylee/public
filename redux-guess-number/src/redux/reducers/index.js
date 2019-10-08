import { SUBMIT_GUESS, RESET_GUESS } from '../actionTypes'

const initialState = {
    value: '',
    hidden: Math.floor(Math.random() * 100),
    output: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_GUESS:
            let output = ''
            const { value } = action.payload
            if (value === state.hidden) {
                output = '中了'
            } else {
                if (value > state.hidden) {
                    output = '大了'
                }
                if (value < state.hidden) {
                    output = '小了'
                }
            }
            return Object.assign({}, state, { value, output })

        case RESET_GUESS:
            return Object.assign({}, state, { hidden: Math.floor(Math.random() * 100) })

        default:
            return state
    }
}