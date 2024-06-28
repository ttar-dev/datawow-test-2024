"use client";

import Topbar from "@/components/Topbar";
import {useSession} from "next-auth/react";
import * as React from "react";

export default function AppLayout({children}: {children: React.ReactNode}) {
    useSession();
    return (
        <>
            <Topbar />
            <main>{children}</main>
        </>
    );
}
