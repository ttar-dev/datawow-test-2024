"use client";

import Topbar from "@/components/topbar";
import {useSession} from "next-auth/react";
import * as React from "react";

export default function AppLayout({children}: {children: React.ReactNode}) {
    useSession();
    return (
        <>
            <Topbar />
            <aside
                id="document_sidebar"
                className="fixed top-[60px] left-0 w-[280px] z-40 h-screen transition-transform -translate-x-full lg:translate-x-0 bg-background"
                aria-label="Sidebar"
            >
                <div className="flex p-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi ducimus dignissimos quod saepe eveniet consequatur quos
                    reiciendis quisquam numquam ullam minima quis nemo est sint,
                    dolores assumenda repellat praesentium accusamus?
                </div>
            </aside>
            <main className="block mt-[60px] sm:ml-[280px] w-full sm:max-w-4xl p-3 sm:p-6">
                {children}
            </main>
        </>
    );
}
