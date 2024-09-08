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
  display: grid;
	grid-template-columns: 216px 216px 216px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  text-align: right;

  img {
    background-color: #fff;
  }
`;

export const InputSpace = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 6px;
    right: 0.6rem;
    z-index: 10;
    border: none;
    border-radius: 0.3rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  img{
    background-color: transparent;
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

export const ErrorSpan = styled.span`
  background-color: #d40b0b;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const UserLoggedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  justify-self: flex-end;
  max-width: 100%;
  gap: 1rem;

  h2{
    font-size: 1.1rem;
    color: #8257E6;
  }

  i {
    font-size: 1.5rem;
    color: #2e2e2e;
    cursor: pointer;
  }
`;