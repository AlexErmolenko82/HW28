import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";
import Button from "./components/Button";

function App() {
  const [listCount, setListCount] = useState(10);
  const handleClick = () => {
    setListCount(listCount + 10);
  };

  return (
    <div className="container">
      <h1>Image gallery</h1>
      <ImageList listCount={listCount} />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
