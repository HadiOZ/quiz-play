import React from 'react'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import './headinfo.css'

const HeadInfos = styled(AppBar)({
    width: '100%',
    boxShadow: 'none'
})

function HeadInfo(props) {
    return (
        <HeadInfos position="sticky" color="default">
            <Toolbar>
                <Grid container justify="space-between">
                <Typography id="text-info">
                    SCORE : {props.score}
                </Typography>
                <Typography id="text-info">
                        {props.number}/{props.total}
                </Typography>
                <Typography id="text-info">
                    TIMER : {props.time}
                </Typography>
                </Grid>
            </Toolbar>
        </HeadInfos>
    )
}

export default HeadInfo
