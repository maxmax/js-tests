import React, { Component } from 'react';

class TestApp extends Component {

  render() {
    const { inbox, words } = this.props;

    return (
      <div className='app'>
        <strong>Hello react</strong>
      </div>
    );
  }
}

export default TestApp;
