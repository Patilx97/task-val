import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Table from './Components/Table'
import Login from './Components/Pages/Login/Login';
import Create from './CRUD/Create';
import Update from './CRUD/Update';
import Delete from './CRUD/Delete';
import Read from './CRUD/Read';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import ScrollPage from './Components/Scrollpage/Scrollpage';
import ScrollTrigger from './Components/ScrollTriggerpage/ScrollTriggerpage';
import LoopPage from './Components/LoopPage/LoopPage';
import Section from './Components/Section/Section'
import ScrollCards from './Components/ScrollCards/ScrollCards';

const App = () => {
  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/table" element={<Table/>}/>
          <Route path="/scrollpage" element={<ScrollPage/>}/>
          <Route path="/scrollcards" element={<ScrollCards/>}/>
          <Route path="/scrolltrigger" element={<ScrollTrigger/>}/>
          <Route path="/loop" element={<LoopPage />} />
          <Route path="/section" element={<Section />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/delete/id" element={<Delete/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
