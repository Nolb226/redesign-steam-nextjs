import React from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const tagVariants = cva('rounded-[0.1875rem] px-3.25 py-1 body-small', {
    variants: {
        variant: {
            default: 'bg-background/highlight text-text/dim',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

interface ITagProps
    extends React.HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof tagVariants> {
    asChild?: boolean
}

function Tag({ className, asChild, variant, ...props }: ITagProps) {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={tagVariants({ variant, className })} {...props} />
}

export default Tag
