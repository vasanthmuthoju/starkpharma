/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}',
  './pages/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './app/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    colors: {
      background: 'hsl(var(--color-background))',
      foreground: 'hsl(var(--color-foreground))',
      border: 'hsl(var(--color-border))',
      input: 'hsl(var(--color-input))',
      ring: 'hsl(var(--color-ring))',
      card: 'hsl(var(--color-card))',
      'card-foreground': 'hsl(var(--color-card-foreground))',
      popover: 'hsl(var(--color-popover))',
      'popover-foreground': 'hsl(var(--color-popover-foreground))',
      primary: 'hsl(var(--color-primary))',
      'primary-foreground': 'hsl(var(--color-primary-foreground))',
      secondary: 'hsl(var(--color-secondary))',
      'secondary-foreground': 'hsl(var(--color-secondary-foreground))',
      accent: 'hsl(var(--color-accent))',
      'accent-foreground': 'hsl(var(--color-accent-foreground))',
      success: 'hsl(var(--color-success))',
      'success-foreground': 'hsl(var(--color-success-foreground))',
      destructive: 'hsl(var(--color-destructive))',
      'destructive-foreground': 'hsl(var(--color-destructive-foreground))',
      muted: 'hsl(var(--color-muted))',
      'muted-foreground': 'hsl(var(--color-muted-foreground))',
    },
    boxShadow: {
      'glow-primary': '0 10px 40px -10px hsl(197 92% 45% / 0.4)',
      'glow-secondary': '0 10px 40px -10px hsl(38 90% 52% / 0.4)',
      'card': '0 4px 20px -2px hsl(220 26% 14% / 0.08)',
    },
    borderRadius: {
      'lg': '0.75rem',
      'md': '0.5rem',
      'sm': '0.375rem',
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(135deg, hsl(197, 92%, 45%), hsl(197, 92%, 60%))',
      'gradient-secondary': 'linear-gradient(135deg, hsl(38, 90%, 52%), hsl(38, 90%, 65%))',
      'gradient-hero': 'linear-gradient(135deg, hsl(197, 92%, 45%) 0%, hsl(38, 90%, 52%) 100%)',
      'gradient-subtle': 'linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(210, 40%, 98%) 100%)',
    },
  },
};
export const plugins = [];