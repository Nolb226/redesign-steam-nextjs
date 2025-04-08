import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'

import LibraryAppCard from './library-app-card'

function LibraryHomeGrid() {
    return (
        <ScrollArea className=" ">
            <div className="flex  flex-col pt-[22px] gap-5">
                <div className="flex pl-[34px] items-center">
                    <h2 className="heading-small">ALL GAMES (308)</h2>
                    <div className=""></div>
                </div>
                <div className="flex pl-[34px] pb-20 *:basis-[calc(16.666667%_-_120px)] gap-15 flex-wrap">
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
