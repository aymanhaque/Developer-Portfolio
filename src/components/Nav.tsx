import { GoHomeFill} from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

const Nav = () => {
  return (
    <nav>
      <div className="h-10vh flex justify-center text-white px-20 py-4">
        <div className=" flex items-center justify-center font-normal">
            <ul className="flex gap-8 mr-16 text-{18px}">
              <button>
                <li ><GoHomeFill/></li>
              </button>
              <button>
                <li><GrProjects/></li>
              </button>
              <button>
                <li><IoMdContact /></li>
              </button>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
