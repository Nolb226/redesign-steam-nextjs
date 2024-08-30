import React from 'react'
import { SearchProps } from './Search.type'
import cn from '@/utils'
import { IconSearch } from '@tabler/icons-react'

function Search({
    id,
    inputClassName,
    containerClassName,
    ...props
}: SearchProps) {
    return (
        <label
            className={cn(
                containerClassName,
                'pr-2.75 flex items-center rounded-border bg-tertiary/50 pb-3.25 pl-4.75 pt-3.25'
            )}
            htmlFor={id}
        >
            <input
                type="text"
                id={id}
                className={cn(
                    inputClassName,
                    'flex-1 bg-transparent text-main outline-none body-medium placeholder:text-secondary-color placeholder:body-medium'
                )}
                {...props}
            />
            <IconSearch className="h-4 w-4 text-secondary-color" />
        </label>
    )
}

export default Search
