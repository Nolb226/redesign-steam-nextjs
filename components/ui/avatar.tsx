'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const avatarVariants = cva(
    'relative flex size-11.5 shrink-0 overflow-hidden rounded-[2px] ring-2',
    {
        variants: {
            state: {
                online: 'ring-color/primary',
                offline: 'ring-text/dim',
                away: 'ring-accent/yellow',
                invisible: 'ring-text/dim',
            },
            size: {
                xs: 'size-5.25',
                sm: 'size-7.75',
                md: 'size-11.5',
                lg: 'size-55.25 ring-4',
            },
        },
        defaultVariants: {
            state: 'online',
            size: 'md',
        },
    }
)

interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
        VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, state, size, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ size, state, className }))}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn('aspect-square h-full w-full', className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            'flex h-full w-full items-center justify-center rounded-[2px] bg-background/main',
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
