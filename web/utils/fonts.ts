import {
    IBM_Plex_Sans as FontForms,
    Castoro as FontBrand
} from "next/font/google";

export const fontBranded = FontBrand({
    subsets: ["latin"],
    variable: "--font-brand",
    weight: ["400"],
    style: "italic"
});

export const fontForms = FontForms({
    subsets: ["latin"],
    variable: "--font-forms",
    weight: ["200", "300", "400", "500", "600", "700"]
});
