import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [set, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = objects.keys(currencyInfo)
  return (
    <div
      className="w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg=no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/4968651/pexels-photo-4968651.jpeg)`,
      }}
    >
      <h1 className="bg-red-200">Test for tailwind</h1>
    </div>
  );
}

export default App;
