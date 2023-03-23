import classnames from 'classnames'
import type { FC } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'

type Props = {
  className?: string
}

const Accordion: FC<Props> = ({ className }) => {
  const [isOpen, setOpen] = useLocalStorage({ key: 'accordionIsOpen', initialValue: 'CLOSE' })
  const toggle = () => (isOpen == 'OPEN' ? setOpen('CLOSE') : setOpen('OPEN'))

  return (
    <div className={classnames(className)}>
      <button
        className='text-xl font-bold mt-4 mb-2  w-full py-2 border-b-2'
        onClick={() => toggle()}
      >
        ロナウド(Click me!)
      </button>
      <div className={classnames(isOpen == 'OPEN' ? '' : 'hidden', 'flex flex-col')}>
        <div className='my-2'>ロナウド・デ・アシス・モレイラ</div>
        <div className='my-2'>クリスティアーノ・ロナウド・ドス・サントス・アヴェイロ</div>
        <div className='my-2'>ロナウド・ルイス・ナザーリオ・デ・リマ</div>
      </div>
    </div>
  )
}

export default Accordion
