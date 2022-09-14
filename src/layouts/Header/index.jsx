import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/*▼ Header ▼*/}
      <header className="c-header l-container">
        <h1 className="c-header__logo">
          <Link to="/">
            <img src="assets/img/logo-1.png" alt="Logo" />
          </Link>
        </h1>
        <nav className="c-gnav">
          <ul>
            <li className="c-gnav--active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/link1">Link1</Link>
            </li>
            <li>
              <Link to="/link2">Link2</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/*▲ Header ▲*/}
    </>
  );
}

export default Header;
