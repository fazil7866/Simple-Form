import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import Respondents from './Respondents';

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen">
        <div className="space-x-4">
          <Link to="/form">
            <button className="bg-blue-500 text-white px-4 py-2 rounded ">Go to Form</button>
          </Link>
          <Link to="/respondents">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Go to Respondents</button>
          </Link>
        
        </div>
      </div>

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/respondents" element={<Respondents />} />
      </Routes>
    </Router>
  );
}

export default App;
