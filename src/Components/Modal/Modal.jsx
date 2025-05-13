import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS
import Table from '../Table';

const App = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false); // For handling loading state
  const [error, setError] = useState(null); // For handling errors

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Post data to API
      const response = await axios.post('https://reqres.in/api/users/', formData);
      console.log('API response:', response.data);

      // Add new data to the table if the API request is successful
      setTableData([...tableData, formData]);

      // Clear form data
      setFormData({
        first_name: "",
        last_name: "",
        email: ""
      });

      // Hide the modal
      // const modalElement = document.getElementById('exampleModal');
      // const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      // if (modalInstance) {
      //   modalInstance.hide();
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <>
      <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  placeholder="First Name"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Last Name"
                  required
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
            </div>
            <div className="modal-footer border d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Table/> */}
    </>
  );
};

export default App;
