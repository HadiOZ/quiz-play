
export const SET_QUIZ = "SET_QUIZ"
export const SET_ID = "SET_ID"
export const SET_TITLE = "SET_TITLE"
export const SET_AUTHOR = "SET_AUTHOR"
export const SET_DURATION = "SET_DURATION"
export const SET_CATEGORY = "SET_CATEGORY"
export const SET_DESCRIPTION = "SET_DESCRIPTION"

const quiz = {
    id: '',
    title: '',
    author: '',
    duration: 0,
    category: '',
    description: '',
    questions: []
}



export const quizReducer = (state = quiz, action) => {
    switch (action.type) {
        case SET_QUIZ: 
            return {
                ...state,
                questions: action.payload
            }
        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_AUTHOR:
            return {
                ...state,
                author: action.payload
            }
        case SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload
            }
        default: 
            return state
    }

}