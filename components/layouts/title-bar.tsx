import React from 'react'
import Link from 'next/link'
import {
    COMMUNITY_SUBMENU,
    HOME_SUBMENU,
    LIBRARY_SUBMENU,
} from '@/constants/navigation'

import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import AccountDropdown from '../account-dropdown'
import FriendsPopover from '../friends-popover'
import { Icon } from '../icons'
import Logo from '../logo'
import NotificationPopover from '../notification-popover'
import { Button } from '../ui/button'

export default function TitleBar() {
    return (
        <div className="sticky top-0 z-10 flex min-h-[3.6875rem] items-center gap-5 bg-background/main px-5.5">
            <div className="flex items-center">
                <Button
                    variant={'ghost'}
                    className="h-fit rounded-[0.1875rem] p-2 hover:bg-background/hover"
                >
                    <Icon.chevronLeft className="size-4" />
                </Button>
                <Button
                    variant={'ghost'}
                    className="h-fit rounded-[0.1875rem] p-2 hover:bg-background/hover"
                >
                    <Icon.chevronRight className="size-4" />
                </Button>
            </div>
            <div className="flex items-center gap-16.5">
                <Logo />
                <NavigationMenu className="hidden xl:block">
                    <NavigationMenuList className="flex items-center gap-16.5">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger asChild>
                                <Link href={'/'}>STORE</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="right:0 absolute left-auto top-full w-auto rounded-md bg-background/highlight text-text/main md:min-w-[190px]">
                                {HOME_SUBMENU.map(({ title, href }, index) => (
                                    <ListItem
                                        key={`store-sub-i-${index}`}
                                        href={href}
                                    >
                                        {title}
                                    </ListItem>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                COMMUNITY
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="right:0 absolute left-auto top-full w-auto rounded-md bg-background/highlight text-text/main md:min-w-[190px]">
                                {COMMUNITY_SUBMENU.map(
                                    ({ title, href }, index) => (
                                        <ListItem
                                            key={`community-sub-i-${index}`}
                                            href={href}
                                        >
                                            {title}
                                        </ListItem>
                                    )
                                )}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger asChild>
                                <Link href={'/library'}>LIBRARY</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="right:0 absolute left-auto top-full w-auto rounded-md bg-background/highlight text-text/main md:min-w-[190px]">
                                {LIBRARY_SUBMENU.map(
                                    ({ title, href }, index) => (
                                        <ListItem
                                            key={`library-sub-i-${index}`}
                                            href={href}
                                        >
                                            {title}
                                        </ListItem>
                                    )
                                )}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="ml-auto flex items-center gap-16">
                <div className="hidden items-center gap-2.5 lg:flex">
                    <FriendsPopover />
                    <NotificationPopover />
                    <AccountDropdown />
                </div>
                <div className="hidden items-center gap-4 text-text/dim body-large lg:flex">
                    <span>Help</span>
                    <span className="flex items-center">
                        View <Icon.chevronDown className="size-5" />
                    </span>
                    <Icon.minimizeApp className="size-5" />
                    <Icon.closeApp className="size-5" />
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    'block w-full px-5 py-4 text-sm hover:bg-background/hover',
                    className
                )}
                {...props}
            >
                <p>{children}</p>
            </a>
        </NavigationMenuLink>
    )
})
ListItem.displayName = 'ListItem'
