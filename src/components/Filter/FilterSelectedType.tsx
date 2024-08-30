import React from 'react'
import { FilterSelectedTypeProps } from './Filter.type'
import { IconX } from '@tabler/icons-react'

function FilterSelectedType({
    children,
    handleOnRemove,
    ...props
}: FilterSelectedTypeProps) {
    return (
        <button
            {...props}
            className="flex cursor-pointer items-center gap-2.5 rounded-border bg-hover px-3.25 py-2 text-main body-small"
            onClick={() => handleOnRemove}
        >
            <span>{children}</span>
            <span className="hover:cursor-pointer">
                <IconX stroke={3} className="size-2.5 text-dim" />
            </span>
        </button>
    )
}

export default FilterSelectedType
