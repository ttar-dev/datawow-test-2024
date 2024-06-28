"use client";
import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

export default function UIProvider({children}: {children: React.ReactNode}) {
    return (
        <NextUIProvider>
            <div className="relative">{children}</div>
        </NextUIProvider>
    );
}
