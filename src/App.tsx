import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Test() {
  return <div className="bg-blue-500">hello again</div>;
}

// TODO: figure out app structure and where to actually put the routing; App.tsx probably correct, but not like this
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
