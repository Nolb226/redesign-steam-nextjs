import React from 'react'
import { PriceProps } from './Price.type'
import cn from '@/utils'

function Price({ sale = false }: PriceProps) {
    return (
        <div
            className={cn({
                'flex items-center gap-2.5': sale === true,
            })}
        >
            {sale && (
                <div className="rounded-border bg-accent-green py-2 pl-3.5 pr-2.5 text-lg font-bold text-bg/main">
                    -34%
                </div>
            )}
            <div>
                <p
                    className={cn('heading-small', {
                        'text-hover line-through decoration-dim': sale === true,
                        'text-main': sale === false,
                    })}
                >
                    $34.99
                </p>

                {sale && (
                    <p className="-mt-1 text-accent-green heading-small">
                        $23.09
                    </p>
                )}
            </div>
        </div>
    )
}

export default Price
