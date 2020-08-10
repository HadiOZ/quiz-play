import React from 'react'
import { Container, Grid, Typography, Paper } from '@material-ui/core'
import './question.css'

function Question(props) {
    return (
        <Paper elevation={0}>
            <Container className="question">
                <Grid container justify="center">
                    <Typography variant="body1" align="center">
                        {props.question}
                    </Typography>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Question
