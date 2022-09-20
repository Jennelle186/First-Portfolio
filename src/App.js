import React from "react";

import "./App.css";
import { Container } from "@mui/system";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skill/Skills";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
