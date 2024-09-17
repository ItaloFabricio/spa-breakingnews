import styled from "styled-components";

export const NewsContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 1rem auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.3rem;

  h1 {
    margin-bottom: .8rem;
    font-size: 2rem;
    color: #1F2123;
  }
`;

export const NewsContent = styled.div`
    width: 40%;

    img{
        width: 600px;
        height: 400px;
        margin: 1rem 0;
        border-radius: 12px;
    }
`;

export const NewsComment = styled.div`
    margin: 4rem 0;

    h2 { 
        color: #1F2123;
        margin-bottom: 1rem;
    }
`;

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;