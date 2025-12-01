/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(255, 0, 150)',
                    50: '#ffe5f3',
                    100: '#ffcce7',
                    200: '#ff99cf',
                    300: '#ff66b7',
                    400: '#ff339f',
                    500: 'rgb(255, 0, 150)', // Main pink
                    600: '#cc0077',
                    700: '#99005a',
                    800: '#66003c',
                    900: '#33001e',
                },
                dark: {
                    DEFAULT: '#000000',
                    50: '#1a1a1a',
                    100: '#0d0d0d',
                    200: '#000000',
                },
                light: {
                    DEFAULT: '#ffffff',
                    50: '#f9f9f9',
                    100: '#f5f5f5',
                    200: '#eeeeee',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 0, 150, 0.3)',
                'glow-lg': '0 0 30px rgba(255, 0, 150, 0.4)',
            },
        },
    },
    plugins: [],
}
