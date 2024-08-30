import { Meta, StoryObj } from '@storybook/react'
import Filter from './Filter'

function FilterExample() {
    return (
        <Filter searchable>
            <Filter.Category>
                <Filter.Tag>Action</Filter.Tag>
                <Filter.Tag>Adventure</Filter.Tag>
                <Filter.Tag>RPG</Filter.Tag>
                <Filter.Tag>Simulation</Filter.Tag>
                <Filter.Tag>Strategy</Filter.Tag>
            </Filter.Category>
            <Filter.Category>
                <Filter.Tag>RPG</Filter.Tag>
                <Filter.Tag>Simulation</Filter.Tag>
                <Filter.Tag>Strategy</Filter.Tag>
            </Filter.Category>
        </Filter>
    )
}

const meta: Meta = {
    title: 'Filter',
    component: FilterExample,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Filter>

export const Default: Story = {}
