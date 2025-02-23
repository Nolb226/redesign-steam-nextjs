import { FRIENDS } from '@/_mock/friends'
import FriendListItem from '@/components/friend-list-item'
import { Icon } from '@/components/icons'
import LevelCircle from '@/components/level-circle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const PROFILE_NAVIGATION = [
    {
        label: 'Games',
        href: '#',
        value: '350',
    },
    {
        label: 'Wishlist',
        href: '#',
        value: '120',
    },
    {
        label: 'Inventory',
        href: '#',
    },
    {
        label: 'Screenshots',
        href: '#',
        value: '40',
    },
    {
        label: 'Videos',
        href: '#',
        value: '2',
    },
    {
        label: 'Workshop Items',
        href: '#',
        value: '3',
    },
    {
        label: 'Reviews',
        href: '#',
        value: '32',
    },
    {
        label: 'Guides',
        href: '#',
        value: '1',
    },
    {
        label: 'Artwork',
        href: '#',
        value: '13',
    },
]
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex max-w-screen-xl flex-col gap-7.75 bg-background/hover/35 p-10">
            <div className="flex gap-7.25">
                {/* Profile Information */}
                <div className="flex w-3/4 gap-8.25">
                    <Avatar size={'lg'}>
                        <AvatarFallback />
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/69232988"
                            alt="avatar"
                        />
                    </Avatar>
                    <div className="flex flex-col gap-14.75">
                        <span className="heading-large">NTKH</span>
                        <div className="body-large">No information given.</div>
                    </div>
                </div>
                <div className="flex w-1/4 flex-col justify-between">
                    <div className="flex">
                        <Button className="ml-auto" variant={'secondary'}>
                            Edit Profile
                        </Button>
                    </div>
                    <div className="flex flex-col gap-3.75 rounded-[0.3125rem] bg-background/main/20 px-3.75 py-2.5">
                        <div className="flex gap-5.75">
                            <div className="self-center">
                                <LevelCircle level={90} size={'lg'} />
                            </div>
                            <div className="flex min-h-[63px] flex-col justify-between py-1.25">
                                <p className="body-medium">Level</p>
                                <p className="text-text/dim body-medium">
                                    30,000 XP
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4.25">
                            <div className="self-center">
                                <div className="size-13.75">
                                    <img
                                        className="h-full w-full object-contain"
                                        src="https://community.fastly.steamstatic.com/public/images/badges/02_years/steamyears6_80.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex min-h-[63px] flex-col justify-between py-1.25">
                                <p className="body-medium">Year of Service</p>
                                <p className="text-text/dim body-medium">
                                    300 XP
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-7.25">
                {children}
                <div className="flex w-1/4 flex-col gap-5">
                    {/* Status & Navigation */}
                    <div className="flex flex-col gap-1.5 rounded-[0.3125rem] bg-background/main/50 p-3.75 body-large">
                        <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/main p-2.5">
                            <span>Status</span>
                            <span className="text-color/primary">Online</span>
                        </div>
                        <div className="flex flex-col gap-4.5 rounded-[0.1875rem] bg-background/main p-2.5">
                            <div className="flex items-center justify-between">
                                <span>Badges</span>
                                <span className="text-text/dim">94</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="size-11.25 rounded-[0.125rem] bg-background/highlight" />
                                <div className="size-11.25 rounded-[0.125rem] bg-background/highlight" />
                                <div className="size-11.25 rounded-[0.125rem] bg-background/highlight" />
                                <div className="size-11.25 rounded-[0.125rem] bg-background/highlight" />
                                <div className="size-11.25 rounded-[0.125rem] bg-background/highlight" />
                            </div>
                        </div>
                        {PROFILE_NAVIGATION.map(({ label, href, value }) => (
                            <Link
                                key={label}
                                className="flex justify-between rounded-[0.1875rem] bg-background/main p-2.5 hover:bg-background/hover"
                                href={href}
                            >
                                <div className="">{label}</div>
                                <div className="text-text/dim">{value}</div>
                            </Link>
                        ))}
                    </div>
                    {/* Friend List */}
                    <div className="flex flex-col gap-1.5 rounded-[0.3125rem] bg-background/main/50 p-3.75 body-large">
                        <div className="flex items-center justify-between py-2.5 pr-1.25">
                            <span className="text-text/dim">Friends (3)</span>
                            <Icon.plusCircle className="size-5 text-text/dim/70" />
                        </div>
                        {FRIENDS.map((friend) => (
                            <FriendListItem
                                className="rounded-[0.1875rem] bg-background/main p-2.5"
                                key={friend.name}
                                // @ts-expect-error fix later
                                status={friend.status}
                                name={friend.name}
                                level={friend.level}
                                activity={friend.activity}
                                avatar={friend.avatar}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
