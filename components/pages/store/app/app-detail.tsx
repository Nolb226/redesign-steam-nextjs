'use client'
import Reviews from '@/components/reviews'
import { Button } from '@/components/ui/button'
import { numberFormatter } from '@/lib/utils'
import { IApp } from '@/models/app'
import React, { useMemo } from 'react'
import ImageCarousel from './image-carousel'
import Tag from '@/components/ui/tag'
import { Icon } from '@/components/icons'
import AppLanguages from './app-languages'
import { Code, FlagIcon, Share2Icon } from 'lucide-react'

interface IAppDetailProps {
    app: IApp
}

const appFeatures = [
    {
        title: 'Single-player',
        icon: Icon.person,
    },
    {
        title: 'Online Co-op',
        icon: Icon.people,
    },
    {
        title: 'Steam Achievements',
        icon: Icon.star,
    },
    {
        title: 'Full Controller Support',
        icon: Icon.sportsEsports,
    },
    {
        title: 'Steam Trading Cards',
        icon: Icon.viewCarousel,
    },
    {
        title: 'Steam Cloud',
        icon: Icon.cloud,
    },
]

function AppDetail({ app }: IAppDetailProps) {
    // const totalReviews = useMemo(
    //     () => numberFormatter()(app.negative + app.positive),
    //     [app.negative, app.positive]
    // )
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-background/main to-[#202B3B] to-[46%]">
            <div
                style={{
                    backgroundImage: ` url(${app.screenshots[2].path_full})`,
                }}
                className="absolute left-0 top-0 min-h-screen w-full bg-cover bg-center bg-no-repeat object-cover opacity-10"
            ></div>

            <div className="container relative mx-auto flex flex-col gap-2.5 pt-11.25">
                <div className="relative flex items-center justify-between bg-background/main px-6.25 py-3.75">
                    <p className="heading-large">{app.name}</p>
                    <div className="flex gap-2.5">
                        <Button variant={'tertiary'}>Ignore</Button>
                        <Button variant={'tertiary'}>Follow</Button>
                        <Button variant={'secondary'}>Browse All DLCs</Button>
                        <Button variant={'secondary'}>Community Hub</Button>
                    </div>
                </div>
                <div className="flex gap-6 bg-background/main/50 p-6.25">
                    <div className="flex-1">
                        {/* <ImageCarousel images={app.screenshots} /> */}
                    </div>
                    <div className="flex max-w-[416px] flex-col gap-6">
                        <div>
                            <img
                                className="aspect-[3/2] max-h-[14.625rem] w-full rounded-[0.1875rem] object-fill"
                                src={app.header_image}
                                alt=""
                            />
                        </div>
                        <p className="body-large">{app.short_description}</p>
                        <div className="flex flex-col gap-3.75">
                            <p className="text-text/dim body-medium">Reviews</p>
                            <div className="flex items-center">
                                <div className="w-1/4 body-medium">
                                    Past Month
                                </div>
                                <div className="flex flex-1 gap-2">
                                    {/* <Reviews
                                        negative={app.negative}
                                        positive={app.positive}
                                    /> */}
                                    <p className="self-end leading-3 text-color/secondary body-medium">
                                        {/* {totalReviews} Reviews */}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/4 body-medium">
                                    All Time
                                </div>
                                <div className="flex flex-1 gap-2">
                                    {/* <Reviews
                                        negative={app.negative}
                                        positive={app.positive}
                                    /> */}
                                    <p className="self-end leading-3 text-color/secondary body-medium">
                                        {/* {totalReviews} Reviews */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex body-medium">
                            <p className="w-1/4 text-text/dim">Release Date</p>
                            <p>{app.release_date.date}</p>
                        </div>
                        <div className="flex body-medium">
                            <p className="w-1/4 text-text/dim">Developer(s)</p>
                            <p className="line-clamp-1 text-color/primary">
                                {app.developers.map((developer, idx) => (
                                    <React.Fragment key={developer}>
                                        <span>{developer}</span>
                                        {idx !== app.developers.length - 1 && (
                                            <span className="text-text/dim">
                                                ,
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        <div className="flex body-medium">
                            <p className="w-1/4 text-text/dim">Publisher(s)</p>
                            <p className="line-clamp-1 text-color/primary">
                                {app.publishers.map((publisher, idx) => (
                                    <React.Fragment key={publisher}>
                                        <span>{publisher}</span>
                                        {idx !== app.publishers.length - 1 && (
                                            <span className="text-text/dim">
                                                ,
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="w-1/4 text-text/dim body-medium">
                                Popular Tags
                            </p>
                            <div className="flex items-center gap-1">
                                {/* {app.genres.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.75">
                    {/* Left */}
                    <div className="flex-1"></div>
                    {/* Right */}
                    <div className="flex w-full max-w-[451px] flex-col gap-3">
                        <div className="flex flex-col gap-1.75 rounded-[0.3125rem] bg-background/main p-6.25">
                            <p className="leading-6 text-text/dim body-large">
                                Features
                            </p>
                            {appFeatures.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex items-center gap-2.5 rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 hover:cursor-pointer hover:bg-background/hover"
                                >
                                    <feature.icon className="size-6.25 fill-color/primary" />
                                    <p className="text-color/primary body-small">
                                        {feature.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* <AppLanguages
                            full_audio_languages={app.full_audio_languages}
                            supported_languages={app.supported_languages}
                        /> */}
                        <div className="flex flex-col gap-1.75 rounded-[0.3125rem] bg-background/main p-6.25">
                            <p className="leading-6 text-text/dim body-large">
                                Achievements
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.75 rounded-[0.3125rem] bg-background/main p-6.25">
                            <p className="leading-6 text-text/dim body-large">
                                Point Shop Items
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.75 rounded-[0.3125rem] bg-background/main p-6.25">
                            <p className="leading-6 text-text/dim body-large">
                                Links
                            </p>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                Workshop
                            </div>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                Discussions
                            </div>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                News
                            </div>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                Updates
                            </div>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                Community Groups
                            </div>
                            <div className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small hover:cursor-pointer hover:bg-background/hover">
                                Marketplace
                            </div>
                            <div className="grid grid-cols-3 gap-1.75">
                                <div className="flex items-center gap-2.5 rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 hover:cursor-pointer hover:bg-background/hover">
                                    <Share2Icon className="size-4 text-text/dim" />
                                    <span className="body-small">Share</span>
                                </div>
                                <div className="flex items-center gap-2.5 rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 hover:cursor-pointer hover:bg-background/hover">
                                    <Code className="size-4 text-text/dim" />

                                    <span className="body-small">Embed</span>
                                </div>
                                <div className="flex items-center gap-2.5 rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 hover:cursor-pointer hover:bg-background/hover">
                                    <FlagIcon className="size-4 text-text/dim" />
                                    <span className="body-small">Report</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDetail
