import React from 'react';
import './section.css';

function Section({children}) {
  return (
    <section className="section auto">
      {children}
    </section>
  )
}

export default Section;
