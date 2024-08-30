import { Meta, StoryObj } from '@storybook/react'
import Tag from './Tag'
import { TagProps } from './Tag.type'

const meta: Meta<TagProps> = {
    title: 'Tag',
    component: Tag,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<TagProps>

export const Default: Story = {
    args: {
        children: 'Adventure',
    },
}
