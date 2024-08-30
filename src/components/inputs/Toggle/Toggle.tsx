import React from 'react'
import { ToggleProps } from './Toggle.type'

function Toggle({}: ToggleProps) {
    return (
        <label className="inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div className="w-15.75 peer relative h-7.5 rounded-full bg-highlight after:absolute after:start-[5px] after:top-[5px] after:h-5 after:w-5 after:rounded-full after:bg-hover after:transition-all after:content-[''] peer-checked:bg-tertiary peer-checked:after:translate-x-[165%] peer-checked:after:bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300" />
        </label>
    )
}

export default Toggle
