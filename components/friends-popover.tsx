'use client'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Icon } from './icons'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TState } from '@/models/common'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion'
import FriendListItem from './friend-list-item'

function FriendsPopover() {
    const [doNotDisturb, setDoNotDisturb] = React.useState(false)
    const [status, setStatus] = useState<TState>('online')
    return (
        <Popover>
            <PopoverTrigger className="relative rounded-[0.1875rem] bg-background/highlight px-4 py-1.5 hover:bg-background/hover">
                <Icon.people className="size-6.25 fill-[#76808C]" />
                <Badge className="absolute right-0.5 top-0 size-4 -translate-y-0.5 translate-x-1/2 pl-1">
                    4
                </Badge>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={15}
                className="relative w-[338px] overflow-hidden rounded-md bg-background/highlight"
                side="bottom"
                align="start"
            >
                <div className="absolute -left-2 -top-4 h-[107px] w-[350px] -rotate-3 bg-gradient-to-b from-color/secondary to-background/highlight"></div>
                <div className="relative flex flex-col gap-4">
                    <div className="flex gap-2">
                        <Avatar
                            state={status || 'offline'}
                            className="size-11.5"
                        >
                            <AvatarFallback />
                            <AvatarImage src="https://avatars.githubusercontent.com/u/69232988" />
                        </Avatar>
                        <div className="flex flex-col items-start">
                            <p className="line-clamp-1 heading-small">NTKH</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-color/primary"></div>
                                    <span className="text-color/primary body-medium">
                                        Online
                                    </span>
                                    <ChevronDown className="size-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="p-1"
                                    side="right"
                                    align="start"
                                >
                                    <DropdownMenuRadioGroup
                                        value={status}
                                        onValueChange={(value) =>
                                            setStatus(value as TState)
                                        }
                                    >
                                        <DropdownMenuRadioItem
                                            className="data-[state=checked]:text-color/primary"
                                            value="online"
                                        >
                                            Online
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            className="data-[state=checked]:text-color/primary"
                                            value="away"
                                        >
                                            Away
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem
                                            className="data-[state=checked]:text-color/primary"
                                            value="invisible"
                                        >
                                            <div className="flex flex-col body-medium">
                                                <p className="leading-3">
                                                    Invisible
                                                </p>
                                                <span className="mt-1 text-text/dim body-small">
                                                    Appear offline, but you can
                                                    still chat.
                                                </span>
                                            </div>
                                        </DropdownMenuRadioItem>

                                        <DropdownMenuRadioItem
                                            className="data-[state=checked]:text-color/primary"
                                            value="offline"
                                        >
                                            <div className="flex flex-col body-medium">
                                                <p className="leading-3">
                                                    Offline
                                                </p>
                                                <span className="mt-1 text-text/dim body-small">
                                                    Signout of friends & chat.
                                                </span>
                                            </div>
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem
                                        className="items-start"
                                        checked={doNotDisturb}
                                        onCheckedChange={setDoNotDisturb}
                                    >
                                        <div className="flex flex-col body-medium">
                                            <p className="leading-3">
                                                Do Not Disturb
                                            </p>
                                            <span className="mt-1 text-text/dim body-small">
                                                Disable all chat notifications.
                                            </span>
                                        </div>
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Edit Profile
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="ml-auto">
                            <Button
                                variant={null}
                                className="size-7 bg-text/dim/5 hover:bg-text/dim/20"
                            >
                                <Icon.plusCircle className="size-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <Tabs defaultValue="friends">
                            <TabsList className="h-fit w-full gap-1.75 p-0">
                                <TabsTrigger
                                    className="w-1/2 rounded-b-none bg-background/main text-text/dim body-large data-[state=active]:bg-background/hover data-[state=active]:text-text/main"
                                    value="friends"
                                >
                                    Friends
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-1/2 rounded-b-none bg-background/main text-text/dim body-large data-[state=active]:bg-background/hover data-[state=active]:text-text/main"
                                    value="activity"
                                >
                                    Activity
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                className="mt-0 rounded-b-[0.1875rem] bg-background/hover p-5"
                                value="friends"
                            >
                                <Accordion
                                    type="multiple"
                                    defaultValue={[
                                        'online-friends',
                                        'offline-friends',
                                    ]}
                                >
                                    <AccordionItem
                                        className="border-none"
                                        value="online-friends"
                                    >
                                        <AccordionTrigger className="text-text/dim body-medium">
                                            Online (2)
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-5 pl-2 pt-2">
                                            <FriendListItem
                                                name="Pols"
                                                avatar="https://avatars.fastly.steamstatic.com/44b65fa70c3df3819aa00d7b9cb13a40ac7cc2dc_medium.jpg"
                                                activity="Gunfire Reborn"
                                            />
                                            <FriendListItem
                                                name="ROSÉ ♫"
                                                avatar="https://avatars.fastly.steamstatic.com/ce4a70c65e7d20fcb84efca3054b2d643833dd1c_medium.jpg"
                                                status="away"
                                                activity="Away"
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem
                                        className="border-none"
                                        value="offline-friends"
                                    >
                                        <AccordionTrigger className="text-text/dim body-medium">
                                            Offline (1)
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-5 pb-1.5 pl-2 pt-2">
                                            <FriendListItem
                                                name="yunjin-"
                                                avatar="https://avatars.fastly.steamstatic.com/87b3401fff2768fae933af118ded111e8cc284db_medium.jpg"
                                                status="offline"
                                                activity="Last seen 2 hours ago"
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>
                            <TabsContent
                                className="mt-0 rounded-b-[0.1875rem] bg-background/hover p-5"
                                value="activity"
                            >
                                Change your password here.
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default FriendsPopover
