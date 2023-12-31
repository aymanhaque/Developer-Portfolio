import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="">
      <div className="h-10vh flex text-white px-20 py-2 items-center justify-center">
          {/* <h1 className="text-left">sdf</h1> */}
        <div className=" flex items-center justify-center font-normal">
          <ul className="flex gap-8 text-{18px}">
            <button>
              <li className="dark:text-white">
                <FontAwesomeIcon
                  icon={faHouse}
                  size="xl"
                  className="hover:text-4xl"
                />
                <p className="hover:visible">House</p>
              </li>
            </button>
            <button>
              <li className="mx-4">
                <FontAwesomeIcon
                  icon={faListCheck}
                  size="xl"
                  className="hover:text-4xl"
                />
                <p className=" hover:visible">Projects</p>
              </li>
            </button>
            <button>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  size="xl"
                  className="hover:text-4xl"
                />
              </li>
              <p className=" hover:visible">Contact</p>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
