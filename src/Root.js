import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuiz } from './data'
import Quiz from './pages/Quiz';
import { Provider } from 'react-redux'
import store from './data/stored';
//import Result from './pages/Result';
import CorrectAnswer from './components/CorrectAnswer';
import WrongAnswer from './components/WrongAnswer';
import Login from './pages/Login';
// import Axios from 'axios';
import './root.css'
import Panding from './pages/Panding'



class Root extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
            isloaded: false,
            item: {}
            
        }
    }

    // componentDidMount() {
    //     //fetch("http://117.53.46.220:8000/user?id=MjAyMFFBVUdRNDFRNDExNjA0NjY5").then(res => res.json()).then((result) => {console.log(result)}, (error) => {console.log(error)})
    //     Axios.get("http://117.53.46.220:8000/user?id=MjAyMFFBVUdRNDFRNDExNjA0NjY5").then(res => console.log(res)).catch(err => console.log(err))
    //     Axios.post("http://117.53.46.220:8000/signin", {
    //         email: "emailtest@test.com",
    //         password: "testpassword"
    //     }).then(res => console.log(res)).catch(err => console.log(err))
    // }
    
    render() {
        var login = <Provider store={store}><Login /></Provider>
        var panding =  <Panding />
        var play = <Provider store={store}><Quiz question={this.props.question[0]} total={this.props.question.length} /></Provider>
        var result = this.props.answer ? <CorrectAnswer score={this.props.score} /> : <WrongAnswer score={this.props.score}/>
        return (
            <div>
                {this.props.status === "login" ? login : null}
                {this.props.status === "panding" ? panding : null}
                {this.props.status === "play" ? play : null}
                {this.props.status === "pause" ? result : null}
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    console.log(state.player.status)
    console.log(state.player.answer)
    console.log(state.player.score)
    return {
        answer: state.player.answer,
        status: state.player.status,
        score: state.player.score,
        question: state.quiz.questions

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setQuiz: (p) => dispatch(setQuiz(p))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Root)
