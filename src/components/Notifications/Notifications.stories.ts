import { Meta, StoryObj } from '@storybook/react'
import { NotificationsProps } from './Notifications.type'
import Notifications from './Notifications'

const meta: Meta<NotificationsProps> = {
    title: 'Notifications',
    component: Notifications,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<NotificationsProps>

export const Default: Story = {}
