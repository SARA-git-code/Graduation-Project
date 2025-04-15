import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Donations from './Donations';
import AddDonation from './AddDonations';
import Profile from './Profile';
import Chat from './Chat';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';


function App() {
  return (
    <Router >
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar id="nav"/>
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/add-donation" element={<AddDonation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;