import React from 'react'
import { CollectionsProps } from './Collections.type'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import LibraryApp from '../LibraryApp'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

function Collections({}: CollectionsProps) {
    return (
        <Disclosure>
            <DisclosureButton className="w-max-[350px] group flex w-full items-center justify-between rounded-tl-border-md rounded-tr-border-md px-3 pb-2.5 pt-2.25 uppercase text-main body-large data-[open]:bg-highlight/40">
                <span>Favorites</span>
                <IconChevronUp className="h-6 w-6 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="w-max-[350px] w-full flex-col gap-1.25 rounded-bl-border-md rounded-br-border-md bg-highlight/40 px-3 pb-3.5">
                <LibraryApp />
                <LibraryApp downloaded />
                <LibraryApp />
                <LibraryApp />
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Collections
