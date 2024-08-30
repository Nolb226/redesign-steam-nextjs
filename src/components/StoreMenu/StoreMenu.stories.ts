import { Meta, StoryObj } from '@storybook/react'
import StoreMenu from './StoreMenu'
import { StoreMenuProps } from './StoreMenu.type'

const meta: Meta<StoreMenuProps> = {
    title: 'StoreMenu',
    component: StoreMenu,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<StoreMenuProps>

export const Default: Story = {}
