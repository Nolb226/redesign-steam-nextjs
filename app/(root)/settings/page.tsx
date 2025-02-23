import {
    SettingsCard,
    SettingsCardTitle,
} from '@/components/pages/settings/settings-card'
import { Button } from '@/components/ui/button'
import { hidingEmail, hidingPhone } from '@/lib/utils'

export default function Page() {
    return (
        <div className="flex flex-col gap-5">
            <SettingsCard>
                <SettingsCardTitle>Profile</SettingsCardTitle>
                <div className="flex w-3/4 items-center py-2.75">
                    <div className="w-1/3">
                        <span className="heading-small">Account name</span>
                    </div>
                    <div className="w-1/3 text-text/dim body-large">
                        ************
                    </div>
                    <div className="w-1/3 text-text/dim body-large">
                        You can’t change your account name.
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/4">
                        <span className="heading-small">Profile name</span>
                    </div>
                    <div className="w-1/4 text-color/primary body-large">
                        NTKH
                    </div>
                    <div className="flex flex-1 items-center gap-2.5">
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Edit Profile
                        </Button>
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Visit Profile
                        </Button>
                    </div>
                </div>
            </SettingsCard>
            <SettingsCard>
                <SettingsCardTitle>Contact Info</SettingsCardTitle>
                <div className="flex items-center">
                    <div className="w-1/4">
                        <span className="heading-small">Email</span>
                    </div>
                    <div className="w-1/4 text-color/primary body-large">
                        {hidingEmail('hn26677@gmail.com')}
                    </div>
                    <div className="flex flex-1 items-center gap-2.5">
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Change Email
                        </Button>
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Email Preferences
                        </Button>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/4">
                        <span className="heading-small">Phone number</span>
                    </div>
                    <div className="w-1/4 text-color/primary body-large">
                        {hidingPhone('036080050')}
                    </div>
                    <div className="flex flex-1 items-center gap-2.5">
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Change Number
                        </Button>
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            {/* Remove Number */}
                            Verify Number
                        </Button>
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'ghost'}
                        >
                            Remove Number
                        </Button>
                    </div>
                </div>
            </SettingsCard>
            <SettingsCard>
                <SettingsCardTitle>VAC</SettingsCardTitle>
                <div className="flex items-center">
                    <div className="w-1/4">
                        <span className="heading-small">Status</span>
                    </div>
                    <div className="w-1/4 body-large">
                        No VAC bans on this account
                    </div>
                    <div className="flex flex-1 items-center gap-2.5">
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
            </SettingsCard>
            <SettingsCard>
                <SettingsCardTitle>Danger Zone</SettingsCardTitle>
                <div className="flex items-center">
                    <div className="w-2/4">
                        <span className="heading-small">
                            Permanently Delete Your Account
                        </span>
                    </div>
                    <div className="flex flex-1 items-center gap-2.5">
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'secondary'}
                        >
                            Learn more
                        </Button>
                        <Button
                            className="max-w-[166px] flex-1 py-4.25 leading-3 body-large"
                            variant={'destructive'}
                        >
                            Delete Account
                        </Button>
                    </div>
                </div>
            </SettingsCard>
        </div>
    )
}
