import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
// import Protected from './Pages/Protected';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import Newloan from './Pages/newLoan';
import LoanList from './Pages/loanList';
import Loan from './Pages/Loan'; // import the Loan component
import UserHome from './Pages/userHome';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/newloan" element={<Newloan />} />
                <Route path="/loanlist" element={<LoanList />} />
                <Route path="/loan/:id" element={<Loan />} />
                <Route path="/home" element={<UserHome />} />
            </Routes>
        </React.StrictMode>
    </Router>
);

reportWebVitals();
