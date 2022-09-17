import React from "react";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => setTemperature(temperature + 1);
  const decreaseTemperature = () => setTemperature(temperature - 1);

  return (
    <div className="grid h-screen place-items-center">
      <container className="rounded-xl bg-slate-800 w-64 h-96 grid h-screen place-items-center">
        <div
          className={
            temperature > 34
              ? "bg-red-500 text-white h-48 w-48 rounded-full grid h-screen place-items-center text-7xl border-solid border-4 border-white"
              : temperature > 15
              ? "bg-orange-500 text-white h-48 w-48 rounded-full grid h-screen place-items-center text-7xl border-solid border-4 border-white"
              : "bg-blue-500 text-white h-48 w-48 rounded-full grid h-screen place-items-center text-7xl border-solid border-4 border-white"
          }
        >
          {temperature}
        </div>
        <containner className="flex space-x-5">
          <button
            className="bg-blue-500 text-white h-16 w-16 rounded-full border-solid border-2 border-white"
            onClick={increaseTemperature}
          >
            +
          </button>
          <button
            className="bg-blue-500 text-white h-16 w-16 rounded-full border-solid border-2 border-white"
            onClick={decreaseTemperature}
          >
            -
          </button>
        </containner>
      </container>
    </div>
  );
}

export default App;
