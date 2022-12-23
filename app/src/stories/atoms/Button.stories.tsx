import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from '../../components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  disabled: false,
}
