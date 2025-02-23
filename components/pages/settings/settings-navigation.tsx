'use client'

import SearchBar from '@/components/search-bar'
import { SETTINGS_NAVIGATION } from '@/constants/navigation'
import Link, { LinkProps } from 'next/link'
import React from 'react'

function SettingsNavigation() {
    return (
        <div className="flex flex-col gap-2.5 rounded-[0.3125rem] bg-background/main p-3.75">
            <div className="pb-2.5">
                <SearchBar />
            </div>
            {SETTINGS_NAVIGATION.map((item, idx) => {
                if (!item.href)
                    return (
                        <SettingsNavigationSeparator
                            key={`settings-separator-${idx}`}
                        />
                    )

                return (
                    <SettingsNavigationItem
                        key={`${item.title}`}
                        href={item.href!}
                    >
                        {item.title}
                    </SettingsNavigationItem>
                )
            })}
        </div>
    )
}

function SettingsNavigationItem({
    ...props
}: LinkProps & React.HTMLProps<HTMLAnchorElement>) {
    return (
        <Link
            className="rounded-[0.1875rem] px-3.25 py-2 body-large hover:bg-background/hover"
            {...props}
        />
    )
}

function SettingsNavigationSeparator() {
    return <div className="h-[1px] bg-background/hover" />
}

export default SettingsNavigation
