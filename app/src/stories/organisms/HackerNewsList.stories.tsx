import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'

import HackerNewsList from '../../components/organisms/HackerNewsList'

export default {
  title: 'Organisms/HackerNewsList',
  component: HackerNewsList,
} as ComponentMeta<typeof HackerNewsList>

const Template: ComponentStory<typeof HackerNewsList> = (args) => <HackerNewsList {...args} />

export const Default = Template.bind({})

Default.args = {
  stories: [
    {
      title: 'Apple stories',
      author: 'Steve Jobs',
      objectID: '3',
      num_comments: 0,
    },
    {
      title: 'Brazilian styles',
      author: 'Arthur Antunes Coimbra',
      objectID: '2',
      num_comments: 10,
    },
    {
      title: 'Common Sense',
      author: 'Thomas Paine',
      objectID: '1',
      num_comments: 100,
    },
  ],
}
