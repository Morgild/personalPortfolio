import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { BurgerMenu } from "./BurgerMenu";
import { FaCodepen } from "react-icons/fa";

const menuItems = ["Home", "About", "Skills", "Works", "Pages"];
export const Header = () => {
  return (
    <div className="flex justify-between items-center  py-3 px-5 gap-6 max-w-[1280px] m-auto">
      <div className="text-[30px] text-main cursor-pointer hover:rotate-180 transition duration-500">
        <FaCodepen />
      </div>
      <ul className="w-full hidden md:flex flex-row justify-end gap-8">
        {menuItems.map((item, index) => (
          <li key={index} className="w-fit cursor-pointer text-secondary">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <div>
          <CustomButton text="Download CV" bgColor="main" />
        </div>
        <BurgerMenu />
      </div>
    </div>
  );
};
