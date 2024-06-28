import React from 'react'

export function useLocalStorage<T>(item:string) {
    const [value, setValue] = React.useState<T>(JSON.parse(localStorage.getItem(item) || ''))

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }



  return {
    value,
    updateLocalStorage
  }
}

export default useLocalStorage
