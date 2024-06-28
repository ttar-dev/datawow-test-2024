import React from "react";
import {
    Navbar as NXNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button
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
                        color="success"
                        className="min-w-[105px]"
                        radius="sm"
                    >
                        Sign In
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NXNavbar>
    );
}
