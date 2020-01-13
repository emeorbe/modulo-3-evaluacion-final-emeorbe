import React from 'react';

const FilterCartoon = props =>{
  const handleSearch = evt =>{
    props.handleSearch(evt.target.value)
  }
  return(
    <form>
      <input type='search' onChange={handleSearch} value={props.value} name='search'></input>
    </form>
  )
}
export default FilterCartoon;

