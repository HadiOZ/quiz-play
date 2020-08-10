export const ADD_SCORE = "ADD_SCORE"
export const SET_STATUS = "SET_STATUS"
export const SET_USERNAME = "SET_USERNAME"
export const SET_ANSWERED = "SET_ANSWERED"
export const SET_CODE = "SET_CODE"


const player = {
    code : '',
    status: 'panding',
    username: '',
    answer: false,
    score: 0

}

export const playerReducer = (state = player, action) => {
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_ANSWERED:
            return {
                ...state,
                answer: action.payload
            }
        case SET_CODE:
            return {
                ...state,
                code: action.payload
            }
        
        default: 
            return state
    }

} 