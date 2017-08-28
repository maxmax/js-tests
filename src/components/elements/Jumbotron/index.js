import React from 'react';
import './style.css';

function Jumbotron( { children } ) {
  return (
    <section className="jumbotron jumbotron-fluid">
      {children}
    </section>
  )
}

export default Jumbotron;
