import React from 'react'
import { AccountProps } from './Account.type'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Avatar from '../Avatar'
import { IconChevronDown } from '@tabler/icons-react'
import AccountItem from './AccountItem'

function Account({}: AccountProps) {
    return (
        <Popover>
            <PopoverButton className="pl-0.75 flex items-center gap-2 rounded-border bg-highlight py-1 pr-2">
                <Avatar
                    className="w-7.75 h-7.75"
                    src="https://randomuser.me/api/portraits/lego/5.jpg"
                />
                <p className="text-main body-medium">Khánh Hoàng</p>
                <span className="text-dim body-medium">$5.25</span>
                <IconChevronDown className="h-5 w-5 text-main" />
            </PopoverButton>
            <PopoverPanel
                className="overflow-hidden rounded-border"
                anchor={{ gap: '15px', to: 'bottom start' }}
            >
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </PopoverPanel>
        </Popover>
    )
}

export default Account
