import {Inter as FontSans, Castoro as FontBrand} from "next/font/google";

export const fontBranded = FontBrand({
    subsets: ["latin"],
    variable: "--font-brand",
    weight: ["400"],
    style: "italic"
});
