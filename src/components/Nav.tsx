import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="sticky top-0">
      <div className="h-10vh flex justify-center text-white px-20 py-4 ">
        <div className=" flex items-center justify-center font-normal">
          <ul className="flex gap-8 mr-16 text-{18px}">
            <button >
              <li className="dark:text-white">
                <FontAwesomeIcon icon={faHouse} size="xl" className="hover:text-4xl" />
              </li>
            </button>
            <button>
              <li className="mx-4">
                <FontAwesomeIcon icon={faListCheck} size="xl" className="hover:text-4xl" />
              </li>
            </button>
            <button>
              <li>
                <FontAwesomeIcon icon={faUser} size="xl" className="hover:text-4xl"/>
              </li>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
