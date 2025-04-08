import TitleBar from '@/components/layouts/title-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TitleBar />
            {/* <Header /> */}
            <main className="h-[calc(100vh_-_3.6875rem_-_3.5625rem)]">
                {children}
            </main>
        </>
    )
}
