import LibraryHomeSidebar from '@/components/pages/library/library-home-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex library-bg bg-left h-full ">
            <LibraryHomeSidebar />
            {children}
        </div>
    )
}
