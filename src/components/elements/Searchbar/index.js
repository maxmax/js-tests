import React from 'react';

function Searchbar( { term, data, update } ) {

  const dataSearch = e => {
    const value = e.target.value.toLowerCase();
    const filter = data.filter(inbox => {
      return inbox.text.toLowerCase().includes(value);
    });
    update({
      data: filter,
      active: 0,
      term: value
    });
  };

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={dataSearch}
      />
    </div>
  )
};

export default Searchbar;
