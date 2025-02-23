'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { HOME_HEADER } from '@/constants/navigation'
import { setLayoutView } from '@/redux/features/library/library.slice'

import { cn } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icons'
import SearchBar from '@/components/search-bar'

interface IHeaderLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    active?: boolean
}

const HeaderLink = React.forwardRef<LinkProps, IHeaderLinkProps>(
    ({ className, href, ...props }, ref) => {
        return (
            <Link
                ref={ref as React.Ref<HTMLAnchorElement>}
                className={cn(
                    'block rounded-[0.1875rem] px-[29px] py-[13px] leading-[19px] text-text/main body-large hover:bg-color/secondary',
                    className
                )}
                href={href!}
                {...props}
            />
        )
    }
)
HeaderLink.displayName = 'HeaderLink'

function HeaderWrapper({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <header
            className={cn(
                'sticky top-[3.6875rem] z-10 flex max-h-[57px] items-center bg-background/tertiary px-2.5 py-1.5',
                className
            )}
            {...props}
        />
    )
}

function StoreHeader() {
    return (
        <HeaderWrapper className="justify-between">
            <div className="hidden items-center gap-[7px] xl:flex">
                {HOME_HEADER.map(({ title, href }, index) => (
                    <HeaderLink key={`store-nav-i-${index}`} href={href}>
                        {title}
                    </HeaderLink>
                ))}
            </div>
            <SearchBar className="max-w-[507px]" />
            <div className="hidden items-center gap-0.5 md:flex">
                <HeaderLink href="/wishlist">Wishlist</HeaderLink>
                <HeaderLink href="/cart">Cart</HeaderLink>
            </div>

            <div className="">
                <Link
                    className="block rounded-[0.1875rem] bg-text/dim/10 p-[7px] hover:bg-text/dim/40"
                    href="/settings"
                >
                    <Icon.settings className="size-6.5" />
                </Link>
            </div>
        </HeaderWrapper>
    )
}

function LibraryHeader() {
    const { appSelector, dispatch } = useRedux()
    const { layoutView } = appSelector((state) => state.library)
    return (
        <HeaderWrapper className="justify-between">
            <div className="flex gap-1.75">
                <HeaderLink href="/library">Home</HeaderLink>
                <HeaderLink href="/library/audiobooks">Collections </HeaderLink>
                <HeaderLink href="/library/podcasts">
                    News and Updates
                </HeaderLink>
            </div>
            <div className="flex gap-1.5">
                <SearchBar placeholder="Search..." className="w-[374px]" />
                <Button variant={'icon-box'}>
                    <Icon.filter />
                </Button>
                <Button variant={'icon-box'}>
                    <Icon.clock4 />
                </Button>
                <Button variant={'icon-box'}>
                    <Icon.playCircle />
                </Button>
            </div>
            <div className="flex gap-1.75 pl-2.5">
                <span className="self-center body-medium">View</span>
                <Button
                    onClick={() => {
                        dispatch(setLayoutView('list'))
                    }}
                    className={cn({
                        'bg- bg-text/dim/25 [&_svg_path]:fill-white':
                            layoutView === 'list',
                    })}
                    variant={'icon-box'}
                >
                    <Icon.listView />
                </Button>
                <Button
                    onClick={() => {
                        dispatch(setLayoutView('grid'))
                    }}
                    className={cn({
                        'bg- bg-text/dim/25 [&_svg_path]:fill-white':
                            layoutView === 'grid',
                    })}
                    variant={'icon-box'}
                >
                    <Icon.viewModule />
                </Button>
                <Button
                    onClick={() => {
                        dispatch(setLayoutView('detail'))
                    }}
                    className={cn({
                        'bg- bg-text/dim/25 [&_svg_path]:fill-white':
                            layoutView === 'detail',
                    })}
                    variant={'icon-box'}
                >
                    <Icon.detailView />
                </Button>
            </div>
            <div className="gap-1.751 flex">
                <HeaderLink href="/library/genres">
                    Activate a Product
                </HeaderLink>
                <HeaderLink href="/library">Add a non-Steam game</HeaderLink>
            </div>
        </HeaderWrapper>
    )
}

// export const Header = {
//     store: StoreHeader,
//     library: LibraryHeader,
// }

export { StoreHeader, LibraryHeader }
