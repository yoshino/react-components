import { useState, useEffect, Dispatch, SetStateAction } from 'react'

const useStorageState = (props: {
  key: string
  initialValue: string
}): [string, Dispatch<SetStateAction<string>>] => {
  const { key, initialValue } = props
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const storageValue = localStorage.getItem(key)
    console.log('get local storage: ', storageValue)
    if (storageValue) setValue(storageValue)
  }, [])

  useEffect(() => {
    if (value !== initialValue) {
      localStorage.setItem(key, value)
    }
  }, [value, key])

  return [value, setValue]
}

export default useStorageState
