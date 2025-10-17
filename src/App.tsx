// src/App.tsx
import React from "react";
import "./App.css";
import ResponsiveLayout from "./components/ResponsiveLayout";

const App: React.FC = () => {
  return (
    <div className="App" style={{ background: '#d3d3d3' }}>
      <ResponsiveLayout />
    </div>
  );
};

export default App;
