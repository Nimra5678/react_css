import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5  text-lg bg-black text-white p-3 font-semibold">
        <li className="font-normal pt-2">
          <NavLink to="/Home">
            <b>NIO</b> EXCHANGE
          </NavLink>
        </li>

        <li className="pt-2">
          <NavLink
            to="/Market"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"} `
            }
          >
            Market
          </NavLink>
        </li>
        <li className="pt-2">
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-0.5 rounded-md font-semibold ">
              Feature
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-6 pt-2 text-gray-100"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-100 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </li>
        <li className="pt-2">
          <NavLink
            to="/spot"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"}`
            }
          >
            Spot
          </NavLink>
          {/* <Link to="/spot">Spot</Link> */}
        </li>
        <li className="pt-2">
          <NavLink
            to="/Nio-launch"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"}`
            }
          >
            NIO-Launch
          </NavLink>
        </li>
        <li className="me-auto pt-2">
          <NavLink
            to="/Rewards"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"}`
            }
          >
            Rewards Hub
          </NavLink>
        </li>
        <li className="pt-2">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"}`
            }
          >
            Log In
          </NavLink>
        </li>
        <li className="bg-white text-black px-5 py-2 rounded-full">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `${isActive ? "text-orange-300" : "text-grey-100"}`
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
