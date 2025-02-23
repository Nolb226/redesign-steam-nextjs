export interface IApp {
    pc_requirements: IPcRequirements
    mac_requirements: IMacRequirements
    linux_requirements: ILinuxRequirements
    price_overview: IPriceOverview
    platforms: IPlatforms
    recommendations: IRecommendations
    achievements: Achievements
    release_date: IReleaseDate
    support_info: ISupportInfo
    _id: string
    type: string
    name: string
    steam_appid: number
    required_age: number
    is_free: boolean
    controller_support: string
    dlc: number[]
    detailed_description: string
    about_the_game: string
    short_description: string
    supported_languages: string
    header_image: string
    capsule_image: string
    capsule_imagev5: string
    website: string
    developers: string[]
    publishers: string[]
    packages: number[]
    package_groups: IPackageGroup[]
    categories: ICategory[]
    genres: IGenre[]
    screenshots: IScreenshot[]
    movies: IMovie[]
    background: string
    background_raw: string
    __v: number
}

export interface IPcRequirements {
    minimum: string
    recommended: string
}

export interface IMacRequirements {
    minimum: string
    recommended: string
}

export interface ILinuxRequirements {
    minimum: string
    recommended: string
}

export interface IPriceOverview {
    currency: string
    initial: number
    final: number
    discount_percent: number
    initial_formatted: string
    final_formatted: string
}

export interface IPlatforms {
    windows: boolean
    mac: boolean
    linux: boolean
}

export interface IRecommendations {
    total: number
}

interface Achievements {
    total: number
    highlighted: IHighlighted[]
}

export interface IHighlighted {
    name: string
    path: string
}

export interface IReleaseDate {
    coming_soon: boolean
    date: string
}

export interface ISupportInfo {
    url: string
    email: string
}

export interface IPackageGroup {
    name: string
    title: string
    description: string
    selection_text: string
    save_text: string
    display_type: number
    is_recurring_subscription: string
    subs: ISub[]
}

export interface ISub {
    packageid: number
    percent_savings_text: string
    percent_savings: number
    option_text: string
    option_description: string
    can_get_free_license: string
    is_free_license: boolean
    price_in_cents_with_discount: number
}

export interface ICategory {
    id: number
    description: string
}

export interface IGenre {
    id: string
    description: string
}

export interface IScreenshot {
    id: number
    path_thumbnail: string
    path_full: string
}

export interface IMovie {
    id: number
    name: string
    thumbnail: string
    webm: IWebm
    mp4: IMp4
    highlight: boolean
}

export interface IWebm {
    '480': string
    max: string
}

export interface IMp4 {
    '480': string
    max: string
}
