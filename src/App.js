import Pages from "./Pages/Pages";
import Category from "./componets/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./componets/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciouss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decorstion: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "lobster", cursive;
`;
const Nav = styled.div`
  padding: rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-item: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
