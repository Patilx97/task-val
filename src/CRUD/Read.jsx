import axios from "axios";
import React, { useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response, "res");
      setData(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-8">
            <table className="table caption-top">
              <caption className="text-center fs-2">List of users</caption>
              <thead>
                <tr>
                  <th scope="col">SR No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={user.id}> 
                    <th scope="row">{index + 1}</th>
                    <td>{user.Name}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
