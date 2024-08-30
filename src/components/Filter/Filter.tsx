import React, { createContext, useState } from 'react'
import { FilterCategoryProps, FilterProps, FilterTagProps } from './Filter.type'
import { IconChevronDown, IconFilter } from '@tabler/icons-react'
import Search from '../inputs/Search'
import FilterSelectedType from './FilterSelectedType'
import Tag from '../buttons/Tag'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'

const SearchFilterContext = createContext(null)

function FilterTag({ children, ...props }: FilterTagProps) {
    return (
        <Tag filter {...props}>
            {children}
        </Tag>
    )
}

const FilterCategory = ({ children }: FilterCategoryProps) => {
    return (
        <Disclosure>
            <DisclosureButton className="flex justify-between border-t-[1px] border-highlight pb-3 pt-3.75 body-large first:mt-3.75">
                <p>Top-Level Genres</p>
                <span>
                    <IconChevronDown className="size-6 text-main" />
                </span>
            </DisclosureButton>
            <DisclosurePanel className="mb-3.75 flex flex-col">
                {children}
            </DisclosurePanel>
        </Disclosure>
    )
}

function Filter({ children, searchable = false }: FilterProps) {
    const [tags, setTags] = useState<string[]>(['Adventure', 'RPG'])
    const [search, setSearch] = useState<string>('')

    const handleSelectTag = (tag: string) => {
        if (tags.includes(tag)) {
            setTags(tags.filter((t) => t !== tag))
        } else {
            setTags([...tags, tag])
        }
    }

    const handleRemoveTag = (tag: string) => {
        setTags(tags.filter((t) => t !== tag))
    }

    return (
        <div className="rounded-border-md bg-bg/main pb-5.5 pl-3.5 pr-3.25 pt-2.5 text-main">
            <div className="flex items-center justify-between">
                <p className="uppercase body-medium">filters</p>
                <span className="rounded-border bg-dim/5 px-1 py-0.75">
                    <IconFilter className="h-5 w-5 text-dim" />
                </span>
            </div>
            {searchable && (
                <Search
                    containerClassName="mt-3.75"
                    placeholder="Search for a tag..."
                />
            )}
            <div className="mt-3.75 flex flex-wrap gap-0.75">
                {tags.map((tag) => (
                    <FilterSelectedType
                        handleOnRemove={handleRemoveTag}
                        key={tag}
                    >
                        {tag}
                    </FilterSelectedType>
                ))}
            </div>
            <div className="flex flex-col">
                <SearchFilterContext.Provider value={{ search }}>
                    {children}
                </SearchFilterContext.Provider>
            </div>
        </div>
    )
}

Filter.Category = FilterCategory
Filter.Tag = FilterTag

export default Filter
