export const ADD_SCORE = "ADD_SCORE"
export const SET_STATUS = "SET_STATUS"
export const SET_USERNAME = "SET_USERNAME"
export const SET_ANSWERED = "SET_ANSWERED"
export const SET_CODE = "SET_CODE"
export const SET_RESULT = "SET_RESULT"


const player = {
    code : '',
    status: 'panding',
    username: '',
    answer: false,
    score: 0,
    result: [
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 10,
            point: 6
        },
        {
            nickname: "hadi",
            score: 190,
            point: 6
        },
        {
            nickname: "fahmi",
            score: 80,
            point: 6
        },
        {
            nickname: "hadi",
            score: 120,
            point: 6
        },
        {
            nickname: "hadi",
            score: 70,
            point: 6
        },
        {
            nickname: "hadi",
            score: 50,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
        {
            nickname: "hadi",
            score: 100,
            point: 6
        },
    ]

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
        case SET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        
        default: 
            return state
    }

} 