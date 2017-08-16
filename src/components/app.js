import React, { Component } from 'react';
import Section from './elements/Section';
import Searchbar from './elements/Searchbar';

import './app.css';

class App extends Component {
  render() {
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

export default App;
