import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Motiva'],
            },
            spacing: {
                '0.375': '1.5px',
                '0.75': '3px',
                '1.25': '5px',
                '1.75': '7px',
                '2.25': '9px',
                '2.75': '11px',
                '3.25': '13px',
                '3.75': '15px',
                '4.25': '17px',
                '4.75': '19px',
                '5.25': '21px',
                '5.5': '22px',
                '7.5': '30px',
                '7.75': '31px',
                '11.5': '46px',
                '15.75': '63px',
            },
            borderRadius: {
                border: '3px',
                'border-md': '5px',
            },
            colors: {
                primary: '#66C0F4',
                'secondary-color': '#4B619B',
                'accent-green': '#A1CD44',
                'accent-red': '#CD5444',
                'accent-yellow': '#C1B15F',
                main: '#F3F3F3',
                dim: '#76808C',
                highlight: '#1E2329',
                'bg/main': '#0E141B',
                hover: '#313843',
                secondary: '#14344B',
                tertiary: '#212B45',
            },

            fontSize: {
                'heading/small': '18px',
            },
            fontWeight: {
                'heading/small': '700',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }: { addUtilities: any }) {
            addUtilities({
                '.heading-large': {
                    'font-size': '26px',
                    'font-weight': '700',
                },
                '.heading-medium': {
                    'font-size': '22px',
                    'font-weight': '700',
                },
                '.heading-small': {
                    'font-size': '18px',
                    'font-weight': '700',
                },
                '.body-large': {
                    'font-size': '16px',
                },
                '.body-medium': {
                    'font-size': '14px',
                },
                '.body-small': {
                    'font-size': '12px',
                },
                '.bb_tag': {
                    color: '#66C0F4',
                    'font-size': '18px',
                    'font-weight': '700',
                    marginBottom: '10px',
                    marginTop: '18px',
                },
                '.bb_ul': {
                    marginLeft: '16px',
                    listStyleType: 'square',
                },
                'ul.bb_ul li': {
                    marginBottom: '8px',
                },
            })
        }),
    ],
}
export default config
