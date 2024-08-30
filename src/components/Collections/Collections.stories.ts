import { Meta, StoryObj } from '@storybook/react'
import { CollectionsProps } from './Collections.type'
import Collections from './Collections'

const meta: Meta<CollectionsProps> = {
    title: 'Collections',
    component: Collections,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<CollectionsProps>

export const Default: Story = {}
