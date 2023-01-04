import { useState } from "react";
import AnimalShow from "./Animals";
import "./app.css";

function getAnimals() {
  const animalsData = ["bird", "cat", "dog", "gator", "cow", "horse"];

  return animalsData[Math.floor(Math.random() * animalsData.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  // in react state is a veriable use for any data which can be change over time.

  const handleClick = () => {
    setAnimals([...animals, getAnimals()]);
  };

  // making a list always make use of MAP method whis give a jxs set of arr,
  // in react arr curly bracket representation on screen [1,2,3] ==> 123
  // if every data having block element in arr accure hole sapce horihontally, next element appere next line;
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animals</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
