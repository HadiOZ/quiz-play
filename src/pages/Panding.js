import React, { Component } from 'react'
import {Grid, Typography } from '@material-ui/core'
import './panding.css'
import { connect } from 'react-redux'

import { setStatus } from '../data'

class Panding extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <React.Fragment>
                {this.props.quiz.title === '' ? null : <div>
                    <Grid container justify="center">
                        <Grid item xs={10} md={4}>
                            <div className="title">
                                <Grid container justify="center">
                                    <Typography id="title-text">QUIZ INFO</Typography>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={10} md={4}>
                            <div className="detail">

                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container justify="space-between">
                                            <Typography id="sub">Title</Typography>
                                            <Typography id="sub">:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography id="pub">{this.props.quiz.title}</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container justify="space-between">
                                            <Typography id="sub">Author</Typography>
                                            <Typography id="sub">:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography id="pub">{this.props.quiz.author}</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container justify="space-between">
                                            <Typography id="sub">Duration</Typography>
                                            <Typography id="sub">:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography id="pub">{this.props.quiz.duration}</Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container justify="space-between">
                                            <Typography id="sub">Category</Typography>
                                            <Typography id="sub">:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography id="pub">{this.props.quiz.category}</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container justify="space-between">
                                            <Typography id="sub">Description</Typography>
                                            <Typography id="sub">:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography id="pub">{this.props.quiz.description}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Typography id="yub">GET READY</Typography>
                    </Grid>
                </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    // console.log(state.player.username)
    // console.log(state.player.code)
    return {
        quiz: state.quiz,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (p) => dispatch(setStatus(p)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Panding)