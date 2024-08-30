import { Meta, StoryObj } from '@storybook/react'
import Toggle from './Toggle'
import { ToggleProps } from './Toggle.type'

const meta: Meta<ToggleProps> = {
    title: 'Toggle',
    component: Toggle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<ToggleProps>
export const Default: Story = {}
