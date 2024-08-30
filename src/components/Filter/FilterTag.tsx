import React from 'react'
import { FilterTagProps } from './Filter.type'
import Tag from '../buttons/Tag'

function FilterTag({ children, ...props }: FilterTagProps) {
    return (
        <Tag filter {...props}>
            {children}
        </Tag>
    )
}

export default FilterTag
