'use client'

import login from '@/app/actions/login'
import Button from '@/components/buttons/Button'
import Checkbox from '@/components/inputs/Checkbox'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'

function LoginPage() {
    const [state, action] = useFormState(login, undefined)
    return (
        <div
            style={{
                backgroundImage: 'url(./images/new_login_bg_strong_mask.jpg)',
            }}
            className="flex flex-col items-center gap-8 bg-bg/main pb-32"
        >
            <div className="">
                <h1 className="text-main heading-large">Sign in</h1>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <label htmlFor="username">
                    <div className="font-medium uppercase text-primary body-small">
                        sign in with account name
                    </div>
                    <input
                        id="username"
                        type="text"
                        className="w-full rounded-sm border-2 border-bg/main bg-bg/main px-2.5 py-1.5 text-main outline-none body-large"
                        name="username"
                    />
                    {state?.errors?.username && <p>{state.errors.username}</p>}
                </label>
                <label htmlFor="password">
                    <div className="font-medium uppercase text-dim body-small">
                        password
                    </div>
                    <input
                        id="password"
                        type="text"
                        className="w-full rounded-sm border-2 border-bg/main bg-bg/main px-2.5 py-1.5 text-main outline-none body-large"
                        name="password"
                    />
                </label>
                <div className="flex items-center gap-2">
                    <Checkbox containerClassName="size-3" />
                    <span className="text-main body-small">Remember me!</span>
                </div>
                <Button className="bg-[linear-gradient(90deg,_#06BFFF_0%,_#2D73FF_100%)]">
                    Sign In
                </Button>
            </form>
            <div className="flex flex-col items-center pt-12">
                <div className="text-main heading-small">New to Steam</div>
                <div className="m-2.5">
                    <Button
                        as={Link}
                        href="/signup"
                        className="bg-[linear-gradient(90deg,_#06BFFF_0%,_#2D73FF_100%)] px-5 py-1.25 font-medium body-medium"
                    >
                        Create an account
                    </Button>
                </div>
                <div className="w-[300px] text-center text-dim body-medium">
                    It&apos;s free and easy. Discover thousands of games to play
                    with millions of new friends.
                </div>
            </div>
        </div>
    )
}

export default LoginPage
