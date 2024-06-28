import {Inter as FontSans, Castoro as FontBrand} from "next/font/google";

export const fontBranded = FontBrand({
    subsets: ["latin"],
    variable: "--font-brand",
    weight: ["400"]
});

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["200", "400", "500", "600", "700"]
});
