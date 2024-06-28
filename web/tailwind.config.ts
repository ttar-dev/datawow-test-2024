import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";
import {themeConfig} from "./theme-config";

const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                brand: ["var(--font-brand)"]
            }
        }
    },
    darkMode: "class",
    plugins: [nextui(themeConfig)]
} satisfies Config;
export default config;
