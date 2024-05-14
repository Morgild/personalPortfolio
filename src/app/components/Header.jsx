"use client";
import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { BurgerMenu } from "./BurgerMenu";
import { Drawer } from "./Drawer";
import { FaCodepen } from "react-icons/fa";
import { useState } from "react";

const menuItems = ["Home", "About", "Skills", "Works", "Pages"];
export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div
      id="Home"
      className="flex justify-between items-center  py-3 px-5 gap-6 max-w-[1280px] m-auto"
    >
      <div className="text-[30px] text-main cursor-pointer hover:rotate-180 transition duration-500">
        <FaCodepen />
      </div>
      <ul className="w-full hidden md:flex flex-row justify-end gap-8">
        {menuItems.map((item, index) => (
          <li
            onClick={() => {
              document.getElementById(`${item}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
            key={index}
            className="w-fit cursor-pointer text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <div
          onClick={() => {
            window.open("./cv.pdf");
          }}
        >
          <CustomButton text="Download CV" bgColor="main" />
        </div>
        <div onClick={() => setOpenDrawer((prev) => !prev)}>
          <BurgerMenu />
        </div>
        {openDrawer && (
          <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        )}
      </div>
    </div>
  );
};
