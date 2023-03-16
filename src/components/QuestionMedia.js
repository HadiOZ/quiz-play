import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './questionmedia.css'

function QuestionMedia(props) {
    var url = process.env.REACT_APP_API + "/questmedia/" + props.src
    return (
        <Container className="media">
            {props.src == null ? null : <Grid container justify="center">
                <img src={url} alt="quizmedia" className="mediaimg"></img>
            </Grid>}
        </Container>
    )
}

export default QuestionMedia
