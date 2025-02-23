import LevelCircle from '@/components/level-circle'
import { LevelProgress } from '@/components/pages/profile/level-progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const BADGES = [
    {
        title: 'Pillar of the Community',
        createdAt: '',
        xp: 100,
        image: 'https://community.fastly.steamstatic.com/public/images/badges/01_community/community02_80.png',
    },
]

export default function Page() {
    return (
        <div className="pt-16">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-7.75 pb-[237px]">
                <div className="flex gap-7.25 bg-background/hover/35 p-10">
                    {/* Profile Information */}
                    <div className="flex w-3/4 items-center gap-8.25">
                        <Avatar>
                            <AvatarFallback />
                            <AvatarImage
                                src="https://avatars.githubusercontent.com/u/69232988"
                                alt="avatar"
                            />
                        </Avatar>
                        <span className="heading-large">NTKH</span>
                    </div>
                    {/* <div className="flex w-1/4 flex-col justify-between">
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
                                    <p className="body-medium">
                                        Year of Service
                                    </p>
                                    <p className="text-text/dim body-medium">
                                        300 XP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-1 gap-8.25">
                    <div className="w-5/6 bg-background/hover/35 p-10"></div>
                    <div className="flex w-1/6 flex-col items-center gap-2 rounded-[0.1875rem] bg-background/hover/35 py-10">
                        <LevelCircle level={11} className="" size="lg" />
                        <div className="relative flex w-full flex-col items-center">
                            <div className="flex h-full min-h-[650px] w-3 flex-col-reverse overflow-hidden rounded-md bg-text/dim/35">
                                {BADGES.map((badge, idx) => (
                                    <div
                                        key={idx}
                                        className="h-[12px] w-3 bg-black"
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
