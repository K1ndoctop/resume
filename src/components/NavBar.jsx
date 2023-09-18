import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "домой",
      link:"/home"
    },
    {
      id: 2,
      title: "обо мне",
      link:'/about'
    },
    {
      id: 3,
      title: "портфолио",
      link:"/portfolio"
    },
    {
      id: 4,
      title: "опыт",
      link:"/experience"
    },
    {
      id: 5,
      title: "контакт",
      link:'/contact'
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">K1ndoctop</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link ,title }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-00"
          >
            <Link to={link} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500
            md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link ,title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
               <Link onClick={() =>setNav (!nav)} to={link} smooth duration={500}>
              {title}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
