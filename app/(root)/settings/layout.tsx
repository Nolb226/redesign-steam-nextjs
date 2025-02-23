import SettingsNavigation from '@/components/pages/settings/settings-navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen bg-background/highlight">
            <div className="min-h-screen bg-background/main/80 pt-13.5">
                <div className="container mx-auto flex h-full flex-col gap-8">
                    <span className="heading-large">Settings</span>
                    <div className="gap-4.5 flex">
                        <SettingsNavigation />
                        <div className="flex-1">{children}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
