import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuiz, setStatus, setTitle, setAuthor, setDuration, setCategory, setDesc, setID,  } from './data'
import Quiz from './pages/Quiz';
import { Provider } from 'react-redux'
import store from './data/stored';
//import Result from './pages/Result';
import CorrectAnswer from './components/CorrectAnswer';
import WrongAnswer from './components/WrongAnswer';
import Login from './pages/Login';
import Axios from 'axios';
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

    componentDidMount() {
        //fetch("http://117.53.46.220:8000/user?id=MjAyMFFBVUdRNDFRNDExNjA0NjY5").then(res => res.json()).then((result) => {console.log(result)}, (error) => {console.log(error)})
        // Axios.get("http://117.53.46.220:8000/quizdetail?id=UVVJWi0yMDIwLUFVRy05MTEyMzgyMDg=")
        //     .then((res) => {
        //         console.log(res.data[0].questions)
        //         this.props.setQuiz(res.data[0].questions)
        //         this.props.setStatus("play")
        //     })
        //     .catch(err => console.log(err))
        // Axios.post("http://117.53.46.220:8000/signin", {
        //     email: "emailtest@test.com",
        //     password: "testpassword"
        // }).then(res => console.log(res)).catch(err => console.log(err))
        //console.log("didmount dipanggil")
    }


    getQuiz(url) {
        if (this.props.status === 'panding' && this.props.title === '') {
            Axios.get(url)
                .then((res) => {
                    console.log(res.data[0])
                    this.props.setQuiz(res.data[0].questions)
                    this.props.setTitle(res.data[0].title)
                    this.props.setAuthor(res.data[0].author)
                    this.props.setDuration(res.data[0].duration)
                    this.props.setCategory(res.data[0].category)
                    this.props.setDesc(res.data[0].description)
                })
                .catch(err => console.log(err))
        }
    }

    componentDidUpdate() {
        if (this.props.status === 'panding' && this.props.title === '') {
            Axios.get("http://117.53.46.220:8000/quizdetail?id=UVVJWi0yMDIwLUFVRy05MTEyMzgyMDg=")
                .then((res) => {
                    this.props.setQuiz(res.data[0].questions)
                    this.props.setTitle(res.data[0].title)
                    this.props.setAuthor(res.data[0].author)
                    this.props.setDuration(res.data[0].duration)
                    this.props.setCategory(res.data[0].category)
                    this.props.setDesc(res.data[0].description)
                    //this.props.setStatus("play")
                })
                .catch(err => console.log(err))
        }
    }
    
    render() {
        var login = <Provider store={store}><Login /></Provider>
        var panding = <Provider store={store}> <Panding /></Provider>
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
    return {
        title: state.quiz.title,
        answer: state.player.answer,
        status: state.player.status,
        score: state.player.score,
        question: state.quiz.questions

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setQuiz: (p) => dispatch(setQuiz(p)),
        setStatus: (p) => dispatch(setStatus(p)),
        setTitle: (p) => dispatch(setTitle(p)),
        setAuthor: (p) => dispatch(setAuthor(p)),
        setDuration: (p) => dispatch(setDuration(p)),
        setCategory: (p) => dispatch(setCategory(p)),
        setDesc: (p) => dispatch(setDesc(p)),
        setID: (p) => dispatch(setID(p))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Root)
