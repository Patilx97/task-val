import { useState } from "react";
import React from "react";

const UsestateHook = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("Hello");

  const ChangeText = () => {
    let val = text;
    if (val === "Hello") {
      setText("Hiii");
    } else {
      setText("Hello");
    }
  };
  // Const []

  const PersonalDetails = [
    { id: 0, Name: "Nandini", Age: 25 },
    { id: 1, Name: "Rajashree", Age: 23 },
    { id: 2, Name: "Rupali", Age: 24 },
    { id: 3, Name: "Shubham", Age: 27 },
    { id: 4, Name: "Nitin", Age: 28 },
  ];
  console.log(PersonalDetails);

  const [array, setArray] = useState(PersonalDetails);

  const clearData = () => {
    setArray([]);
  };

  return (
    <>
      {/* ----useState hook---*/}
      <div className="row mx-4">
        <div className="col-12">
          <h1 className="my-2">UseState hook</h1>
          <button disabled={num <= 0} onClick={() => setNum(num - 1)}>
            {" "}
            -{" "}
          </button>
          <span className="mx-3">{num}</span>
          <button onClick={() => setNum(num + 1)}> + </button>
        </div>
      </div>
      {/* ----useState hook toggle---*/}
      <div className="row my-5 mx-4">
        <div className="col-12">
          <h1 className="my-2">UseState hook toggle</h1>
          <p className="mx-3">{text}</p>
          <button onClick={ChangeText}>Please Click Me</button>
        </div>
      </div>
      {/* ----useState hook array---*/}
      <div className="row my-5 mx-4">
        <div className="col-12">
          <h1 className="my-2">UseState hook array</h1>
          {array.map((item) => (
            <h3 key={item.id}>
              Name : {item.Name} and Age : {item.Age}
            </h3>
          ))}
          <button onClick={clearData}>clear</button>
        </div>
      </div>
    </>
  );
};

export default UsestateHook;
