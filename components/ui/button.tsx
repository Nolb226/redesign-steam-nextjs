import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.1875rem] ring-offset-white transition-colors body-large focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90',
                destructive: 'bg-accent/red hover:bg-accent/red/90',
                secondary:
                    'bg-background/highlight px-5 py-4.25 leading-3 hover:bg-background/hover',
                ghost: 'hover:bg-background/hover hover:text-slate-50',
                tertiary: 'px-5 py-4.25 text-text/dim ring-1 ring-text/dim/20',
                link: 'text-color/secondary underline-offset-4 hover:underline',
                'icon-box':
                    'rounded-[0.1875rem] bg-text/dim/[10%] fill-text/dim p-1.25 text-text/dim hover:bg-text/dim/25 [&_svg]:size-7.5 [&_svg_path]:fill-text/dim [&_svg_path]:hover:fill-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
