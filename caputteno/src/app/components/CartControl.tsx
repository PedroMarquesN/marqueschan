import React from 'react'
import { CartIcon } from '../assets/CartIcon'
import useLocalStorage from '../hooks/useLocalStorage'
import styled from 'styled-components'


const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 12px;


  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;

`

const Container = styled.div`
  position: relative;
`


const CartControl = () => {
  const {value} = useLocalStorage('cart-items') as { value: string[] };
  return (
    <div>
    <CartIcon />
    {value.length > 0 && <CartCount>{value.length}</CartCount>}

    </div>
  )

}

export default CartControl