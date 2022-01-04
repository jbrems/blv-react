import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './demo/Demo';
import CacheControl from './cache-control/CacheControl';

export default function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="cache" element={<CacheControl />} />
    </Routes>
  </BrowserRouter>;
}