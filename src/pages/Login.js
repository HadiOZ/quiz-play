import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import './login.css'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            code: '',
            nickname: '',
        }

        this.inputRef = React.createRef()
        this.nicknameRef = React.createRef()
        this.codeHandel = this.codeHandel.bind(this)
        this.submitHandel = this.submitHandel.bind(this)
        this.keyUpHandel = this.keyUpHandel.bind(this)
        this.submitNicname = this.submitNicname.bind(this)
        this.nickKeyUp = this.nickKeyUp.bind(this)
    }

    codeHandel() {
        console.log(this.inputRef.current.value)
    }

    submitHandel() {
        var value = this.inputRef.current.value
        this.setState({
            code: value
        }, () => this.nicknameRef.current.value = '')

    }

    submitNicname() {
        var nick = this.nicknameRef.current.value
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
    
    render() {
        return (
            <Container className="cont-login">
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <img className="logo" src="https://www.gam.com.br/index/wp-content/uploads/2017/10/default-logo.png" alt="logo product" ></img>
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

            </Container>
        )
    }
}

export default Login
