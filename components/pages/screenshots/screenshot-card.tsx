import { Icon } from '@/components/icons'
import { cn } from '@/lib/utils'
import React from 'react'
interface IScreenshotCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

function ScreenshotCard({ title, className, ...props }: IScreenshotCardProps) {
    return (
        <div
            className={cn(
                'flex flex-col gap-2.5 rounded-[0.125rem] bg-background/main/50 p-2.5',
                className
            )}
            {...props}
        >
            <div className="h-[224px] bg-background/highlight"></div>
            <div className="flex items-center justify-between">
                <span className="text-color/primary body-large">{title}</span>
                <div className="flex gap-2">
                    <div className="flex gap-1.25 rounded-[0.125rem] bg-background/main px-2.5 py-[0.59375rem]">
                        <Icon.thumbUp className="size-4 fill-text/dim" />
                        <span className="text-color/primary body-small">
                            12
                        </span>
                    </div>
                    <div className="flex gap-1.25 rounded-[0.125rem] bg-background/main px-2.5 py-[0.59375rem]">
                        <Icon.chatBubble className="size-4 fill-text/dim" />
                        <span className="text-color/primary body-small">
                            12
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenshotCard
