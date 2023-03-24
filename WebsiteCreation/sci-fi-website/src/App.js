import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FeatureImage from "./components/FeatureImage";
import ContentPage from "./components/ContentPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <FeatureImage />
      <ContentPage />
    </div>
  );
}

export default App;
