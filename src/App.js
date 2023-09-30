import "./App.css";
import Header from "./Components/header/header";
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Service from "./Components/service/service";
import Contact from "./Components/contact/Contact";


function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Service />
        <Contact />
      </main>
    </>
  );
}

export default App;
