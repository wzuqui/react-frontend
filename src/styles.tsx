import styled from "styled-components";

export const ColorPrimary = '#104a7d';
export const ColorSecondary = '#ba141a';

export const Header = styled.header`
    display: flex;
    font-size: 22px;
    line-height: 30px;
    background-color: ${ColorPrimary};
`;

export const Logo = styled.img`
    width: 74px;
    height: 30px;
    object-fit: contain;
`;