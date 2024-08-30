import React, { useState } from 'react'
import { WishlistProps } from './Wishlist.type'
import { IconHeart } from '@tabler/icons-react'
import { motion } from 'framer-motion'

function Wishlist({ children }: WishlistProps) {
    const [clicked, setClicked] = useState<boolean>(false)
    const toggle = () => setClicked(!clicked)
    return (
        <button
            onClick={toggle}
            data-toggle={clicked}
            className="px-4.75 flex gap-1 rounded-border bg-highlight py-4.25 text-main transition-all ease-linear hover:bg-hover active:bg-accent-red data-[toggle=true]:bg-accent-red data-[toggle=true]:hover:bg-accent-red/40"
        >
            {!clicked ? (
                <>
                    {children} <IconHeart className="h-6 w-6" />
                </>
            ) : (
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: 'spring',
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <IconHeart className="h-6 w-6 fill-main" />
                </motion.p>
            )}
        </button>
    )
}

export default Wishlist
