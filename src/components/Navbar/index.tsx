import React from "react";
import { LogoIcon, OpinonSuggestionIcon } from "@/components/icons";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { menuItems, menuSubItems } from "./navbarItems";

const Navbar = () => {
  return (
    <nav className="bg-white flex flex-col items-center gap-2 px-2">
      <ul className="flex flex-col mt-10">
        <li>
          <NavLink to={`/`}>
            <LogoIcon />
          </NavLink>
        </li>
      </ul>
      {getMenuItems(menuItems)}
      {getMenuItems(menuSubItems)}
      <ul className="flex flex-col pb-4 mt-12">
        <li>
          <OpinonSuggestionIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

type MenuItems = {
  icon: React.ReactNode;
  link: string;
  active: boolean;
}[];

const getMenuItems = (menuItems: MenuItems): React.ReactNode => {
  const menu = menuItems.map((menuItem, index) => (
    <li
      key={index}
      className={clsx({
        "bg-[#F3F7F9] p-3 rounded-lg": menuItem.active,
      })}
    >
      <Link to={menuItem.link}>{menuItem.icon}</Link>
    </li>
  ));
  return <ul className="flex flex-col items-center gap-2.5 mt-12">{menu}</ul>;
};
