export type TState = 'online' | 'away' | 'invisible' | 'offline'

export interface IPageProps {
    params: Promise<{ [key: string]: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
