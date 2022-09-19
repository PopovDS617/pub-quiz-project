import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <form className="team-search-form">
      <input type="text" placeholder="введите название команды" />
      <button>найти</button>
    </form>
  );
};

export default SearchBar;
