'use client'
import { cva } from 'class-variance-authority'
import React, { useMemo } from 'react'

const levelCircleVariants = cva(
    'flex items-center justify-center rounded-full',
    {
        variants: {
            tier: {
                0: 'ring-text/dim',
                1: 'ring-[#c02942]',
                2: 'ring-[rgb(210_89_66)]',
                3: 'ring-[#fecc23]',
                4: 'ring-[#467a3c]',
                5: 'ring-[#4E8DDB]',
                6: 'ring-[#7054C3]',
                7: 'ring-[#c252c9]',
                8: 'ring-[#542437]',
                9: 'ring-[#997c52]',
            },
            size: {
                sm: 'size-8.5 ring-2 body-small',
                lg: 'size-12.25 text-xl ring-[3px]',
            },
        },
        defaultVariants: {
            tier: 1,
            size: 'sm',
        },
    }
)

interface LevelCircleProps extends React.HTMLAttributes<HTMLDivElement> {
    level: number
    size: 'sm' | 'lg'
}

function LevelCircle({ className, level, size, ...props }: LevelCircleProps) {
    const tier = useMemo(() => {
        const calculatedTier = Math.ceil(level / 10)
        return calculatedTier
    }, [level])

    return (
        <div
            className={levelCircleVariants({
                tier: tier as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                size,
                className,
            })}
            {...props}
        >
            <span>{level}</span>
        </div>
    )
}

export default LevelCircle
