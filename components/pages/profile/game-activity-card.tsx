import { Icon } from '@/components/icons'
import { Progress } from '@/components/ui/progress'
import React from 'react'

function GameActivityCard() {
    return (
        <div className="grid w-full grid-cols-7 grid-rows-1 gap-x-3.25 bg-background/main/50 p-3.75">
            {/* Game Image */}
            <div className="col-span-2 bg-background/main"></div>
            {/* Activity Information */}
            <div className="col-span-5 flex flex-col gap-3.75">
                <div className="flex justify-between">
                    {/* Game Title */}
                    <div className="body-large">
                        Mass Effect: Legendary Edition
                    </div>
                    {/* Times */}
                    <div className="flex items-center gap-6.5 body-small">
                        {/* Last played */}
                        <div className="">3 Oct 2025</div>
                        {/* Duration */}
                        <div className="">32 hours</div>
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/main p-3.75">
                    <Icon.star className="size-5.25 fill-text/dim" />
                    {/* Achieved Achievements */}
                    <div className="body-small">35/127</div>
                    {/* Progress */}
                    <Progress value={35} className="max-w-[258px]" />
                    {/* Achievements */}
                    <div className="flex items-center gap-2">
                        <div className="size-7.5 rounded-[0.125rem] bg-background/highlight"></div>
                        <div className="size-7.5 rounded-[0.125rem] bg-background/highlight"></div>
                        <div className="size-7.5 rounded-[0.125rem] bg-background/highlight"></div>
                        <div className="size-7.5 rounded-[0.125rem] bg-background/highlight"></div>
                        <div className="size-7.5 rounded-[0.125rem] bg-background/highlight"></div>
                        <div className="size-7.5 flex items-center justify-center rounded-[0.125rem] bg-background/highlight body-small">
                            +30
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameActivityCard
