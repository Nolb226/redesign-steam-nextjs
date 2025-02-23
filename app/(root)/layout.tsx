import Footer from '@/components/layouts/footer'
import TitleBar from '@/components/layouts/title-bar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TitleBar />
            {/* <Header /> */}
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}
