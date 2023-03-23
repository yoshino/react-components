import type { Dispatch, SetStateAction } from 'react'
import { useState, useEffect, useRef } from 'react'

const useStorageState = (props: {
  key: string
  initialValue: string
}): [string, Dispatch<SetStateAction<string>>] => {
  const { key, initialValue } = props
  const [value, setValue] = useState(initialValue)
  const didMountRef = useRef(false)

  // initialization
  useEffect(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      setValue(storageValue)
    } else {
      setValue(initialValue)
    }
  }, [key, initialValue])

  // update except for mount
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
    } else {
      setValue(value)
      localStorage.setItem(key, value)
    }
  }, [value, key, initialValue])

  return [value, setValue]
}

export default useStorageState
