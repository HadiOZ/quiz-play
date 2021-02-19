import React, { Component } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import './finish.css'
import Player from '../components/Player'

import { setStatus } from '../data'
import { connect } from 'react-redux'


export class Finish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {  
            rank: 0,
            score: 0
        }
    }

    componentDidMount() {
        this.props.result.forEach((e, i) => {
            if (e.nickname === this.props.username) {
                this.setState({
                    rank: i + 1,
                    score: e.score
                })
            }
        })
    }
    
    render() {
        let data = this.props.result
        data.sort((a, b) => { return b.score - a.score })
        const list = data.map((value, key) => <Player key={key} name={value.nickname} index={key + 1} score={value.score} />)
        return (
            <Container className="frame-result">
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Grid item xs={12} md={12}>
                                <Grid container justify="center">
                                    <Typography id="finish-result-t">QUIZ HAS FINISHED</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={5}>
                            <div className="sub-header-result">
                                <Grid container justify="space-between">
                                    <div>
                                        <Grid container justify="center">
                                            <Grid item xs={12}>
                                               <Typography id="title-sub-result" align="center">Your Rank:</Typography> 
                                            </Grid>
                                            <Grid item xs={12}>
                                                    <Typography id="title-value-result" align="center">{this.state.rank}</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid container justify="center">
                                            <Grid item xs={12}>
                                               <Typography id="title-sub-result" align="center">Your Score:</Typography> 
                                            </Grid>
                                            <Grid item xs={12}>
                                                    <Typography id="title-value-result" align="center">{this.state.score}</Typography>
                                            </Grid>
                                        </Grid>
                                        </div>
                                    </Grid>
                                    </div>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={7}>
                                <div className="list-player-result">
                                    {list}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}


const mapStateToProps = (state, ownprops) => {
    console.log(ownprops.username)
    return {
        result: state.player.result,
        username: ownprops.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (p) => dispatch(setStatus(p)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Finish)
