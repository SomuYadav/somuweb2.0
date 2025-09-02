import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // This will be white
        foreground: "hsl(var(--foreground))", // This will be very dark gray
        primary: {
          DEFAULT: "hsl(var(--primary))", // This will be light green for general use
          foreground: "hsl(var(--primary-foreground))", // This will be a dark color for text on primary
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))", // This will be a light gray for muted text
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // This will be a slightly lighter black for cards
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Project-specific colors (only primary and foreground for text/buttons)
        walmart: {
          primary: "hsl(var(--walmart-primary))",
          foreground: "hsl(var(--walmart-foreground))",
        },
        nykaa: {
          primary: "hsl(var(--nykaa-primary))",
          foreground: "hsl(var(--nykaa-foreground))",
        },
        "nykaa-beauty": {
          primary: "hsl(var(--nykaa-beauty-primary))",
          foreground: "hsl(var(--nykaa-beauty-foreground))",
        },
        "nykaa-fashion": {
          primary: "hsl(var(--nykaa-fashion-primary))",
          foreground: "hsl(var(--nykaa-fashion-foreground))",
        },
        "nykaa-man": {
          primary: "hsl(var(--nykaa-man-primary))",
          foreground: "hsl(var(--nykaa-man-foreground))",
        },
        digivalet: {
          primary: "hsl(var(--digivalet-primary))",
          foreground: "hsl(var(--digivalet-foreground))",
        },
        "digivalet-office": {
          primary: "hsl(var(--digivalet-office-primary))",
          foreground: "hsl(var(--digivalet-office-foreground))",
        },
        "digivalet-tv": {
          primary: "hsl(var(--digivalet-tv-primary))",
          foreground: "hsl(var(--digivalet-tv-foreground))",
        },
        flexiasia: {
          primary: "hsl(var(--flexiasia-primary))",
          foreground: "hsl(var(--flexiasia-foreground))",
        },
        kashish: {
          primary: "hsl(var(--kashish-primary))",
          foreground: "hsl(var(--kashish-foreground))",
        },
        mpl: {
          primary: "hsl(var(--mpl-primary))",
          foreground: "hsl(var(--mpl-foreground))",
        },
        cashi: {
          primary: "hsl(var(--cashi-primary))",
          foreground: "hsl(var(--cashi-foreground))",
        },
        "hi-cabs": {
          primary: "hsl(var(--hi-cabs-primary))",
          foreground: "hsl(var(--hi-cabs-foreground))",
        },
        aircon: {
          primary: "hsl(var(--aircon-primary))",
          foreground: "hsl(var(--aircon-foreground))",
        },
        dexbytes: {
          primary: "hsl(var(--dexbytes-primary))",
          foreground: "hsl(var(--dexbytes-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "subtle-float": "0 4px 12px rgba(0, 0, 0, 0.04)", // A very light, subtle shadow
      },
      spacing: {
        "20": "5rem", // 80px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
