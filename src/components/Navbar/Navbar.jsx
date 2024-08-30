import logo from '../../images/LogoBN.png';
import search from '../../images/search-icon.svg';
import "../Navbar/Navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className='container'>
            <img src={logo} alt="Logo Breaking News" />
            <div className="input-search-space">
                <img src={search} alt="" />
                <input type="text" 
                placeholder='Pesquise por um título'
                />
            </div>
            <button>Entrar</button>   
        </div>
            
      </nav>
    </>
  );
}
