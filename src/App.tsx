import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <div className="dark:text-white dark:bg-gradient-to-r from-black to-slate-900 transition-all"> 
      <div className="k">
        <Home />
      </div>
      <div className=" bg-slate-900 sticky top-0 dark:bg-blue-950">
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
      <div>
        .
      </div>
    </div>

  );
};

export default App;
