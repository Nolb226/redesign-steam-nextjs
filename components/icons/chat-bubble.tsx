import React from 'react'

function ChatBubble({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_505_8759)">
                <path d="M12.5 1.25H2.5C1.8125 1.25 1.25 1.8125 1.25 2.5V13.75L3.75 11.25H12.5C13.1875 11.25 13.75 10.6875 13.75 10V2.5C13.75 1.8125 13.1875 1.25 12.5 1.25Z" />
            </g>
            <defs>
                <clipPath id="clip0_505_8759">
                    <rect width="15" height="15" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ChatBubble
