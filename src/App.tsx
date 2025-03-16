import ListGroup from "./components/ListGroup";
import { BsCircleFill } from "react-icons/bs";
import Button from "./components/Button/Button";
import LikeButton from "./components/LikeButton/LikeButton";
import { useState } from "react";
function App() {
  const items = ["Japan", "Madrid", "Tokyo", "New Zealand"];
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("Clicked")}
      ></ListGroup>
      <BsCircleFill/>


      <LikeButton onClick={() => console.log("Clicked")}></LikeButton>


      <Button text="My Button" color="primary" />
    </div>
  );
}

export default App;
