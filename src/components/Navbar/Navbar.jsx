import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import search from "../../images/search-icon.svg";
import { Button, Container, ErrorSpan, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../schemas/searchSchema";


export function Navbar() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(searchSchema)
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const {title} = data;
    navigate(`/search/${title}`);
    reset();
  }

  function goAuth() {
    navigate("/auth");
  }

  return (
    <>
      <Nav>
        <Container>
        <Link to="/"><img className="logo" src={logo} alt="Logo Breaking News" /></Link>
          <form onSubmit={handleSubmit(onSearch)}>
            <InputSpace>
              <button type="submit">
                <img src={search} alt="" />
              </button>
              <input {...register("title")}
                type="text" placeholder="Pesquise uma notícia" 
              />
            </InputSpace>
          </form>
          
          <Button onClick={goAuth}>Entrar</Button>
        </Container>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
