import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { useMemo } from 'react'
import { Icon } from './icons'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const reviewIndicatorVariants = cva('min-h-1 rounded-[2px]', {
    variants: {
        variant: {
            negative: 'bg-accent/red',
            positive: 'bg-color/primary',
        },
    },
})

const calcPercentage = (value: number, total: number) =>
    Math.round((value / total) * 100)

interface IReviewIndicatorProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof reviewIndicatorVariants> {
    variant: 'negative' | 'positive'
}

function ReviewIndicator({
    variant,
    className,
    ...props
}: IReviewIndicatorProps) {
    return (
        <div
            className={cn(reviewIndicatorVariants({ variant, className }))}
            {...props}
        />
    )
}

const reviewLabelVariants = cva('leading-3 body-small', {
    variants: {
        variant: {
            negative: 'text-accent/red',
            positive: 'text-color/primary',
        },
    },
})

interface IReviewLabelProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof reviewLabelVariants> {}

function ReviewLabel({ variant, className, ...props }: IReviewLabelProps) {
    return (
        <p
            className={cn(reviewLabelVariants({ variant, className }))}
            {...props}
        />
    )
}

interface IReviewsProps {
    negative: number
    positive: number
}

function Reviews({ negative, positive }: IReviewsProps) {
    const total = useMemo(() => negative + positive, [negative, positive])
    const negativePercentage = useMemo(
        () => calcPercentage(negative, total),
        [negative, total]
    )
    const positivePercentage = useMemo(
        () => calcPercentage(positive, total),
        [positive, total]
    )
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="flex min-h-[23px] w-full max-w-[8.625rem] flex-col gap-1.25">
                    {/* Label */}
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-0.75">
                            <ReviewLabel variant={'positive'}>
                                {positivePercentage}%
                            </ReviewLabel>
                            <Icon.thumbUp />
                        </div>
                        <div className="flex items-center gap-0.75">
                            <ReviewLabel variant={'negative'}>
                                {negativePercentage}%
                            </ReviewLabel>
                            <Icon.thumbDown />
                        </div>
                    </div>
                    {/* Progress bar */}
                    <div className="flex w-full items-center">
                        <ReviewIndicator
                            style={{
                                width: `${positivePercentage}%`,
                            }}
                            variant={'positive'}
                        />
                        <ReviewIndicator
                            style={{
                                width: `${negativePercentage}%`,
                            }}
                            variant={'negative'}
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent className="body-small">
                    <div className="">
                        <span className="text-color/primary">{positive}</span>{' '}
                        good reviews
                    </div>
                    <div className="">
                        <span className="text-accent/red">{negative}</span> bad
                        reviews
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Reviews
