import React from 'react'

function RootLayouts({ children }: Readonly<{ children: React.ReactNode }>) {
    return <main className="container mx-auto h-screen">{children}</main>
}

export default RootLayouts
