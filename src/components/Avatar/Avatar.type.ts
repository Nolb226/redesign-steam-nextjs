export interface AvatarProps extends React.ComponentPropsWithoutRef<'img'> {
    status?: 'online' | 'offline' | 'away'
    src: string
    alt?: string
}
