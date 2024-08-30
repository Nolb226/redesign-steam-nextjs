import { Meta, StoryObj } from '@storybook/react'
import Wishlist from './Wishlist'
import { userEvent, within } from '@storybook/test'
import { WishlistProps } from './Wishlist.type'

const meta: Meta<WishlistProps> = {
    title: 'Buttons/Wishlist',
    component: Wishlist,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<WishlistProps>

export const Default: Story = {}
