import React from 'react'
import { TagProps } from './Tag.type'
import cn from '@/utils'

function Tag({
    onClick: handleOnClick,
    filter = false,
    checked = false,
    children,
}: TagProps) {
    return (
        <button
            onClick={handleOnClick}
            className={cn('rounded-border px-3.25 py-2', {
                'bg-highlight text-dim': !filter,
                'block text-left text-main body-small hover:bg-hover': filter,
                'bg-hover': checked,
            })}
        >
            {children}
        </button>
    )
}

export default Tag
