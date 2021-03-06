import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/"}>
        <FaHome />
        <h4>Home</h4>
      </SLink>
      <SLink to={"/Cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Itarlian</h4>
      </SLink>
      <SLink to={"/Cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/Cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/Cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 5px;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: center;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
