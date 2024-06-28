'use client'
import React from 'react'
import FilterByType from './FilterByType'
import styled from 'styled-components'

const FilterContainer = styled.div`
display: flex;
align-items: start;
width: 100%;
`

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterByType />
      
    </FilterContainer>
  )
}

export default FilterBar
