"use client";
import React, { Fragment } from "react";
import { NAV_ITEMS, NAV_SUB_ITEMS } from "@/static";
import { Menu, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const NavItems = () => {

    const pathname = usePathname();

    return (
        <>
            {NAV_ITEMS.map((item, idx) => {
                return (
                    <Link
                        key={idx}
                        href={item.route}
                        className={`py-2 px-3 rounded hover:orange hover:cursor-pointer ${item.route === pathname ? "orange" : "dark:text-white text-gray-900"}`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </>
    )
};

export const NavSubItems = () => {

    const pathname = usePathname();

    const router = useRouter();

    return (
        <Menu as="div">
            {NAV_SUB_ITEMS.map((item, idx) => {
                return (
                    <div key={idx}
                        className="flex flex-col"
                    >
                        <Menu.Button key={item.label}>
                            <p
                                className={`py-2 px-3 rounded hover:orange hover:cursor-pointer ${"/bridge" === pathname ||
                                    "/staking" === pathname ? "orange" : "dark:text-white text-gray-900"}`}
                            >
                                {item.label}
                            </p>
                        </Menu.Button>

                        {item.accordianData && (
                            <Transition
                                as={Fragment}
                                enter="transition ease-in duration-600"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-out duration-500"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Menu.Items className="block md:absolute mt-1 mb-1 md:mb-0 md:mt-12 w-24 rounded-md bg-[#121212] dark:bg-white shadow-lg">
                                    <div className="px-1 py-1">
                                        {item.accordianData.map((data) => (
                                            <Menu.Item key={data.title}>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? "bg-orange-500 text-white" : "text-white dark:text-gray-900"}  group w-full rounded-md px-2 py-2 text-sm`}
                                                        onClick={() => router.push(data.route)}
                                                    >
                                                        {data.title}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        )}
                    </div>
                )
            })}
        </Menu>
    )
};