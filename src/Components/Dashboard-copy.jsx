import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Container,Spinner} from "react-bootstrap";
import axios from "axios";
import CustomSidebar from "./CustomSidebar/CustomSidebar ";
import BarChart from "./BarChart/BarChart";
import MainLayout from "./Layout/MainLayout";

const Dashboard = () => {
  const [loading, isLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };


  useEffect(() => {
    setTimeout(()=>{
      isLoading(false)
    },3000)

  
 
  }, [])
  
  useEffect(() => {
    axios.get("http://localhost:5000/cards")
      .then(res => setCards(res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <>
      <MainLayout>
    <div className="container mt-5">
    
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
   
      <Container>
      {loading?
      
      <>

      <Row  className="d-flex justify-content-center">
      <Spinner animation="grow" className="mx-2" variant="primary" />
      <Spinner animation="grow" className="mx-2" variant="secondary" />
      <Spinner animation="grow" className="mx-2" variant="success" />
      <Spinner animation="grow" className="mx-2" variant="danger" />
      <Spinner animation="grow" className="mx-2" variant="warning" />
      <Spinner animation="grow" className="mx-2" variant="info" />
      <Spinner animation="grow" className="mx-2" variant="light" />
      <Spinner animation="grow" className="mx-2" variant="dark" /> 
      <p className="text-center my-3">Wait for a while! Your Data is Loading...</p>
      </Row> 
      </>
      :
      <>
      <Row>
        {cards?.map((card) => (
          <Col md={6} lg={4} key={card.id} className="my-2 px-1">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{card?.title}</Card.Title>
                <Card.Text>{card?.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
        <Row>
          <Col>
          <BarChart />
          </Col>
        </Row>
      </>
      
    }
      
        </Container>

      {/* <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button> */}
    </div>
    </MainLayout>
    </>
  );
};

export default Dashboard;
