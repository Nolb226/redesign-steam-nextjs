import { IconCheck } from '@tabler/icons-react'
import React from 'react'
import { CheckboxProps } from './Checkbox.type'
import cn from '@/utils'

function Checkbox({
    iconClassName,
    className,
    containerClassName,
    ...props
}: CheckboxProps) {
    return (
        <label
            htmlFor="checkbox"
            className={cn(
                'block size-[15.5px] rounded-border bg-black hover:cursor-pointer',
                containerClassName
            )}
        >
            <input
                id="checkbox"
                type="checkbox"
                {...props}
                className={cn('peer hidden', className)}
            />
            <div className="flex h-full items-center justify-center rounded-[1px] bg-transparent shadow-[0_0_0_2px_var(--tw-shadow-color)] shadow-hover hover:shadow-dim peer-checked:bg-dim peer-checked:shadow-dim">
                <IconCheck
                    className={cn(`h-4 w-4 font-bold`, iconClassName)}
                    stroke={4}
                />
            </div>
        </label>
    )
}

export default Checkbox
