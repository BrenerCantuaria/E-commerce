import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiListBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../Input";

export default function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const [OpenModal, setOPenModal] = useState(false);
  const Header = styled.header`
    display: flex;
    width: 100%;
    height: 3rem;
    background: #f2f0f1;
  `;

  const Nav = styled.nav`
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      display: block;
    }
    li {
      margin: 0 10px; /* Espaçamento entre elementos <li> */
    }
  `;
  
  const Modal = styled.div`
    height: 5rem;
    width: 80%;
    background-color: aqua;
    border-radius: 5px;
    position: absolute;
    z-index: 1000;
  `;
  const DivModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(10px);
  `;
  const AsideMenu = styled.aside`
    display: ${isOpen ? "block" : "none"};
    background-color: gray;
    height: 100%;
    width: 180px;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
  `;
  const Button = styled.button`
    border: none;
    padding: 0;
    background-color: transparent;
  `;
  const BackgroundBlur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
    backdrop-filter: blur(5px); /* Aplica o efeito de desfoque */
    z-index: 1; /* Coloque o elemento de fundo acima dos outros elementos */
    display: ${isOpen || OpenModal
      ? "block"
      : "none"}; /* Só mostra quando o modal está aberto */
  `;

  return (
    <>
      <Header>
        <Nav>
          {isOpen ? (
            <AsideMenu>
              <Button onClick={() => SetIsOpen(false)}>
                <AiOutlineClose size={30} />
              </Button>
              <ul>
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>
                  <Link to="Produtos">Produtos</Link>
                </li>
              </ul>
            </AsideMenu>
          ) : (
            <Button onClick={() => SetIsOpen(!false)}>
              <PiListBold size={34} />
            </Button>
          )}
          <div>
            {window.innerWidth < 756 ? (
              <div>
                {OpenModal ? (
                  <Modal>
                    <DivModal>
                      <Input
                        type={"search"}
                        nome={"query"}
                        id={"q"}
                        placeholder={"Digite o nome do produto"}
                      />
                      <Button>
                        <AiOutlineSearch size={35} />
                      </Button>
                    </DivModal>
                  </Modal>
                ) : (
                  <Button onClick={() => setOPenModal(!false)}>
                    <AiOutlineSearch size={35} />
                  </Button>
                )}
              </div>
            ) : (
              <Input type={"search"} nome={"query"} id={"q"} />
            )}
          </div>
          <div>
            <Link to="Cart">
              <AiOutlineShoppingCart size={33} />
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/Profile">
                  <CgProfile size={33} />
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
        <BackgroundBlur
          onClick={() => {
            SetIsOpen(false);
            setOPenModal(false);
          }}
        />
      </Header>
    </>
  );
}
