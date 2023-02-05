import React from 'react';
import axios from "axios";
import {
  BrowserRouter as Router, Route, Routes, Outlet
} from 'react-router-dom';

import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {

  // Store questions
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    // Get questions from API
    axios.get('http://localhost:8080/api/questions')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [questions]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="flex h-screen w-screen">
            <Navbar />
            <Sidebar questions={questions} />
            <Outlet />
          </div>
        }
        >
          <Route path=':idquestion' element={<Container/>}> </Route>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
