import React from "react";
import ReactDOM from 'react-dom/client';
import Homepage from "./pages/homepage/homepage";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Homepage/>
  </React.StrictMode>
);