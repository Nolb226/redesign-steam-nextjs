import React from 'react'
import { NotificationsProps } from './Notifications.type'
import {
    IconBell,
    IconBellFilled,
    IconMailCheck,
    IconSettings,
} from '@tabler/icons-react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import NotificationsEmpty from './NotificationsEmpty'
import NotificationsItem from './NotificationsItem'

function Notifications({}: NotificationsProps) {
    return (
        <Popover>
            <PopoverButton className="group/button relative rounded-border bg-highlight px-3.5 py-1.5">
                <IconBell className="h-5 w-5 text-dim group-hover/button:fill-dim" />
            </PopoverButton>
            <PopoverPanel
                anchor={{ to: 'bottom start', gap: '15px' }}
                className="flex flex-col gap-5 rounded-border-md bg-highlight p-5 text-white"
                transition
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="heading-small">Notifications</p>
                    </div>
                    <div className="flex gap-1">
                        <div className="rounded-border bg-dim/20 p-0.5">
                            <IconMailCheck className="h-5 w-5 text-dim" />
                        </div>
                        <div className="rounded-border bg-dim/20 p-0.5">
                            <IconSettings className="h-5 w-5 stroke-dim" />
                        </div>
                    </div>
                </div>
                <ul className="bg-bg/main/60 flex w-[298px] flex-col divide-y divide-dim/15 rounded-border p-2.5 text-dim/60">
                    {/* <NotificationsEmpty /> */}
                    <>
                        <NotificationsItem />
                        <NotificationsItem />
                    </>
                </ul>
            </PopoverPanel>
        </Popover>
    )
}

export default Notifications
