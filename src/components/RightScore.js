import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import './rightscore.css'

function RightScore(props) {
    return (
        <Container className="right-container">
            <Grid container justify="center">
                <Typography align="center" id="count">{props.number}/{props.total}</Typography>
            </Grid>
            <Grid container justify="center">
                <Typography align="center" id="score">SCORE : </Typography>
                <Typography align="center" id="int">{props.score}</Typography>
            </Grid>
        </Container>
    )
}

export default RightScore
