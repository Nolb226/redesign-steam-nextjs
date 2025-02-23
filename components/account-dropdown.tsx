import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Icon } from './icons'
import { ACCOUNT_DROPDOWN } from '@/constants/navigation'

function AccountDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-[0.1875rem] bg-background/highlight py-1 pl-[0.1875rem] pr-2 hover:bg-background/hover">
                <Avatar className="ring-0" size={'sm'}>
                    <AvatarImage
                        src="https://avatars.githubusercontent.com/u/69232988"
                        alt="avatar"
                    />
                    <AvatarFallback />
                </Avatar>
                <span className="leading-3 body-medium">NTKH</span>
                <span className="text-text/dim">$5.25</span>
                <Icon.chevronDown className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="bottom"
                className="w-[var(--radix-popper-anchor-width)] *:px-5 *:py-4"
                sideOffset={15}
            >
                {ACCOUNT_DROPDOWN.map(({ title }, index) => (
                    <DropdownMenuItem
                        className="hover:bg-background/hover"
                        key={`account-dropdown-i-${index}`}
                    >
                        {title}
                    </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="hover:bg-background/hover">
                    Sign out
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-background/hover">
                    Exit
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AccountDropdown
