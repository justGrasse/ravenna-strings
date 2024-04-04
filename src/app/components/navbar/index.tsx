"use client";

import Link from "next/link";
import Image from 'next/image';
import React from "react";
import styled from "styled-components";

const NavBar = () => {
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
            <HeaderContent>
                <Link href="/" className="w-full">
                    <StyledImage src="/images/header_banner.gif" alt="Banner" width={640} height={140} />
                </Link>
                <HeaderLinkContainer className="nav">
                    {links.map(({id, label, link}) => (
                        <HeaderLink
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                            <Link href={link}>{label}</Link>
                        </HeaderLink>
                    ))}
                </HeaderLinkContainer>
            </HeaderContent>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    margin: 0 auto;
`;

const HeaderContent = styled.div`
    max-width: 640px;
    margin: 0 auto;
`;

const StyledImage = styled(Image)`
    margin: 0 auto;
`;

const HeaderLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0;
    flex-wrap: wrap;
    width: 100%;
    background-color: #2f140a;
`;

const HeaderLink = styled.div`
    text-align: center;
    font-family: "Times New Roman",serif;
    font-size: large;
    min-width: 140px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5f5dc;
    :hover {
        --tw-text-opacity: 1;
        color: #ffd700;
    }
`;

export default NavBar;