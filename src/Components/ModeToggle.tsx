"use client";
import * as React from "react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {

    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white text-gray-900" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white text-gray-900" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="dark:bg-[#121212]"
                align="end"
            >
                <DropdownMenuItem
                    className="dark:text-white text-gray-900"
                    onClick={() => setTheme("light")}
                >
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="dark:text-white text-gray-900"
                    onClick={() => setTheme("dark")}
                >
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="dark:text-white text-gray-900"
                    onClick={() => setTheme("system")}
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};