import React, { Component } from 'react'
import { Container, Grid, Snackbar } from '@material-ui/core'
import './login.css'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            code: '',
            nickname: '',
            error: false,
            messageError: ''
        }

        this.inputRef = React.createRef()
        this.nicknameRef = React.createRef()
        this.codeHandel = this.codeHandel.bind(this)
        this.submitHandel = this.submitHandel.bind(this)
        this.keyUpHandel = this.keyUpHandel.bind(this)
        this.submitNicname = this.submitNicname.bind(this)
        this.nickKeyUp = this.nickKeyUp.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }
    codeHandel() {
        console.log(this.inputRef.current.value)
    }


    handleClose(event, reason) {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({
            error: false
        })
    }

    handleOpen(message) {
        this.setState({
            messageError: message,
            error: true
        })
    }

    submitHandel() {
        const value = this.inputRef.current.value
        const url = process.env.REACT_APP_HTTP + "/check?code="+value
        Axios.get(url).then((res) => {
            console.log(res.data)
            if (res.data.status === 0) {
                this.handleOpen(res.data.message)
            } else {
                this.setState({
                    code: value
                }, () => this.nicknameRef.current.value = '')
            }
        })
    }

    submitNicname() {
        const nick = this.nicknameRef.current.value
        this.setState({
            nickname: nick
        }, () => {
            this.nicknameRef.current.value = ''
            this.props.change(this.state.code, this.state.nickname)
        })
    }


    nickKeyUp(event) {
        if (event.keyCode === 13) {
            this.submitNicname()
        }
    }

    keyUpHandel(event) {
        if (event.keyCode === 13) {
            this.submitHandel()
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <Container className="cont-login">
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <img className="logo" src={require('../assets/logoquizippy.png')}  alt="logo product" ></img>
                        </Grid>
                    </Grid>
                    { this.state.code === '' ? <Grid item xs={12}>
                        <Grid container justify="center">
                            <div className="bordered">
                                    <input className="code" type='text'  placeholder="room code" ref={this.inputRef} onKeyUp={this.keyUpHandel} />
                                    <button className="submit" onClick={this.submitHandel}>
                                        <FontAwesomeIcon icon={faPlay} color="white" width="20px" />
                                    </button>
                            </div>
                        </Grid>
                    </Grid> :
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div className="bordered">
                                        <input className="nickname" type="text" ref={this.nicknameRef} placeholder="nickname" onKeyUp={this.nickKeyUp}></input>
                                        <button className="submit" onClick={this.submitNicname}>
                                            <FontAwesomeIcon icon={faPlay} color="white" width="20px" />
                                        </button>
                                </div>
                            </Grid>
                        </Grid>}
                </Grid>
                <Snackbar autoHideDuration={2000} open={this.state.error} onClose={this.handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <MuiAlert onClose={this.handleClose} severity="error" elevation={0}>
                        {this.state.messageError}
                    </MuiAlert>
                </Snackbar>
            </Container>
        )
    }
}

export default Login
