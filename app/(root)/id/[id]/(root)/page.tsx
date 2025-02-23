import GameActivityCard from '@/components/pages/profile/game-activity-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Page() {
    return (
        <div className="flex w-3/4 flex-col gap-5.75">
            <div className="flex flex-col gap-2.5 rounded-[0.1875rem] bg-background/main/20 p-2.5">
                <p className="leading-3 text-text/dim body-large">
                    Game collector
                </p>
                <div className="flex flex-col items-center gap-8 bg-background/main/50 p-3.75">
                    <div className="flex w-full max-w-[550px] justify-between">
                        <div className="flex h-[63px] flex-col items-center justify-between">
                            <span className="heading-large">350</span>
                            <span className="text-text/dim body-large">
                                Games owned
                            </span>
                        </div>
                        <div className="flex h-[63px] flex-col items-center justify-between">
                            <span className="heading-large">600</span>
                            <span className="text-text/dim body-large">
                                DLCs owned
                            </span>
                        </div>
                        <div className="flex h-[63px] flex-col items-center justify-between">
                            <span className="heading-large">32</span>
                            <span className="text-text/dim body-large">
                                Reviewed
                            </span>
                        </div>
                        <div className="flex h-[63px] flex-col items-center justify-between">
                            <span className="heading-large">120</span>
                            <span className="text-text/dim body-large">
                                Wishlisted
                            </span>
                        </div>
                    </div>
                    <div className="grid w-full flex-1 grid-cols-5 gap-3.25">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex h-[68.5px] items-center justify-center rounded-[0.1875rem] bg-background/highlight"
                            >
                                {index}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.75 rounded-[0.1875rem] bg-background/main/20 p-2.5">
                <div className="flex items-center justify-between leading-3 text-text/dim body-large">
                    <p>Recent Activity</p>
                    <p>15h past 2 weeks</p>
                </div>
                <GameActivityCard />
                <GameActivityCard />
                <GameActivityCard />
            </div>
            <div className="mt-[256px] flex flex-col gap-9.5 bg-background/main/20 p-2.5">
                <div className="flex items-center justify-between text-text/dim">
                    <span className="body-large">Comments</span>
                    <span className="body-small">No comment yet</span>
                </div>
                <div className="flex gap-2.5">
                    <Avatar className="size-[40px]">
                        <AvatarFallback />
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/69232988"
                            alt="avatar"
                        />
                    </Avatar>
                    <div className="flex-1">
                        <textarea
                            className="-mt-[1px] h-full max-h-[44px] w-full resize-none rounded-[0.1875rem] bg-background/main/50 p-2.5 text-text/main outline-none ring-text/dim ring-offset-1 ring-offset-background/main/20 focus:ring-1"
                            placeholder="Write a comment..."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
