import type {Metadata} from "next";

import "./globals.css";

import AuthProvider from "@/contexts/SessionProvider";
import {fontBranded, fontForms} from "@/utils/fonts";
import UIProvider from "@/contexts/UIProvider";

export const metadata: Metadata = {
    title: {
        default: "a Board",
        template: `%s - a Board`
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontBranded.variable} ${fontForms.variable}`}>
                <AuthProvider>
                    <UIProvider>{children}</UIProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
