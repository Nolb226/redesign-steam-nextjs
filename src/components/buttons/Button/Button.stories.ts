import { Meta, StoryObj } from '@storybook/react'
import { ButtonProps } from './Button.type'
import Button from './Button'

const meta: Meta<ButtonProps<'button'>> = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
}

export default meta

type Story = StoryObj<ButtonProps<'button'>>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
}

export const Play: Story = {
    args: {
        variant: 'play',
        children: 'Play',
    },
}
export const Install: Story = {
    args: {
        variant: 'install',
        children: 'Install',
    },
}
export const Pause: Story = {
    args: {
        variant: 'pause',
        children: 'Pause',
    },
}
