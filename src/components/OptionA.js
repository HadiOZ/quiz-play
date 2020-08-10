import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import './option.css'

function Option(props) {
    return (
        <Container className="option">
            <Grid container justify="center">
                <Grid item xs={12} md={8}>
                    <Container className="symbol color-a">
                        <Grid container justify="center">
                            <Typography id="symbol-text">
                                {props.symbol}
                            </Typography>
                        </Grid>
                    </Container>
                </Grid>

                {props.comment == null ? null :
                    <Grid item xs={12}>
                        <Container className="comment">
                            <Grid container justify="center">
                                <Typography className="comment-text" variant="subtitle1">
                                    {props.comment}
                                </Typography>
                            </Grid>
                        </Container>
                    </Grid>}
            </Grid> 
        </Container>
    )
}

export default Option
