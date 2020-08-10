
export const SET_QUIZ = "SET_QUIZ"

const quiz = {
    duration: 24,
    questions: [{
        id: '1',
        question: "Kapan hari kemerdekaan indonesia ?",
        media: "https://i.ytimg.com/vi/oAwJjIdg5aM/maxresdefault.jpg",
        answer: '17 Agustus 1945',
        options: [
            {
                symbol: "A",
                comment: "17 Agustus 1945"
            },
            {
                symbol: "B",
                comment: "2 Mei 2000"
            },
            {
                symbol: "C",
                comment: "1 Januari 1988"
            },
            {
                symbol: "D",
                comment: "13 Mei 2000"
            }
        ]
    }]
}



export const quizReducer = (state = quiz, action) => {
    switch (action.type) {
        case SET_QUIZ: 
            return {
                ...state,
                questions: action.payload
            }
        default: 
            return state
    }

}