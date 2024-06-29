"use client";
import React from "react";
import {
    Navbar as NXNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Link
} from "@nextui-org/react";
import Logo from "./logo";
import {useSession} from "next-auth/react";

export default function Navbar() {
    const session = useSession();
    return (
        <NXNavbar
            classNames={{
                base: "bg-content1"
            }}
            maxWidth="full"
            height={"60px"}
        >
            <NavbarBrand>
                <Logo />
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    {session.status !== "authenticated" ? (
                        <Button
                            as={Link}
                            color="success"
                            className="min-w-[105px] font-forms"
                            radius="sm"
                            href="/signin"
                            isLoading={session.status === "loading"}
                        >
                            Sign In
                        </Button>
                    ) : (
                        <></>
                    )}
                </NavbarItem>
            </NavbarContent>
        </NXNavbar>
    );
}
