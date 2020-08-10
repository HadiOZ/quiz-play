import React, { Component } from 'react'
import {Grid, Typography } from '@material-ui/core'
import './panding.css'

 class Panding extends Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={10} md={4}>
                        <div className="title">
                            <Typography id="title-text">QUIZ INFO</Typography>        
                        </div> 
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={10} md={4}>
                        <div className="detail">
                            <Typography id="title-text">QUIZ INFO</Typography>        
                        </div> 
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Panding