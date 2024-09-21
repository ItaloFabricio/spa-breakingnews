import styled from "styled-components";

export const NewsContainer = styled.section`
  width: 100%;
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
    font-size: 2.2rem;
    font-weight: 900;
    line-height: 40px;
    color: #1F2123;
  }
`;

export const NewsContent = styled.div`
    width: 40%;
    margin: 0 auto;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{
        width: 100%;
        object-fit: cover;
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

export const NewsAutor = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }
`;