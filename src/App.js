import React, { Component } from 'react';

import Alert from './ui-components/Alert'

class App extends Component {

  constructor() {
    super();

    this.state = {
      showAlert: true
    };

    this.toggleAlert = this.toggleAlert.bind(this)
  }

  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }

  render() {
    return (
      <div className="container">
        <Alert toggleAlert={this.toggleAlert} show={this.state.showAlert} type="success" message='run flows'/>
      </div>
    )
  }
};

export default App;
