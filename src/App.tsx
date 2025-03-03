import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Japan", "Madrid", "Tokyo", "New Zealand"];
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={() => console.log("Clicked")}
      ></ListGroup>
    </div>
  );
}

export default App;
