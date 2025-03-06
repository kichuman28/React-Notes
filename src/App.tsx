import ListGroup from "./components/ListGroup";
import { BsCircleFill } from "react-icons/bs";
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
    </div>
  );
}

export default App;
