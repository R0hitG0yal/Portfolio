import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<number>();
  const list = [
    { id: 1, text: "Who am I?" },
    { id: 2, text: "Experience" },
    { id: 3, text: "Education" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Hire ME" },
  ];
  return (
    <div className="flex justify-between px-32 py-2 font-serif">
      <div className="text-3xl underline underline-offset-2">Rohit Goyal</div>
      <div>
        <ul className="flex items-center text-lg py-2 ">
          {list.map((element) => (
            <li
              className={active === element.id ? "underline mx-4" : "mx-4"}
              onClick={() => {
                setActive(element.id);
              }}
            >
              <a href="#intro">{element.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
