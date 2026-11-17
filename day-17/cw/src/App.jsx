import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import hero from "./assets/hero.png"

const App = () => {
  const [num, setNum] = useState(0)

  return (
    <>
      <Header name="Julfikar" city="Demra" />
      <Header name="Afjal" city="Demra" />
      <div className="flex gap-4 items-center w-max border p-4 rounded">
        <button className="border p-3 cursor-pointer" onClick={() => setNum(num + 1)} >+</button>
        {num}
        <button className="border p-3 cursor-pointer" onClick={() => setNum(num - 1)} >-</button>
      </div>
      <img src={hero} alt="" />
      <Footer>
        <h1>This is footer heading</h1>
        <p>This is footer paragraph</p>
      </Footer>
    </>
  );
};

export default App;