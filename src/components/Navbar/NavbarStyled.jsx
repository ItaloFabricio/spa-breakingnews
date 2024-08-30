import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;/* 
  position: fixed;
  top: 0; */
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(183, 185, 185, 0.2) 0px 2px 12px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    top: 1;
    right: 0.6rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    width: 20px;
    height: 20px;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem 2rem 0.6rem 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    &:focus {
        border: 1px solid #8257E6;
    }
  }
`;

export const Button = styled.button`
  background-color: #8257e6;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 12px 24px;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.4rem;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.02);
  }
`;
