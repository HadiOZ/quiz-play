import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import './player.css'

function Player(props) {
    return (
        <div>
            <Grid container spacing={1}>

                <Grid item xs={2}>
                    <Paper id="index">
                        <Grid container justify="center">
                            <span id="text-player-index">{props.index}</span>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper>
                        <Grid container justify="space-between">
                            <span id="text-player">{props.name}</span>
                            <span id="text-player">{props.score}</span>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Player
