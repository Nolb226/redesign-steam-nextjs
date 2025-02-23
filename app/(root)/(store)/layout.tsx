import { Header } from '@/components/layouts/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header.store />
            {children}
        </>
    )
}
