import React from 'react'
import Avatar from '../Avatar'

function FriendItem() {
    return (
        <li className="gap-2.25 flex items-center">
            <Avatar
                className="h-11.5 w-11.5"
                src="https://randomuser.me/api/portraits/lego/4.jpg"
                status="online"
            />
            <div className="flex flex-col">
                <span className="text-primary body-large">Friend 1</span>
                <span className="text-primary body-small">
                    Counter-Strike 2
                </span>
            </div>
        </li>
    )
}

export default FriendItem
