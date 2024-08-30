import { Meta, StoryObj } from '@storybook/react'
import Price from './Price'
import { PriceProps } from './Price.type'

const meta: Meta<PriceProps> = {
    title: 'Price',
    component: Price,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<PriceProps>

export const Default: Story = {}
export const SaleOff: Story = {
    args: {
        sale: true,
    },
}
