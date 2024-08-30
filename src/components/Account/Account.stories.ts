import { Meta, StoryObj } from '@storybook/react'
import Account from './Account'

const meta: Meta = {
    title: 'Account-Component',
    component: Account,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
