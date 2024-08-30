export type FilterContext = {
    search: string
    tags: string[]
}

export type FilterProps = {
    children: React.ReactNode
    searchable: boolean
}

export interface FilterSelectedTypeProps
    extends React.ComponentPropsWithoutRef<'button'> {
    handleOnRemove?: (tag: string) => void
    children?: string | React.ReactNode
}

export type FilterCategoryProps = {
    children?: React.ReactNode
    tags: string[]
    name: string
}

export interface FilterTagProps
    extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode
    checked?: boolean
}
