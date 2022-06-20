import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();
      setPopular(data.recipes);
      console.log(data.recipe);
    } catch (error) {}
  };
  return (
    <div>
      <Wrapper>
        <h3>{Popular}</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular?.map((recipes) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt="recipes images" />
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
    flexbasis: 1;
    left:0;
    object-fit:cover
    position:absolute

  }
  p{
    position:absolute;
    z-index:10;
    bottom:0%;
    transform:translate(-50%,0%);
    width:100%;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items :center;

  }
`;

export default Popular;
