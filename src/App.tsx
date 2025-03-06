import ListGroup from "./components/ListGroup";
import { BsCircleFill } from "react-icons/bs";
import Button from "./components/ListGroup/Button";
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
      <Button text="My Button" />
    </div>
  );
}

export default App;
