import classnames from 'classnames'
import type { FC } from 'react'

type Props = {
  children: string
  className?: string
}

const Title: FC<Props> = ({ children, className }) => {
  return <h1 className={classnames('text-4xl font-bold', className)}>{children}</h1>
}

export default Title
