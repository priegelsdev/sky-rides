import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO: figure out app structure and where to actually put the routing; App.tsx probably correct, but not like this
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <div className="bg-red-500">hi</div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
