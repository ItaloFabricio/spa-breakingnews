import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    background-color: #fff;
    box-shadow: rgba(183, 185, 185, 0.2) 0px 2px 12px;
    border-radius: .6rem;
    padding: 2rem;
`;

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
        width: 50%;
        object-fit: cover;
        object-position: center;
        border-radius: .4rem;
    }

    h2{
        margin-bottom: 1rem;
    }
`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: .3rem;
    }
`;