
import { Provider } from 'react-redux'
import store from './data/stored';
import Root from './Root';
import React, { Component } from 'react'
import Login from './pages/Login';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      code: '',
      username: '',
    }

    this.changeCondition = this.changeCondition.bind(this)  
  }

  changeCondition(code, username) {
    this.setState({
      code: code,
      username: username,
      })
  }
  
  render() {
    var login = <Login change={this.changeCondition} />
    var root  = <Provider store={store}><Root code={this.state.code} username={this.state.username}/></Provider>
    return (
      <div>
        {this.state.code === '' && this.state.username === '' ? login : root}
      </div>
    )
  }
}


export default App;
