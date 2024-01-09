// import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// ref={ref}
// forwardRef((props,ref)
export const Home = () => {
  return (
    <div className="flex justify-center text-center items-center h-screen">
      <div className="w-3/4">
        <h1 className="text-7xl my-6">
          Hello I'm <span className="text-blue-600">Muhd Haque</span>. I'm a
          Computer Science Student
        </h1>
        <a href="https://www.linkedin.com/in/muhd-haque-prof/" target="_blank">
          <button>
            <FontAwesomeIcon
              className="h-12"
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#2675fd" }}
            />
          </button>
        </a>
        <a href="https://github.com/aymanhaque" target="_blank">
          <button>
            <FontAwesomeIcon
              className="h-12 mx-10"
              icon={faGithub}
              size="2xl"
            />
          </button>
        </a>
        <a href="https://www.instagram.com/ayman__haque_/" target="_blank">
          <button className="">
            <FontAwesomeIcon
              className="h-12 bg-slate-600 bg-clip-text"
              icon={faInstagram}
              size="2xl"
              // style={{ color: "#2675fd" }}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
