import React from 'react'
import { StoreMenuProps } from './StoreMenu.type'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import StoreMenuItem from './StoreMenuItem'

function StoreMenu({}: StoreMenuProps) {
    return (
        <div className="group/menu relative w-fit text-main">
            <div className="heading-small hover:cursor-pointer">
                Khánh Hoàng
            </div>
            <div className="pt-3.75 absolute hidden group-hover/menu:block">
                <ul>
                    <StoreMenuItem />
                    <StoreMenuItem />
                    <StoreMenuItem />
                    <StoreMenuItem />
                    <StoreMenuItem />
                </ul>
            </div>
        </div>
    )
}

export default StoreMenu
