import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">GTBet</div>
        <ul className="nav-links">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Jogos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
