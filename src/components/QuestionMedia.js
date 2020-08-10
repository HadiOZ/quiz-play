import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './questionmedia.css'

function QuestionMedia(props) {
    return (
        <Container className="media">
            {props.src == null ? null : <Grid container justify="center">
                <img src={props.src} alt="quizmedia" className="mediaimg"></img>
            </Grid>}
        </Container>
    )
}

export default QuestionMedia
