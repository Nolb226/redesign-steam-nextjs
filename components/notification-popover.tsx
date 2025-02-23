import React from 'react'
import { Button } from './ui/button'
import { Icon } from './icons'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Badge } from './ui/badge'

function NotificationPopover() {
    return (
        <Popover>
            <PopoverTrigger className="relative rounded-[0.1875rem] bg-background/highlight px-4 py-1.5 hover:bg-background/hover">
                <Icon.notification className="size-6.25" />
                <Badge className="absolute right-0.5 top-0 size-4 -translate-y-0.5 translate-x-1/2 pl-1">
                    1
                </Badge>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={15}
                className="flex max-h-[166px] flex-col gap-4 rounded-md bg-background/highlight"
                side="bottom"
                align="start"
            >
                <div className="flex items-center justify-between">
                    <p className="heading-small">Notifications</p>
                    <div className="flex items-center gap-1.5">
                        <Button
                            variant={null}
                            size={null}
                            className="rounded-[3px] bg-text/dim/5 px-0.5 py-0.5 hover:bg-background/hover"
                        >
                            <Icon.checkLetters className="size-5" />
                        </Button>
                        <Button
                            variant={null}
                            size={null}
                            className="rounded-[3px] bg-text/dim/5 px-0.5 py-0.5 hover:bg-background/hover"
                        >
                            <Icon.settings className="size-5" />
                        </Button>
                    </div>
                </div>
                <ul className="rounded-[3px] bg-background/main/50 p-2.5">
                    <li>
                        <NotificationItem />
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    )
}

function NotificationItem() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p>
                        <Icon.people className="mr-1 inline-block size-4" />
                        <span className="text-text/dim body-small">
                            Community
                        </span>
                    </p>
                    <div className="size-3 rounded-full bg-color/primary"></div>
                </div>
                <div className="body-medium">
                    <p>
                        <span className="text-color/primary">Your friend</span>{' '}
                        left a comment on your post
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotificationPopover
