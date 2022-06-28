import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10%tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      } catch (error) {}
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegitarian Picks</h3>

        <Splide
          options={{
            perPage: 3,
            height: "15rem",
            rewind: true,
            arrows: false,
            autoplay: true,
            pagination: false,
            drag: "free",
            pauseOnHover: true,
            gap: "5rem",
          }}
        >
          {veggie?.map((recipes) => {
            return (
              <SplideSlide key={recipes.id}>
                <Card>
                  <Link to={"/recipes/" + recipes.id}>
                    <p>{recipes.title}</p>
                    <img src={recipes.image} alt="recipes images" />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 2rem;
`;

const Card = styled.div`
  minheight: 25rem;
  borderradius: 2rem;
  overflow: hidden;
  position:relative;

  img {
    border-radius: 10px;
    width: 100%;
    height:100%
    // flexbasis: 1;
    left:0;
    object-fit:cover
    position:absolute

  }
  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    width:100%;
    color:white;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items :center;

  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
`;

export default Veggie;
