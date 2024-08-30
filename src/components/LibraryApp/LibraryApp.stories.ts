import { Meta, StoryObj } from '@storybook/react'
import { LibraryAppProps } from './LibraryApp.type'
import LibraryApp from './LibraryApp'

const meta: Meta<LibraryAppProps> = {
    title: 'Library-App',
    component: LibraryApp,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<LibraryAppProps>

export const Default: Story = {}
export const Downloaded: Story = {
    args: {
        downloaded: true,
    },
}
