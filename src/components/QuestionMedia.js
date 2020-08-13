import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './questionmedia.css'

function QuestionMedia(props) {
    var url ='http://117.53.46.220:8000/questmedia/'+ props.src
    return (
        <Container className="media">
            {props.src == null ? null : <Grid container justify="center">
                <img src={url} alt="quizmedia" className="mediaimg"></img>
            </Grid>}
        </Container>
    )
}

export default QuestionMedia
