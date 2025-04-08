import React from 'react'

import { cn } from '@/lib/utils'

interface ILibrarySidebarItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    icon?: string
    selected?: boolean
}

function LibrarySidebarItem({
    icon,
    title,
    className,
    ...props
}: ILibrarySidebarItemProps) {
    return (
        <div
            className={cn(
                'px-3.25 py-1.5 items-center cursor-pointer hover:rounded-[0.1875rem] hover:bg-background/hover max-h-[30px] flex gap-2.5 ',
                className
            )}
            {...props}
        >
            <div className="size-5.25 bg-background/main rounded-[0.1875rem]">
                {icon}
            </div>
            <div className="body-medium text-text/main">{title || 'Title'}</div>
        </div>
    )
}

export default LibrarySidebarItem
