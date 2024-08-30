import { Meta, StoryObj } from '@storybook/react'
import Search from './Search'
import { SearchProps } from './Search.type'

const meta: Meta<SearchProps> = {
    title: 'SearchInput',
    component: Search,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        placeholder: 'Search...',
        id: 'story',
    },
}

export default meta

type Story = StoryObj<SearchProps>

export const Default: Story = {}
