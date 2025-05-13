import { useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import UsestateHook from "../Hooks/UsestateHook";
import './Home.css';
import './Contact';

const Home = () => {
  const CreateAPI = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // CreateAPI()
  }, []);

  return (
    <>
      <Navbar />

      <div className="row">
        <div className="col-6">
          <UsestateHook/>
          <img className="shadow" src="Powered by Bombora.jpg"></img>
          <img className="shadow" src="file.png"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
