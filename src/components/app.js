import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Home from './modules/home';
import Inbox from './modules/inbox';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      data: []
    };
    this.resetData = this.resetData.bind(this);
  }

  resetData() {
    this.setState({data: []});
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    const { inbox, words } = this.props;

    return (
      <div className='app'>
        <Home />
        <Inbox
          inbox={inbox}
          words={words}
          term={this.state.term}
          update={this.updateData.bind(this)}
          reset={this.resetData}
          result={this.state.data}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inbox, words } = state;
  return {
    inbox: inbox.inbox || [],
    words: words.words || [],
  };
}

export default connect(mapStateToProps)(App);
