import type { NextPage } from 'next'

import Title from '../components/atoms/Title'
import Accordion from '../components/organisms/Accordion'

const AccordionWithLocalStorage: NextPage = () => {
  return (
    <div className='m-10'>
      <Title>Accordion with local storage</Title>
      <Accordion />
    </div>
  )
}

export default AccordionWithLocalStorage
