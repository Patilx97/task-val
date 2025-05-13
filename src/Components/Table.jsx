import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import axios from 'axios'; // Import axios for API requests
import Navbar from './Navbar/Navbar';
import LinearProgressWithLabel from './Progress/Progress';
import { LinearProgress } from '@mui/material';

const Table = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuerry, setsearchQuerry] = useState('');
    const [loading, setLoading] = useState(false); // For handling loading state
    const [error, setError] = useState(null); // For handling errors

    const itemsPerPage = 3; // Number of items per page

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://reqres.in/api/users/");
            const json = await res.json();
            setData(json?.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(item =>
        item.first_name.toLowerCase().includes(searchQuerry.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchQuerry.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuerry.toLowerCase())
    );

    // Calculate the start and end index for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handle delete request
    const handleDelete = async (id) => {
        try {
            setLoading(true);
            // Send DELETE request
            await axios.delete(`https://reqres.in/api/users/${id}`);
            
            // Remove the deleted item from the local state
            setData(prevData => prevData.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Failed to delete item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Dummy handleSubmit for Modal component
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', e);
    };

    return (
        <>
        <Navbar/>
        <LinearProgress/>
        {/* <LinearProgressWithLabel value={loading}/> */}
            {error && <div className="alert alert-danger">{error}</div>}
            <input
                className="m-3"
                type='text'
                placeholder='Search'
                value={searchQuerry}
                onChange={(e) => setsearchQuerry(e.target.value)}
            />
            <Modal onSubmit={handleSubmit} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map((val, index) => (
                            <tr key={val.id}>
                                <th scope="row">{indexOfFirstItem + index + 1}</th>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td>{val.email}</td>
                                <td><img src={val.avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} /></td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(val.id)}
                                        disabled={loading}
                                    >
                                        {loading ? 'Deleting...' : 'Delete'}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            <style jsx>{`
                .pagination {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }
                .pagination button {
                    margin: 0 5px;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    background-color: #fff;
                    cursor: pointer;
                }
                .pagination button.active {
                    background-color: #007bff;
                    color: #fff;
                }
                .pagination button:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            `}</style>
        </>
    );
};

export default Table;

