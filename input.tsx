import { Hero } from "./components/Hero";
import { Featured } from "./components/Featured";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Philosophy } from "./components/Philosophy";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Featured />
      <About />
      <Services />
      <Philosophy />
      <Contact />
    </div>
  );
}
