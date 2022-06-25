import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipes() {
  const params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}`
    );
  };

  return <div>Recipes</div>;
}

export default Recipes;
