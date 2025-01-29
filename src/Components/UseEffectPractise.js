import React from "react";
import { useState,useEffect } from "react";

const UseEffectPractise = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);
  
  const submit = () => {
    setCount(preCount => preCount + 1);
  };

  useEffect(() => {
     fetch(`https://swapi.dev/api/people/${count}`)
     .then(response => response.json())
     .then(data => setStarWarsData(data))
  }, [count]);

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={submit}>
        Get Star Wars Data
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default UseEffectPractise;
