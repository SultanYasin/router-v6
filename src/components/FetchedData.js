import React from "react";
import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";

export const dataLoader = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dog = await response.json();
    const imageSrc = dog.url;
    console.log(imageSrc)
  return  dog.url;
};

export function FetchedData() {
  const imageSrc = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <h2> Loading .. </h2>;
  return (
    <div>
      <p> here data suppose to render </p>
      <img src={imageSrc} alt="sdf" style={{maxWidth : "500px", maxHeight:"500px"}} /  >
    </div>
  );
}
