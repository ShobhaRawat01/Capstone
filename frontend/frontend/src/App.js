import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Contactus from './components/Contactus/Contactus';
import CreditCardData from './components/Dashboard/CreditCardData';
import TransactionsTable from './components/Dashboard/TransactionsTable';
import Manageyourcard from './components/pages/Manageyourcard';
import Rewards from './components/pages/Rewards';
import Security from './components/pages/Security';
import TravelNotes from './components/Travel/TravelNotes';
import CurrencyConverter from './components/Converter/script';
import Errorfallback from './components/Errorfallback'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ErrorBoundary FallbackComponent={Errorfallback} onReset={() => { }}>
          <Suspense fallback={<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Contactus' element={<Contactus />} />
              <Route path="/dashboard" element={<CreditCardData />} />
              <Route path="/transaction" element={<TransactionsTable />} />
              <Route path="/manageyourcard" element={<Manageyourcard />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/security" element={<Security />} />
              <Route path="/TravelNotes" element={<TravelNotes />} />
              <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
export default App;