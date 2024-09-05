import styled from "styled-components";

export const ContainerResults = styled.section`
    padding-top: 1rem;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    img {
        width: 50%;
    }
`;

export const SearchNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    
    margin: 1rem auto;
`;

export const TextResults = styled.div`
    
`;