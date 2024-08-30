import { motion } from 'framer-motion'
import React from 'react'

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    />
)

function DisclosureToggle() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus hidden group-hover/item:inline"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <Path
                // d="M12 5l0 14"
                variants={{
                    open: { d: 'M5 12l14 0' },
                    closed: { d: 'M12 5l0 14' },
                }}
            />
            <path
                d="M5 12l14 0"
                fill="transparent"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DisclosureToggle
