import { SUBMIT_GUESS, RESET_GUESS } from './actionTypes'

export default {
    submit_guess(input) {
        return { type: SUBMIT_GUESS, payload: { input } }
    },
    reset_guess() {
        return { type: RESET_GUESS }
    }
}