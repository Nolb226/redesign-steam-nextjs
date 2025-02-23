import ScreenshotCard from '@/components/pages/screenshots/screenshot-card'
import SearchBar from '@/components/search-bar'
import { Button } from '@/components/ui/button'

export default function Page() {
    return (
        <div className="flex w-3/4 flex-col gap-2.75 rounded-[0.1875rem] bg-background/main/20 p-2.5">
            <div className="flex justify-between rounded-[0.3125rem] bg-background/main p-1.25">
                <div className="flex max-w-[238px] flex-1 gap-1.25">
                    <Button className="w-1/2" variant={'secondary'}>
                        Upload
                    </Button>
                    <Button className="w-1/2" variant={'secondary'}>
                        Action
                    </Button>
                </div>
                <div className="flex gap-1.25">
                    <Button
                        className="px-5 text-text/dim body-large hover:bg-transparent hover:underline"
                        variant={'ghost'}
                    >
                        Newest
                    </Button>
                    <Button
                        className="px-5 text-text/dim body-large hover:bg-transparent hover:underline"
                        variant={'ghost'}
                    >
                        All screenshots
                    </Button>
                </div>
                <SearchBar className="max-w-[197px]" />
            </div>
            <div className="flex flex-wrap justify-between gap-2.5">
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
                <ScreenshotCard
                    className="w-[calc(50%_-_0.325rem)]"
                    title="skibidi"
                />
            </div>
        </div>
    )
}
