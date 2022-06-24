import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <NavLink to={"/Cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Itarlian</h4>
      </NavLink>
      <NavLink to={"/Cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/Cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/Cuisine/Japanesse"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 5px;
`;

export default Category;
