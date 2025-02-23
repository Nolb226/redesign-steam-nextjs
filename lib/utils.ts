import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const numberFormatter = (options?: Intl.NumberFormatOptions) =>
    new Intl.NumberFormat('vi-VN', options).format

export const hidingEmail = (email: string) => {
    const [name, domain] = email.split('@')
    return `${'*'.repeat(name.length)}@${domain}`
}

export const hidingPhone = (phone: string) => {
    return `Ends in **${phone.slice(-2)}`
}
