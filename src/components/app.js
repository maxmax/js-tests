import React, { Component } from 'react';
import {connect} from 'react-redux';
import Section from './elements/Section';
import Searchbar from './elements/Searchbar';

import './app.css';

class App extends Component {
  render() {
    const { words } = this.props;
    console.log("words", words);

    return (
      <div className='app'>
        <Section>
          <section>
            <article>
              <h2>Hello React!</h2>
              <p>Be sure to have your pages set up with...</p>
            </article>
          </section>
          <section>
            <Searchbar />
          </section>
          <section>
            <article>
              <h2>Result:</h2>
              <p>Empty</p>
            </article>
          </section>
        </Section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inwords } = state;
  return {
    words: inwords.words || [],
  };
}

export default connect(mapStateToProps)(App);
