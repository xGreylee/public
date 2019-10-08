import { SUBMIT_GUESS, RESET_GUESS } from './actionTypes'

export default {
    submit_guess(value) {
        return { type: SUBMIT_GUESS, payload: { value } }
    },
    reset_guess() {
        return { type: RESET_GUESS }
    }
}