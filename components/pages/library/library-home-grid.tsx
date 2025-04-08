import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import LibraryAppCard from './library-app-card'

function LibraryHomeGrid() {
    return (
        <ScrollArea className=" ">
            <div className="flex flex-col gap-5 pt-[22px]">
                <div className="flex items-center pl-[34px]">
                    <h2 className="heading-small">ALL GAMES (308)</h2>
                    <div className=""></div>
                </div>
                <div className="flex flex-wrap gap-15 pb-20 pl-[34px] *:basis-[calc(16.666667%_-_120px)]">
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                    <LibraryAppCard />
                </div>
            </div>
        </ScrollArea>
    )
}

export default LibraryHomeGrid
