'use client'
import {Saira_Stencil_One} from "next/font/google";
import styled from "styled-components";
import { PrimaryInputWSearchIcon } from "./PrimaryInput";

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ["latin"]
});


interface HeaderProps{

}

const TagHeader = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;



export const Header: React.FC<HeaderProps> = () => {
    return (
        <TagHeader>
            <Logo className={sairaStencilOne.className}>Caputteno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Search for anything"/>
            </div>
        </TagHeader>
    )
}