import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <>
      
      <div>
        <Home />
      </div>
      <div className=" bg-slate-900 sticky top-0">
        <Nav />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Contact/>
      </div>
    </>
  );
};

export default App;
