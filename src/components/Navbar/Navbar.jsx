import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import search from "../../images/search-icon.svg";
import { Button, Container, ErrorSpan, InputSpace, Nav, UserLoggedSpace } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogged } from "../../services/userServices";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  function goAuth() {
    navigate("/auth");
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function signout() {
    
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    }
  }, []);

  return (
    <>
      <Nav>
        <Container>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Breaking News" />
          </Link>
          <form onSubmit={handleSubmit(onSearch)}>
            <InputSpace>
              <button type="submit">
                <img src={search} alt="" />
              </button>
              <input
                {...register("title")}
                type="text"
                placeholder="Pesquise uma notícia"
              />
            </InputSpace>
          </form>
          {user ? (
            <UserLoggedSpace>
              <h2>{user.name}</h2>
              <i className="bi bi-box-arrow-right" onClick={signout}></i>
            </UserLoggedSpace>
          ) : (
            <Button onClick={goAuth}>Entrar</Button>
          )}
        </Container>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
