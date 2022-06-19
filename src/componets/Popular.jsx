import { useEffect, useState } from "react";
import styled from "styled-components";

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
      {popular.map((recipes) => {
        return (
          <Wrapper>
            <h3>{Popular}</h3>
            {popular.map((recipes) => {
              return (
                <Card>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt="recipes images" />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 8px;
`;

export default Popular;
