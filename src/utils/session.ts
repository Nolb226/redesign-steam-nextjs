import { JWTPayload, jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import 'server-only'
const SECRET_KEY = process.env.SESSION_SECRET_KEY
const encodedKey = new TextEncoder().encode(SECRET_KEY)

type TSessionPayload = {
    userId: string
    expiredAt: Date
}

interface TSessionReturned extends JWTPayload {
    userId: string
    expiredAt: Date
}

export const encrypt = async (payload: TSessionPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export const decrypt = async (session: string) => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload as TSessionReturned
    } catch (error) {
        console.log(error)
    }
}

export const createSession = async (userId: string) => {
    const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    const session = await encrypt({ userId, expiredAt })

    cookies().set('_session', session, {
        httpOnly: true,
        secure: true,
        expires: expiredAt,
        sameSite: 'lax',
        path: '/',
    })
}

export const deleteSession = async () => {
    cookies().delete('_')
}
