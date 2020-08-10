import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core'
import './quiz.css'
import LeftTimer from '../components/LeftTimer'
import RightScore from '../components/RightScore'
import QuestionMedia from '../components/QuestionMedia'
import Question from '../components/Question'
import OptionA from '../components/OptionA'
import OptionB from '../components/OptionB'
import OptionC from '../components/OptionC'
import OptionD from '../components/OptionD'
import HeadInfo from '../components/HeadInfo'
import { addScore, setStatus, setAnswer } from '../data'
import { connect } from 'react-redux'






class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
            width: window.innerWidth,
            time: this.props.duration,
            hight: window.innerHeight,
            choised : false
        }
        this.choise = this.choise.bind(this)
    }
    
    choise(p) {
        console.log(p)
        console.log(this.props.question.answer)
        if (this.props.question.answer === p) {
            this.props.setAnswer(true)
            this.props.setScore(this.state.time * 100)
        } else {
            this.props.setAnswer(false)
            this.props.setScore(this.state.time * 0)
        }
        this.props.setStatus("pause")
        this.setState({
            choised : true
        })
    }

    couterDown() {
        // for (var i = this.state.time; i > 0; i--) {
        //     if (this.state.choised === true) {
        //         return
        //     }
        //     setTimeout(() => {
        //         this.setState({
        //             time: this.state.time - 1
        //         })
        //     }, 1000)
        // }
        // this.choise("not choise")
        if (this.state.time > 0 && this.state.choised === false) {
            setTimeout(() => {
                this.setState({
                    time: this.state.time - 1
                })
                this.couterDown()
            }, 1000)
        } else {
            this.choise("not choise")
        }
    }


    
    

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.couterDown()
        
    }  

    resize() {
        this.setState({width : window.innerWidth, hight: window.innerHeight})
        console.log(window.innerWidth)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this))
    }
    
    render() {
        return (
            <div>
                {this.state.width <= 959 ? <HeadInfo score={this.props.score} time={this.state.time} number={this.props.question.id} total={this.props.total}/> : null}
            <div className="main">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Container>
                            <Grid container justify="center" className="head-info">
                                    {this.state.width <= 959 ? null : <Grid item md={3}><RightScore score={this.props.score} number={this.props.question.id} total={this.props.total}/></Grid>}
                                <Grid item xs={12} md={6}>
                                        <QuestionMedia src={this.props.question.media}/>
                                </Grid>
                                    {this.state.width <= 959 ? null : <Grid item md={3}><LeftTimer time={this.state.time}/></Grid>}
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                            <Question question={this.props.question.question}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Container>
                            <Grid container spacing={2} className="options">
                                <Grid item xs={6}>
                                    <button onClick={() => this.choise(this.props.question.options[0].comment)} className="button-option">
                                        <OptionA symbol={this.props.question.options[0].symbol} comment={this.props.question.options[0].comment}/>
                                    </button>
                                </Grid>
                                    <Grid item xs={6}>
                                    <button onClick={() => this.choise(this.props.question.options[1].comment)} className="button-option">
                                    <OptionB symbol={this.props.question.options[1].symbol} comment={this.props.question.options[1].comment}/>
                                    </button>
                                </Grid>
                                    <Grid item xs={6}>
                                    <button onClick={() => this.choise(this.props.question.options[2].comment)} className="button-option">
                                    <OptionC symbol={this.props.question.options[2].symbol} comment={this.props.question.options[2].comment}/>
                                    </button>                                
                                </Grid>
                                    <Grid item xs={6}>
                                    <button onClick={() => this.choise(this.props.question.options[3].comment)} className="button-option">
                                    <OptionD symbol={this.props.question.options[3].symbol} comment={this.props.question.options[3].comment}/>
                                    </button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state, ownprops) => {
    return {
        score: state.player.score,
        question: ownprops.question,
        total: ownprops.total,
        duration: state.quiz.duration
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScore: (p) => dispatch(addScore(p)),
        setStatus: (p) => dispatch(setStatus(p)),
        setAnswer: (p) => dispatch(setAnswer(p))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Quiz)
