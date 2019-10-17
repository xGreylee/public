import { SUBMIT_GUESS, RESET_GUESS, INPUT_CHANGE } from '../actionTypes'

function getInitialState() {
    return {
        input: '',
        hidden: Math.floor(Math.random() * 100),
        output: ''
    }
}

export default function(state = getInitialState(), action) {
    switch (action.type) {
        case SUBMIT_GUESS:
            let output = ''
            const { input } = action.payload
            if (input === state.hidden) {
                output = '中了'
            } else {
                if (input > state.hidden) {
                    output = '大了'
                }
                if (input < state.hidden) {
                    output = '小了'
                }
            }
            return { ...state, input, output }

        case RESET_GUESS:
            return { ...state, ...getInitialState()}

        case INPUT_CHANGE: 
            const { value } = action.payload
            return { ...state, input: value }

        default:
            return state
    }
}