import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (evt) => {
    const filterValue = evt.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterContainer>
      Find contacts by name:
      <br />
      <FilterInput
        type="text"
        onChange={handleFilterChange}
        placeholder="search..."
      />
    </FilterContainer>
  );
};

export default Filter;