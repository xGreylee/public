import { SUBMIT_GUESS, RESET_GUESS } from '../actionTypes'

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
            return Object.assign({}, state, { input, output })

        case RESET_GUESS:
            return { ...state, ...getInitialState()}

        default:
            return state
    }
}