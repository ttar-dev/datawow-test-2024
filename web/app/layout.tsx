import type {Metadata} from "next";

import "./globals.css";

import AuthProvider from "@/contexts/SessionProvider";
import {fontBranded, fontForms} from "@/utils/fonts";
import UIProvider from "@/contexts/UIProvider";
import {ReduxProvider} from "@/contexts/ReduxProvider";

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
            <body
                className={`${fontBranded.variable} ${fontForms.variable} w-full`}
            >
                <AuthProvider>
                    <ReduxProvider>
                        <UIProvider>{children}</UIProvider>
                    </ReduxProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
