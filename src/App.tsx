import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Test() {
  return <div className="bg-blue-500">hello again</div>;
}

function About() {
  return <div className="bg-green-800">About this page</div>;
}

// TODO: figure out app structure and where to actually put the routing; App.tsx probably correct, but not like this
export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Test</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
