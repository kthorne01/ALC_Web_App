import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import HomePage from '@/pages/HomePage.jsx';
import HomePageV2 from '@/pages/HomePageV2.jsx';

const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/v2" element={<HomePageV2 />} />
      </Routes>
    </>
  );
};

export default App;
