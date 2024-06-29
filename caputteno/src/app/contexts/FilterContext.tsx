'use client'
import React, { createContext } from 'react';
import { FilterTypes } from '../@types/FilterTypes';


export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value:  FilterTypes) => {},
});

interface FilterContextProps {
  children: React.ReactNode;
}

export function FilterContextProvider({children}: FilterContextProps) {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [type, setType] = React.useState(FilterTypes.ALL);

  return (
    <FilterContext.Provider value={{ search, page, type, setSearch, setType, setPage }}>
      {children}
    </FilterContext.Provider>
  );
}
