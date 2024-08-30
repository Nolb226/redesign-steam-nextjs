import { CheckboxProps } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta: Meta<CheckboxProps> = {
    title: 'Checkbox',
    component: Checkbox,
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Default: Story = {}
