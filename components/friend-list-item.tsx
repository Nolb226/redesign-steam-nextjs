import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cva } from 'class-variance-authority'
import LevelCircle from './level-circle'
import { Slot } from '@radix-ui/react-slot'

interface IFriendListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    status?: 'online' | 'offline' | 'away'
    name?: string
    activity?: string
    avatar?: string
    level?: number
    asChild?: boolean
}

const textStatusVariants = cva('', {
    variants: {
        status: {
            online: 'text-color/primary',
            offline: 'text-text/dim',
            away: 'text-accent/yellow',
        },
    },
})

function FriendListItem({
    className,
    status = 'online',
    name,
    activity,
    level,
    avatar,
    asChild,
    ...props
}: IFriendListItemProps) {
    const Comp = asChild ? Slot : 'div'
    return (
        <Comp className={cn('flex gap-2', className)} {...props}>
            <Avatar state={status}>
                <AvatarImage src={avatar} alt="avatar" />
                <AvatarFallback />
            </Avatar>
            <div
                className={cn(
                    'flex flex-col gap-2 leading-3 body-large',
                    textStatusVariants({ status })
                )}
            >
                <div>{name}</div>
                <div className="line-clamp-1 body-small">{activity}</div>
            </div>
            {level && (
                <div className="ml-auto self-center">
                    <LevelCircle size="sm" level={level} />
                </div>
            )}
        </Comp>
    )
}

export default FriendListItem
