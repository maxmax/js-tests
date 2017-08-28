import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Section from '../elements/Section';
import Items from '../elements/Items';
import Searchbar from '../elements/Searchbar';
import Selectbar from '../elements/Selectbar';

function Inbox({inbox, words, term, update, reset, result}) {
  return (
    <Section>
      <section>
        <article>
          <h2>Inbox</h2>
          <Items data={inbox} />
        </article>
      </section>
      <section>
        <article>
          <h2>Filter</h2>
          <br />
          <Searchbar
            term={term}
            data={inbox}
            update={update}
          />
          <Selectbar
            term={term}
            data={inbox}
            update={update}
            items={words}
          />
          {result[0] ? (
            <Button
              color="primary"
              className="filter"
              onClick={reset}
            >
              Reset
            </Button>
          ) : null}
        </article>
      </section>
      <section>
        <article>
          <h2>Result</h2>
          <Items
            data={result}
            empty="Not been selected." />
        </article>
      </section>
    </Section>
  )
}

export default Inbox;
