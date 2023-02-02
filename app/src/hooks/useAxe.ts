import React, { useEffect } from 'react'

export const useAxe = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    (async () => {
      const axe = await import('@axe-core/react')
      const locale = await import('axe-core/locales/ja.json')
      const ReactDOM = await import('react-dom')
      // @ts-expect-error For the error of package type
      axe.default(React, ReactDOM, 1000, { locale })
    })()
  }, [])
}
