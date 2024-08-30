import React from 'react'
import { LibraryAppProps } from './LibraryApp.type'
import cn from '@/utils'

function LibraryApp({ downloaded = false }: LibraryAppProps) {
    return (
        <div className="flex items-center gap-2.5 rounded-border py-1.5 pl-3.25 hover:cursor-pointer hover:bg-highlight active:bg-hover/80">
            <img
                className="h-5.25 w-5.25 rounded-sm object-cover"
                src="/images/app-demo.jpg"
                alt=""
            />
            <p
                className={cn({
                    'text-dim': downloaded === false,
                    'text-main': downloaded === true,
                })}
            >
                Stardew Valley
            </p>
        </div>
    )
}

export default LibraryApp
