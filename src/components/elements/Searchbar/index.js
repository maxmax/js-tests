import React from 'react';
import './searchbar.css';

function Searchbar( { term, data, update } ) {

  const dataSearch = e => {
    //const value = e.target.value.toLowerCase();
    //const filter = data.filter(inbox => {
    //  return inbox.text.toLowerCase().includes(value);
    //});

    //update({
    //  data: filter,
    //  active: 0,
    //  term: value
    //});
    console.log("dataSearch");

  };

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={dataSearch}
      />
    </div>
  )
};

export default Searchbar;
