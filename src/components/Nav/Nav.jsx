import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Minha Loja</div>
        <ul className="nav-links">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
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
