import React, { useMemo } from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface IImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    images: string[]
}

function ImageCarousel({ images }: IImageCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        api.on('select', () => {
            console.log(api.selectedScrollSnap())
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const canScrollNext = useMemo(
        () => current < images.length - 1,
        [current, images.length]
    )
    const canScrollPrev = useMemo(() => current > 0, [current])

    return (
        <div className="flex flex-col gap-5">
            {/* Main Image */}
            <div className="relative">
                <img
                    src={images[current]}
                    className="max-h-[485px] w-full"
                    alt=""
                />
            </div>
            {/* Thumbnails */}
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: 'start',
                }}
            >
                <CarouselContent className="mx-10 mb-4 gap-1.75">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="max-h-[111px] basis-[22%] py-1 pl-2"
                        >
                            <div
                                className={cn(
                                    'cursor-pointer overflow-hidden rounded-[0.1875rem]',
                                    'ring-offset-background transition-all',
                                    current === index &&
                                        'ring-[3px] ring-color/secondary'
                                )}
                                onClick={() => {
                                    console.log(index)

                                    api?.scrollTo(index)
                                }}
                            >
                                <img
                                    src={image}
                                    alt={image}
                                    className="object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    onClick={() => {
                        setCurrent(() => current - 1)
                        if (api?.canScrollPrev()) api?.scrollPrev()
                    }}
                    disabled={!canScrollPrev}
                    className="left-0 border-0"
                />
                <CarouselNext
                    onClick={() => {
                        setCurrent(current + 1)
                        api?.scrollNext()
                    }}
                    disabled={!canScrollNext}
                    className="right-0 border-0"
                />
            </Carousel>
        </div>
    )
}

export default ImageCarousel
