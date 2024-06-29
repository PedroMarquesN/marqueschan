"use client";
import { FilterTypes } from "@/app/@types/FilterTypes";
import { useFilter } from "@/app/hooks/useFilter";
import React from "react";
import styled from "styled-components";

interface FilterProps {}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

interface FilterItemProps {
  select?: boolean;
}
const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 16px;
  font-weight: ${(props) => (props.select ? "600" : "400")};
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.select ? "2px solid var(--orange-low)" : "none"};
`;

const FilterByType: React.FC<FilterProps> = (props) => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        select={type === FilterTypes.ALL}
        onClick={() => handleChangeType(FilterTypes.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        select={type === FilterTypes.SHIRT}
        onClick={() => handleChangeType(FilterTypes.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        select={type === FilterTypes.MUG}
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
};

export default FilterByType;
