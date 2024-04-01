"use client";

import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            label: "Ravenna Strings",
            link: "ravenna-strings",
        },
        {
            id: 2,
            label: "Ravenna String Sinfonia",
            link: "ravenna-string-sinfonia",
        },
        {
            id: 3,
            label: "Conductors",
            link: "conductors",
        },
        {
            id: 4,
            label: "Register",
            link: "register",
        },
        {
            id: 5,
            label: "Concerts & Schedule",
            link: "concerts",
        },
        {
            id: 6,
            label: "Our Story",
            link: "about-us",
        },
        {
            id: 7,
            label: "Donate",
            link: "donate",
        },
    ];

    return (
        <HeaderDiv>
            <Link href="/">
                <Image src="/images/header_banner.gif" alt="Banner" width={640} height={140} />
            </Link>
            <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
                <ul className="hidden md:flex">
                    {links.map(({id, label, link}) => (
                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                            <Link href={link}>{label}</Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({id, label, link}) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={link}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    width: 800px;
    margin: 0 auto;
`;

export default NavBar;