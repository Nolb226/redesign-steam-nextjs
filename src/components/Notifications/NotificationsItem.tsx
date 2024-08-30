import { IconUsers } from '@tabler/icons-react'
import React from 'react'

function NotificationsItem() {
    return (
        <li className="py-2 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
                <p>
                    <IconUsers className="mr-0.375 inline h-3 w-3" />
                    <span className="body-small">Community</span>
                </p>
            </div>
            <div className="mt-2 text-main body-medium">
                <p>
                    <span className="text-primary">Your friend</span> left a
                    comment on your post.
                </p>
            </div>
        </li>
    )
}

export default NotificationsItem
