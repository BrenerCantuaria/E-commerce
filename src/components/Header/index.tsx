import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled  from "styled-components";
export default function Header() {
  const Header = styled.header`
    display: flex;
    width: 24.375rem;
    background: #F2F0F1;
  `;

  const Nav = styled.li`
      display: flex;
     align-items: center;
  `

  return (
    <Header>
      <Nav>
        <div>
          <ul>
            <li>
              <Link to="/">Página incial</Link>
            </li>
            <li>
              <Link to="Produtos">Produtos</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="Cart">
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <div>
          <input type="search" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/Profile">
                <CgProfile />
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Header>
  );
}
