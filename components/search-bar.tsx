import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Icon } from './icons'

interface ISearchBarProps extends React.HTMLAttributes<HTMLLabelElement> {
    value?: string
    onValueChange?: (value: string) => void
    placeholder?: string
}

function SearchBar({
    id = 'search',
    className,
    placeholder = 'Search',
    ...props
}: ISearchBarProps) {
    return (
        <label
            htmlFor={id}
            className={cn(
                'flex flex-1 items-center rounded-[0.1875rem] bg-[#1D263C] pr-[11px]',
                className
            )}
            {...props}
        >
            <Input
                id={id}
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                className="border-none bg-transparent pl-[19px] outline-none placeholder:text-color/secondary focus-visible:ring-0"
            />
            <Icon.search className="size-5 text-color/secondary" />
        </label>
    )
}

export default SearchBar
