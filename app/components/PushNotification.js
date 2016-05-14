import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import { Link } from 'react-router';

export default class PushNotification extends Component {
  constructor() {
    super();
    this.state = { text: 'Push Notification Demo' };
  }

  handleSubmit() {
    console.log(this.state.text);
    ipcRenderer.send('register', this.state.text);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h1>Push Notification</h1>
        <input value={this.state.text} onChange={this.handleChange.bind(this)} />
        <button className="fa" onClick={this.handleSubmit.bind(this)}>Register</button>
      </div>
    );
  }
}
