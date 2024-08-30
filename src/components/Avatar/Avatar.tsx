import React from 'react'
import { AvatarProps } from './Avatar.type'
import clsx from 'clsx'

function Avatar({ src, status = 'offline', className, ...props }: AvatarProps) {
    return (
        <div
            data-status={status}
            className={`overflow-hidden rounded-md p-0.5 data-[status=away]:bg-accent-yellow data-[status=offline]:bg-dim data-[status=online]:bg-primary ${className}`}
        >
            <img
                className="size-full rounded-[4px] object-cover"
                src={src}
                {...props}
            />
        </div>
    )
}

export default Avatar
