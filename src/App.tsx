import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {


  
  return (

    <div className="dark:text-white  dark:bg-gradient-to-r dark:from-black dark:to-slate-700 transition-all"> 
      <div>
        <Home  />
      </div>
      <div className=" bg-slate-900 sticky top-0 dark:bg-blue-950">
        <Nav/>
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
}

export default App;
