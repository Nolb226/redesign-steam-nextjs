import React from 'react'
import { ButtonProps } from './Button.type'
import { tv } from 'tailwind-variants'

function Button<T extends React.ElementType>({
    size,
    children,
    as,
    className,
    variant = 'primary',
    ...props
}: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
    const Wrapper = as || 'button'
    const button = tv({
        base: 'inline-block min-w-[120px] rounded-border py-4 text-center body-large',
        variants: {
            color: {
                primary:
                    'bg-secondary-color text-main hover:bg-primary hover:text-bg/main',
                secondary: 'bg-highlight text-main hover:bg-hover',
                tertiary:
                    'text-main shadow-[0_0_0_1px] shadow-highlight hover:shadow-hover',
                outline:
                    'text-dim shadow-[0_0_0_1px] shadow-dim/20 hover:text-main hover:shadow-dim/40',
                install: 'bg-primary',
                play: 'bg-accent-green',
                pause: 'bg-hover text-main hover:bg-tertiary',
            },
        },
        defaultVariants: {
            color: 'primary',
        },
        compoundVariants: [
            {
                color: ['play', 'install'],
                class: 'text-bg/main',
            },
            {
                color: ['install', 'play', 'pause'],
                class: 'flex items-center justify-center heading-small',
            },
        ],
    })

    return (
        <Wrapper {...props} className={button({ color: variant!, className })}>
            {children}
        </Wrapper>
    )
}

export default Button
