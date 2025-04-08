import { LibraryHeader } from '@/components/layouts/header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LibraryHeader />
            {children}
        </>
    )
}
