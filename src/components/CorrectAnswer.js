import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import './answer.css'

function CorrectAnswer(props) {
    return (
        <Container className="true-cont">
                <Grid container justify="center">
                <div className="frame">
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Typography align="center" id="text">CORRECT</Typography>
                    </Grid>  
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Typography align="center" id="score-text">score :</Typography>
                    </Grid>  
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Typography align="center" id="score-count">{props.score}</Typography>
                    </Grid>  
                        </Grid>
                        </div>
                </Grid>
        </Container>
    )
}

export default CorrectAnswer
