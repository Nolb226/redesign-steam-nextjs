import { StoreHeader } from '@/components/layouts/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StoreHeader />
            {children}
        </>
    )
}
