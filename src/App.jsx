import { useState } from "react";
import { Header } from "./components";
import { Hero } from "./components";
import { Section1, MintSection } from "./components";
import { Section2 } from "./components";
import { Footer } from "./components";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <MintSection />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
