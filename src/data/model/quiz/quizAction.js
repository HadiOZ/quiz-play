import { SET_QUIZ, SET_TITLE, SET_AUTHOR, SET_DURATION, SET_CATEGORY, SET_DESCRIPTION, SET_ID } from "./quiz"

export const setQuiz = (questions) => {
    return {
        type: SET_QUIZ,
        payload: questions
    }
}

export const setTitle = (title) => {
    return {
        type: SET_TITLE,
        payload: title
    }
}

export const setAuthor = (author) => {
    return {
        type: SET_AUTHOR,
        payload: author
    }
}

export const setDuration = (duration) => {
    return {
        type: SET_DURATION,
        payload: duration
    }
}

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}

export const setDesc = (desc) => {
    return {
        type: SET_DESCRIPTION,
        payload: desc
    }
}

export const setID = (id) => {
    return {
        type: SET_ID,
        payload: id
    }
}