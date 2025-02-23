export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-background/main">
            <div className="min-h-screen pb-[195px] pt-24 profile-bg">
                {children}
            </div>
        </div>
    )
}
