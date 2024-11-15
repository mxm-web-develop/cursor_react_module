/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  mode: 'jit',
  corePlugins: {
    preflight: false,
    aspectRatio: true,
    divideStyle: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html', './public/index.html'],
  theme: {
    extend: {
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          chart: {
            1: 'hsl(var(--chart-1))',
            2: 'hsl(var(--chart-2))',
            3: 'hsl(var(--chart-3))',
            4: 'hsl(var(--chart-4))',
            5: 'hsl(var(--chart-5))',
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
          dot: {
            '0%, 20%': {
              color: 'rgba(0,0,0,0)',
              textShadow: '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)',
            },
            '40%': {
              color: 'black',
              textShadow: '.25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)',
            },
            '60%': {
              textShadow: '.25em 0 0 black, .5em 0 0 rgba(0,0,0,0)',
            },
            '80%, 100%': {
              textShadow: '.25em 0 0 black, .5em 0 0 black',
            },
          },
          slideDownAndFade: {
            from: {
              opacity: '0',
              transform: 'translateY(-2px)',
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          slideLeftAndFade: {
            from: {
              opacity: '0',
              transform: 'translateX(2px)',
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
          slideUpAndFade: {
            from: {
              opacity: '0',
              transform: 'translateY(2px)',
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          slideRightAndFade: {
            from: {
              opacity: '0',
              transform: 'translateX(-2px)',
            },
            to: {
              opacity: '1',
              transform: 'translateX(0)',
            },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          dot: 'dot 1.5s infinite',
          slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        fontFamily: {
          sans: ['PingFang SC', 'Arial', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
          xs: ['12px', '20px'],
          sm: ['14px', '22px'],
          base: ['16px', '24px'],
          lg: ['18px', '26px'],
          xl: ['24px', '32px'],
          '2xl': ['30px', '38px'],
          '3xl': ['38px', '46px'],
          '4xl': ['46px', '54px'],
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '720px',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
