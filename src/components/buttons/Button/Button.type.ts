export interface ButtonProps<T extends React.ElementType> {
    as?: T
    variant?:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'outline'
        | 'install'
        | 'play'
        | 'pause'
    size?: 'small' | 'medium' | 'large'
    children: React.ReactNode
}
