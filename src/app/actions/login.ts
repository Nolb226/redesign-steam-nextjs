'use server'

import prisma from '@/utils/prisma'
import { createSession } from '@/utils/session'
import * as bcrypt from 'bcrypt'
import * as z from 'zod'
import { redirect } from 'next/navigation'

type FormState =
    | {
          errors?: {
              name?: string[]
              email?: string[]
              password?: string[]
          }
          message?: string
      }
    | undefined

const loginFormSchema = z.object({
    username: z.string().trim().min(1),
    password: z.string().trim().min(1),
})

export default async function login(state: FormState, formData: FormData) {
    try {
        const rawFormData = {
            username: formData.get('username') as string,
            password: formData.get('password') as string,
        }

        const validatedFields = loginFormSchema.safeParse(rawFormData)

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            }
        }

        const hasUser = await prisma.user.findFirst({
            where: { username: rawFormData.username },
        })

        if (!hasUser) {
            return {
                error: 'User not found',
            }
        }

        const isVerify = await bcrypt.compare(
            rawFormData.password,
            hasUser.password
        )

        if (!isVerify) {
            return {
                error: 'Password not match',
            }
        }
        await createSession(hasUser.id)
        redirect('/')
    } catch (error) {
        console.log(error)
    }
}
