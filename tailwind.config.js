const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors: {
            transparent: 'transparent',
            ...colors
        },
        screens: {
            xsm: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1920px',
            xxxl: '2560px'
        },
        extend: {
            backgroundImage: (theme) => ({
                wave: "url('https://ik.imagekit.io/0omc2vwzaz9/backWave_CFY0Q7zza.svg')",
                // 'wave-static': "url('https://ik.imagekit.io/0omc2vwzaz9/backWaveStatic_Nem2sYW8q.svg')"
                'wave-static': "url('https://ik.imagekit.io/0omc2vwzaz9/static-wave_wwYdjbvEYFi.svg')"
            }),
            spacing: {
                128: '32rem',
                144: '36rem',
                164: '42rem'
            },
            maxWidth: {
                '8xl': '90rem',
                '9xl': '100rem',
                '10xl': '108rem',
                'screen-3xl': '1920px'
            },
            fontSize: {
                '2xs': '.6rem',
                '3xs': '.5rem',
                '4xs': '.4rem',
                '8xl': '6rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('tailwindcss-textshadow'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ]
};
