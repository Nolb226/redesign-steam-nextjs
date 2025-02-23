import React from 'react'

function ListViewIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_375_2687)">
                <path
                    d="M5 18H7.5C8.1875 18 8.75 17.4375 8.75 16.75V14.25C8.75 13.5625 8.1875 13 7.5 13H5C4.3125 13 3.75 13.5625 3.75 14.25V16.75C3.75 17.4375 4.3125 18 5 18ZM5 24H7.5C8.1875 24 8.75 23.4375 8.75 22.75V20.25C8.75 19.5625 8.1875 19 7.5 19H5C4.3125 19 3.75 19.5625 3.75 20.25L3.75 22.75C3.75 23.4375 4.3125 24 5 24ZM5 12H7.5C8.1875 12 8.75 11.4375 8.75 10.75V8.25C8.75 7.5625 8.1875 7 7.5 7H5C4.3125 7 3.75 7.5625 3.75 8.25V10.75C3.75 11.4375 4.3125 12 5 12ZM10 8.25V22.75C10 23.4375 10.5625 24 11.25 24H23.75C24.4375 24 25 23.4375 25 22.75V8.25C25 7.5625 24.4375 7 23.75 7H11.25C10.5625 7 10 7.5625 10 8.25Z"
                    fill="#76808C"
                />
            </g>
            <defs>
                <clipPath id="clip0_375_2687">
                    <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ListViewIcon
