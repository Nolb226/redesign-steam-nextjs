'use client'

import React, { useCallback } from 'react'

import { useRedux } from '@/hooks/use-redux'

import LibraryHomeGrid from './library-home-grid'

function LibraryHome() {
    const { appSelector } = useRedux()
    const { layoutView } = appSelector((state) => state.library)
    const renderView = useCallback(() => {
        switch (layoutView) {
            case 'grid':
                return <LibraryHomeGrid />
            case 'list':
                return <div>List</div>
            case 'detail':
                return <div>Detail</div>
        }
    }, [layoutView])

    return <>{renderView()}</>
}

export default LibraryHome
