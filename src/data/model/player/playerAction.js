import { ADD_SCORE, SET_STATUS, SET_USERNAME, SET_ANSWERED, SET_CODE, SET_RESULT } from "./player"


export const addScore = (score) => {
    return {
        type: ADD_SCORE,
        payload: score
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: status
    }
}

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const setAnswer = (answer) => {
    return {
        type: SET_ANSWERED,
        payload: answer
    }
}

export const setCode = (code) => {
    return {
        type: SET_CODE,
        payload: code
    }
}

export const setResult = (res) => {
    return {
        type: SET_RESULT,
        payload: res
    }
}