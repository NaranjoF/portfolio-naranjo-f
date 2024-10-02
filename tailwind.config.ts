import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '3xl': '1600px',
      },
      colors: {
        white: '#FFFFFF',
        'white-50': '#808080',
        'white-55': '#8C8C8C',
        'white-60': '#999999',
        'white-65': '#A6A6A6',
        'white-70': '#B3B3B3',
        'white-75': '#BFBFBF',
        'white-80': '#CCCCCC',
        'white-90': '#E6E6E6',
        black: '#000000',
        'gray-06': '#0F0F0F',
        'gray-10': '#1A1A1A',
        'gray-12': '#1F1F1F',
        'gray-15': '#262626',
        'gray-20': '#333333',
        'gray-25': '#404040',
        'gray-30': '#4C4C4C',
        'gray-40': '#666666',
      },
    },
  },
  plugins: [],
};
export default config;
