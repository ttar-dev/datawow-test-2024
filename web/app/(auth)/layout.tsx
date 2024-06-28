"use client";

import {useSession} from "next-auth/react";
import * as React from "react";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    useSession();
    return (
        <>
            <main>{children}</main>
        </>
    );
}
