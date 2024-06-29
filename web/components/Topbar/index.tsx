"use client";
import React from "react";
import {
    Navbar as NXNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link,
    Avatar
} from "@nextui-org/react";
import Logo from "./logo";
import {useSession} from "next-auth/react";

export default function Navbar() {
    const {data: session, status} = useSession();
    return (
        <NXNavbar
            classNames={{
                base: "bg-content1 fixed top-0 z-50"
            }}
            maxWidth="full"
            height={"60px"}
        >
            <NavbarBrand>
                <Logo />
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    {status !== "authenticated" ? (
                        <Button
                            as={Link}
                            color="success"
                            className="min-w-[105px] font-forms"
                            radius="sm"
                            href="/signin"
                            isLoading={status === "loading"}
                        >
                            Sign In
                        </Button>
                    ) : (
                        <div className="text-primary-foreground flex items-center gap-4">
                            <span className="text-base">
                                {session?.user?.name}
                            </span>
                            <Avatar src={session?.user?.image as string} />
                        </div>
                    )}
                </NavbarItem>
            </NavbarContent>
        </NXNavbar>
    );
}
