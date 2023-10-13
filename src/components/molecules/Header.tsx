import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
    return (
        <Navbar shouldHideOnScroll className={"bg-black bg-opacity-60"}>
            <NavbarBrand className={""}>
                <p className=" my-auto font-bold text-inherit">AD</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            </NavbarContent>
            <NavbarContent justify="end">

            </NavbarContent>
        </Navbar>
    );
}