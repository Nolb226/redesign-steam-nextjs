import { IconCheck } from '@tabler/icons-react'
import React from 'react'

function Checkbox() {
    return (
        <label
            htmlFor="checkbox"
            className="block size-[15.5px] rounded-border hover:cursor-pointer"
        >
            <input id="checkbox" type="checkbox" className="peer hidden" />
            <div className="flex h-full items-center justify-center rounded-[1px] bg-transparent shadow-[0_0_0_2px_var(--tw-shadow-color)] shadow-hover hover:shadow-dim peer-checked:bg-dim peer-checked:shadow-dim">
                <IconCheck className="h-4 w-4 font-bold" stroke={4} />
            </div>
        </label>
    )
}

export default Checkbox
