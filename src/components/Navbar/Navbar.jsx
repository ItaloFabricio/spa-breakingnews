import logo from '../../images/LogoBN.png';
import search from '../../images/search-icon.svg';
import { Button, Container, InputSpace, Nav } from './NavbarStyled';

export function Navbar() {
  return (
    <>
      <Nav>
        <Container>
            <img src={logo} alt="Logo Breaking News" />
            <InputSpace>
                <img src={search} alt="" />
                <input type="text" 
                placeholder='Pesquise por um título'
                />
            </InputSpace>
            <Button>Entrar</Button>   
        </Container>
            
      </Nav>
    </>
  );
}


