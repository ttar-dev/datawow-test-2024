"use client";

import Topbar from "@/components/topbar";
import {Button} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import * as React from "react";
import {TbEdit, TbSmartHome} from "react-icons/tb";

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
                    <ul className="w-full space-y-2">
                        <Button
                            as="li"
                            className="w-full cursor-pointer"
                            variant="light"
                        >
                            <div className="flex items-center w-full gap-4">
                                <TbSmartHome className="text-2xl" />
                                <span className="text-base">Home</span>
                            </div>
                        </Button>

                        <Button
                            as="li"
                            className="w-full cursor-pointer"
                            variant="light"
                        >
                            <div className="flex items-center w-full gap-4">
                                <TbEdit className="text-2xl" />
                                <span className="text-base">Our Blog</span>
                            </div>
                        </Button>
                    </ul>
                </div>
            </aside>
            <main className="block mt-[60px] sm:ml-[280px] w-full sm:max-w-4xl p-3 sm:p-6">
                {children}
            </main>
        </>
    );
}
