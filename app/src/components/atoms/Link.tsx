import classnames from 'classnames'
import NextLink from 'next/link'
import type { FC } from 'react'

type Props = {
  children: string
  href: string
  className?: string
}

const Link: FC<Props> = ({ children, className, href }) => {
  return (
    <NextLink href={href} className={classnames('text-xl text-blue-300 font-bold', className)}>
      {children}
    </NextLink>
  )
}

export default Link
