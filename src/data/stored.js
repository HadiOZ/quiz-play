import { combineReducers, createStore } from 'redux'
import { playerReducer } from './model/player/player'
import { quizReducer} from './model/quiz/quiz'


const rootStore = combineReducers({
    player: playerReducer,
    quiz: quizReducer
})

const store = createStore(rootStore)

export default store