import {NextUIPluginConfig} from "@nextui-org/react";

const colors = {
    green: {
        100: "#D8E9E4",
        300: "#2B5F44",
        500: "#243831"
    },
    goldren: {
        default: "#C5A365"
    },
    grey: {
        100: "#BBC2C0",
        300: "#939494"
    },
    success: {
        default: "#49A569"
    },
    text: "#191919",
    black: "#000000",
    white: "#FFFFFF"
};

export const themeConfig = <NextUIPluginConfig>{
    defaultTheme: "light",
    addCommonColors: false,
    themes: {
        light: {
            colors: {
                primary: {
                    DEFAULT: colors.green[300],
                    foreground: colors.white,
                    ...colors.green
                },
                secondary: {
                    DEFAULT: colors.goldren.default,
                    foreground: colors.white
                },
                success: {
                    DEFAULT: "#49A569",
                    foreground: colors.white
                },
                content1: {
                    DEFAULT: "#243831",
                    foreground: colors.white
                },
                background: {
                    DEFAULT: colors.grey[100],
                    foreground: colors.text
                }
            }
        }
    }
};
