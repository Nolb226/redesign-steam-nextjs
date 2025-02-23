import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                '0.75': '0.1875rem',
                '1.25': '0.3125rem',
                '1.75': '0.4375rem',
                '2.75': '0.6875rem',
                '3.25': '0.8125rem',
                '3.75': '0.9375rem',
                '4.25': '1.0625rem',
                '4.5': '1.125rem',
                '5.25': '1.3125rem',
                '5.5': '1.375rem',
                '5.75': '1.4375rem',
                '6.25': '1.5625rem',
                '6.5': '1.625rem',
                '7.25': '1.8125rem',
                '7.5': '1.875rem',
                '7.75': '1.9375rem',
                '8.25': '2.0625rem',
                '8.5': '2.125rem',
                '9.5': '2.375rem',
                '11.25': '2.8125rem',
                '11.5': '2.875rem',
                '12.25': '3.0625rem',
                '12.75': '3.1875rem',
                '13.5': '3.375rem',
                '13.75': '3.4375rem',
                '14.75': '3.6875rem',
                '16.5': '4.125rem',
                '28.25': '7.0625rem',
                '55.25': '13.8125rem',
                '66.5': '16.625rem',
            },
            colors: {
                'color/primary': '#66C0F4',
                'color/secondary': '#4B619B',
                'accent/yellow': ' #C1B15F',
                'accent/red': '#CD5444',
                'text/dim': '#76808C',
                'background/highlight': '#1E2329',
                'background/hover': '#313843',
                'background/main': '#0E141B',
                'background/tertiary': '#212B45',
                'text/main': '#F3F3F3',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground':
                        'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground':
                        'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.profile-bg': {
                    background:
                        'radial-gradient(circle at top, rgba(33,43,69,1) 3%, rgba(17,24,34,1) 73%, rgba(15,20,31,1) 87%, rgba(12,20,27,1) 100%)',
                },
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
} satisfies Config
