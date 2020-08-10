import { SET_QUIZ } from "./quiz"

export const setQuiz = (questions) => {
    return {
        type: SET_QUIZ,
        payload: questions
    }
}