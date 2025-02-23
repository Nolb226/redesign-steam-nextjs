import { cn } from '@/lib/utils'
import React from 'react'

function SettingsCard({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex flex-col gap-2.75 rounded-[0.1875rem] bg-background/main p-4',
                className
            )}
            {...props}
        />
    )
}

function SettingsCardTitle({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className="pb-6 text-text/dim heading-medium" {...props} />
}

export { SettingsCard, SettingsCardTitle }
