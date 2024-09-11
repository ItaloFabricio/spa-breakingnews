import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  height: ${(props) => (props.top ? `550px` : "230px")};

  background-color: #fff;
  box-shadow: rgba(183, 185, 185, 0.2) 0px 2px 12px;
  border-radius: 0.6rem;
  

  background-image: ${(props) => (props.top ? `url(${props.banner})` : "none")};
  background-size: cover;
  background-position: center;

  z-index: 1;

  transition: .3s ease-in-out;

  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    z-index: 1;
    border-radius: 0.6rem;

    display: ${(props) => (props.top ? `url(${props.banner})` : "none")};
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-size: ${(props) => (props.top ? "1.5rem" : "1rem")};
  h2 {
    font-size: ${(props) => (props.top ? "3rem" : "1.4rem")};
    margin-bottom: 1rem;
    color: ${(props) => (props.top ? "#fff" : "#8257E6")};
  }

  i{
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: #8257E6;
    font-size: 1.1rem;
  }
`;

export const CardBody = styled.article`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.top ? `flex-end` : "center")};
    width: 100%;
    padding: 1rem;
    gap: 1rem;
  }

  img {
    min-width: 50%;
    max-width: 50%;
    object-fit: cover;
    border-radius: 0 0.4rem 0.4rem 0;
    display: ${(props) => (props.top ? `none` : "url(${props.banner})")};
    
  }

  p {
    text-align: left;
    color: ${(props) => (props.top ? `#fff` : "#181818")};
    line-height: ${(props) => (props.top ? "40px" : "24px")};
  }
  
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  section {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  i, span {
    color: ${(props) => (props.top ? `#fff` : "")};
  }
`;
