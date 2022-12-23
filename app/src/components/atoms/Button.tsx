import classnames from 'classnames'

type Props = {
  children: string
  disabled?: boolean
  className?: string
  onClick?: () => void
}

function Button(props: Props) {
  const { children, className = '', onClick } = props

  return (
    <button
      {...props}
      className={classnames('bg-blue-500 text-white px-4 py-2 rounded-lg', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
