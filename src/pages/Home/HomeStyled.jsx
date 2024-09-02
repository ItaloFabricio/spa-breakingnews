import styled from "styled-components";

export const HomeBody = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;

    width: 100%;
    max-width: 1440px;
`;

export const HomeHeader = styled.section`
    display: grid;
    grid-gap: 1rem;
    align-items: center;
    margin: 1rem auto;

    width: 100%;
    max-width: 1440px;
`;