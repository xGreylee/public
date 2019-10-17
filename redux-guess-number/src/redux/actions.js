import { SUBMIT_GUESS, RESET_GUESS, INPUT_CHANGE } from './actionTypes'

export default {
    submit_guess(input) {
        return { type: SUBMIT_GUESS, payload: { input } }
    },
    reset_guess() {
        return { type: RESET_GUESS }
    },
    input_change(value) {
        return { type: INPUT_CHANGE, payload: { value } }
    }
}