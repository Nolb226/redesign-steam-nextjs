import React, { useRef, useState } from 'react'
import { FriendsProps } from './Friends.type'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { IconCirclePlus, IconUsersGroup } from '@tabler/icons-react'
import Avatar from '../Avatar'
import FriendItem from './FriendItem'
import DisclosureToggle from '../DisclosureToggle/DisclosureToggle'
import { motion } from 'framer-motion'
import StatusSelect from './StatusSelect'

function Friends({}: FriendsProps) {
    const [status, setStatus] = useState<'online' | 'offline' | 'away'>(
        'online'
    )
    return (
        <Popover>
            <PopoverButton className="group/button relative rounded-border bg-highlight px-3.5 py-1.5">
                <IconUsersGroup className="h-5 w-5 text-dim group-hover/button:fill-dim" />
            </PopoverButton>
            <PopoverPanel
                className="relative rounded-border-md bg-highlight p-5"
                anchor={{ to: 'bottom start', gap: '15px' }}
            >
                <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-secondary-color to-highlight"></div>
                <div className="isolate flex flex-col gap-10">
                    <div className="flex items-start gap-2">
                        <Avatar
                            className="h-11.5 w-11.5"
                            src="https://randomuser.me/api/portraits/lego/5.jpg"
                            status={status}
                        />
                        <div className="">
                            <p className="text-main heading-small">
                                Khánh Hoàng
                            </p>
                            <StatusSelect
                                onChange={(option) => setStatus(option.value)}
                            />
                        </div>
                        <div className="p-2.5 text-dim/5">
                            <IconCirclePlus className="h-4.25 w-4.25 text-dim" />
                        </div>
                    </div>
                    <TabGroup>
                        <TabList className="flex gap-1.75">
                            <Tab className="flex-1 rounded-tl-border rounded-tr-border bg-bg/main text-dim data-[selected]:bg-hover data-[selected]:text-main">
                                Friends
                            </Tab>
                            <Tab className="flex-1 rounded-tl-border rounded-tr-border bg-bg/main text-dim data-[selected]:bg-hover data-[selected]:text-main">
                                Activity
                            </Tab>
                        </TabList>
                        <TabPanels className="">
                            <TabPanel className="flex flex-col items-start gap-5 rounded-border rounded-tl-none bg-hover p-5">
                                <Disclosure defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="group/item text-dim body-medium hover:-ml-3">
                                                <motion.p
                                                    initial={false}
                                                    animate={
                                                        open ? 'open' : 'closed'
                                                    }
                                                    className="flex items-center"

                                                    // ref={containerRef}
                                                >
                                                    <DisclosureToggle /> Online
                                                    (2)
                                                </motion.p>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                className="flex flex-col gap-5"
                                                as="ul"
                                            >
                                                <FriendItem />
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>

                                <Disclosure defaultOpen={true}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="group/item text-dim body-medium hover:-ml-3">
                                                <motion.p
                                                    initial={false}
                                                    animate={
                                                        open ? 'open' : 'closed'
                                                    }
                                                    className="flex items-center"
                                                >
                                                    <DisclosureToggle /> Offline
                                                    (2)
                                                </motion.p>
                                            </DisclosureButton>
                                            <DisclosurePanel
                                                className="flex flex-col gap-5"
                                                as="ul"
                                            >
                                                <FriendItem />
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </TabPanel>
                            <TabPanel className="rounded-rl-none rounded-border bg-hover p-5">
                                Test
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </PopoverPanel>
        </Popover>
    )
}

export default Friends
