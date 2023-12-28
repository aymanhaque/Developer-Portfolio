import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className=" bg-slate-900 sticky top-0">
        <Nav />
      </div>
      <div>
        <Home />
      </div>
      
      <div>
        <About />
      </div>
      <div>
        <Projects/>
      </div>
    </>
  );
};

export default App;
