import AppDetail from '@/components/pages/store/app/app-detail'
import { IPageProps } from '@/models/common'
import { getAppById } from '@/services/app'
import { Metadata } from 'next'

export async function generateMetadata({
    params,
}: IPageProps): Promise<Metadata> {
    const id = (await params).id
    const appData = await getAppById(id)
    return {
        title: appData.name,
    }
}

export default async function Page({ params }: IPageProps) {
    const id = (await params).id
    const appData = await getAppById(id)

    return <AppDetail app={appData} />
}
