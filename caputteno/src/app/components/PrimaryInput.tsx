import exp from "constants";
import styled from "styled-components";
import { SearchIcon } from "../assets/SearchIcon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`

    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;

    background-color: #F3F5F6;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-primary);
`;

export const InputContainer = styled.div`
    position: relative;
    width: 352px;
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const PrimaryInputWSearchIcon = (props:InputProps) => {
    return (
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon />
        </InputContainer>

    )

}