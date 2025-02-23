'use client'
import { Icon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'

interface IAppLanguagesProps {
    supported_languages: string[]
    full_audio_languages: string[]
}

function AppLanguages({
    supported_languages,
    full_audio_languages,
}: IAppLanguagesProps) {
    const [isShowingFull, setIsShowingFull] = React.useState(false)
    const showFull = () => {
        setIsShowingFull(true)
    }
    const languages = useMemo(() => {
        if (isShowingFull) {
            return supported_languages
        }
        return supported_languages.slice(0, 5)
    }, [isShowingFull, supported_languages])

    return (
        <div className="flex flex-col gap-1.75 rounded-[0.3125rem] bg-background/main p-6.25">
            <p className="leading-6 text-text/dim body-large">Languages</p>
            <div className="flex items-center justify-end gap-6 text-text/dim body-large">
                <span>Interface</span>
                <span>Subtitles</span>
                <span>Full Audio</span>
            </div>
            {languages.map((language) => {
                console.log(language)

                return (
                    <div
                        key={`lang-${language}`}
                        className="flex items-center justify-between rounded-[0.1875rem] bg-background/highlight/[39%] px-3.25 py-2 body-small"
                    >
                        <span>{language}</span>
                        <div className="flex w-full max-w-[216px] items-center justify-between">
                            <Icon.check className="size-6 text-color/primary" />
                            <Icon.check className="size-6 text-color/primary" />
                            {full_audio_languages.includes(language) ? (
                                <Icon.check className="size-6 text-color/primary" />
                            ) : (
                                <div className="size-6"></div>
                            )}
                        </div>
                    </div>
                )
            })}
            {!isShowingFull && (
                <Button
                    onClick={showFull}
                    className="w-fit body-medium"
                    variant={'link'}
                >
                    See all {supported_languages.length} supported languages
                </Button>
            )}
        </div>
    )
}

export default AppLanguages
