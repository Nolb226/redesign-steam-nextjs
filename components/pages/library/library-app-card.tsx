import React from 'react'

import { cn } from '@/lib/utils'

interface ILibraryAppCardProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string
}

function LibraryAppCard({ className, ...props }: ILibraryAppCardProps) {
    return (
        <div
            className={cn(
                'app-card min-w-[191px] h-[281px] hover:rotate-12 flex-shrink-0',
                className
            )}
            {...props}
        >
            <img
                className="object-cover"
                src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3241660/46b4813ef1cd20664299c9e5de847f3579b44f2e/library_600x900.jpg"
                alt=""
            />
        </div>
    )
}

export default LibraryAppCard
