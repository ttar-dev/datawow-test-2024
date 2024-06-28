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

export default function Navbar() {
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
                    <Button
                        as={Link}
                        color="success"
                        className="min-w-[105px]"
                        radius="sm"
                        href="/signin"
                    >
                        Sign In
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NXNavbar>
    );
}
