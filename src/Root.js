import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setQuiz, setStatus, setTitle, setAuthor, setDuration, setCategory, setDesc, setID,  } from './data'
import Quiz from './pages/Quiz';
import { Provider } from 'react-redux'
import store from './data/stored';
import CorrectAnswer from './components/CorrectAnswer';
import WrongAnswer from './components/WrongAnswer';
import Axios from 'axios';
import './root.css'
import Panding from './pages/Panding'



class Root extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: this.props.username,
            code: this.props.code,
            socket: null,
            number: 0
            
        }
    }

    componentDidMount() {
        var ws = new WebSocket("ws://117.53.46.220:8083/ws/join?code=" + this.props.code + "&nickname=" + this.props.username)
        ws.onopen = () => {
            this.setState({ socket: ws })
            ws.send(JSON.stringify({
                from: this.props.username,
                type: 'ping',
                message: this.props.username
            }))
        }
        ws.onclose = () => {
            ws.send(JSON.stringify({
                from: this.props.username,
                type: 'ping',
                message: this.props.username
            }))
            this.onClose()
        }
        ws.onerror = () => { this.onError() }
        ws.onmessage = (event) => { this.onMessage(event) }
    }

    onOpen() {
        console.log("websocket open")
    }

    onClose() {
        console.log("websocket close")
    }

    onError() {
        console.log("websocket error")
    }

    onMessage(e) {
        var data = JSON.parse(e.data)
        switch (data.type) {
            case "questions":
                this.getQuiz(data.message)
                break
            case "status":
                this.props.setStatus(data.message.value)
                this.setState({number: data.message.number})
                break
            default:
                console.log(data.type)
        }
    }

    getQuiz(code) {
        var url = 'http://117.53.46.220:8000/quizdetail?id=' + code
        Axios.get(url)
            .then((res) => {
                var author = 'http://117.53.46.220:8000/user?id=' + res.data[0].author
                Axios.get(author).then((res) => { this.props.setAuthor(res.data.name) }).catch(err => console.log(err))
                this.props.setQuiz(res.data[0].questions)
                this.props.setTitle(res.data[0].title)
                this.props.setDuration(res.data[0].duration)
                this.props.setCategory(res.data[0].category)
                this.props.setDesc(res.data[0].description)
                })
            .catch(err => console.log(err))
    }

    render() {
        var panding = <Provider store={store}> <Panding /></Provider>
        var play = <Provider store={store}><Quiz question={this.props.question[this.state.number]} socket={this.state.socket} total={this.props.question.length} username={this.props.username} /></Provider>
        var result = this.props.answer ? <CorrectAnswer score={this.props.score} /> : <WrongAnswer score={this.props.score}/>
        return (
            <div>
                {this.props.status === "panding" ? panding : null}
                {this.props.status === "play" ? play : null}
                {this.props.status === "pause" ? result : null}
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        code: ownprops.code,
        username: ownprops.username,
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
