import { Meta, StoryObj } from '@storybook/react'
import { FriendsProps } from './Friends.type'
import Friends from './Friends'

const meta: Meta<FriendsProps> = {
    title: 'Friends-Component',
    component: Friends,
    parameters: {
        layout: '',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<FriendsProps>

export const Default: Story = {}
