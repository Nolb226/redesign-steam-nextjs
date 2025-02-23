import {
    SettingsCard,
    SettingsCardTitle,
} from '@/components/pages/settings/settings-card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const PRIVACY_OPTIONS = [
    {
        value: 'public',
        label: 'Public',
    },
    {
        value: 'private',
        label: 'Private',
    },
    {
        value: 'friends-only',
        label: 'Friends-only',
    },
]

export default function Page() {
    return (
        <SettingsCard className="gap-5">
            <SettingsCardTitle>Profile Privacy</SettingsCardTitle>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="heading-small">My basic details</span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="heading-small">
                        General Profile Privacy
                    </span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="ml-[37px] heading-small">
                        Game details
                    </span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="ml-[37px] heading-small">
                        Total Play Time
                    </span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="ml-[37px] heading-small">
                        Friends List
                    </span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="ml-[37px] heading-small">Inventory</span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-1/4">
                    <span className="ml-[37px] heading-small">
                        Profile Comments
                    </span>
                </div>
                <div className="w-1/4">
                    <Select defaultValue="public">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {PRIVACY_OPTIONS.map((option) => (
                                <SelectItem
                                    value={option.value}
                                    key={option.value}
                                >
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </SettingsCard>
    )
}
