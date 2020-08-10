import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import './lefttimer.css'

function LeftTimer(props) {
    return (
        <Container className="left-container">
            <Grid container justify="center">
                <Typography id="time" align="center">{props.time}</Typography>
                <Typography id="timer" align="center">sec</Typography>
            </Grid>
        </Container>
    )
}


export default LeftTimer
