import { useEffect, useState } from "react";
import styled from "styled-components";
import { SplideSlide, splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
      console.log(data.recipes);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>{Popular}</h3>
        <splide>
          {popular.map((recipes) => {
            return (
              <splideSlide>
                <Card>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt="recipes images" />
                </Card>
              </splideSlide>
            );
          })}
        </splide>
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

  img {
    border-radius: 8px;
  }
`;

export default Popular;
