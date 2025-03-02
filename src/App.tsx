import { useState } from "react";
import Alert from "./components/Alert";
import CustomButton from "./components/CustomButton";
// App.tsx
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [clicked, toggleAlert] = useState(false);

  return (
    <div>
      {clicked && (
        <Alert clicked={() => toggleAlert(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <CustomButton color="primary" onButtonClick={() => toggleAlert(true)}>
        Click Me
      </CustomButton>
    </div>
  );
}

export default App;
