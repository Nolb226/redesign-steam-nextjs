import { ENDPOINTS } from '@/constants/endpoints'
import { getPublic } from '@/lib/api'
import { IApp } from '@/models/app'

interface Response<T> {
    data: T
}

export const getAppById = async (id: string) => {
    const { data } = await getPublic<Response<IApp>>(ENDPOINTS.APPS.DETAILS(id))
    return data
}
