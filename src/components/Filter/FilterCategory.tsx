import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import React from 'react'
import DisclosureToggle from '../DisclosureToggle'
import { IconChevronDown } from '@tabler/icons-react'
import { FilterCategoryProps } from './Filter.type'
import Tag from '../buttons/Tag'

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

export default FilterCategory
