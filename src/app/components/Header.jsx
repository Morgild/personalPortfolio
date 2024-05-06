import Image from "next/image";
import { CustomButton } from "./CustomButton";

const menuItems = ["Home", "About", "Services", "Pricing", "Contact", "Pages"];
export const Header = () => {
  return (
  
      <div className="flex justify-evenly items-center py-3 px-5 gap-6">
        <Image src={"/logo.svg"} width={100} height={70} alt="logo" />
        <ul className="w-full flex flex-row justify-end gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="w-fit text-secondary">
              {item}
            </li>
          ))}
        </ul>
        <div>
          <CustomButton text="Download CV" bgColor="main" />
        </div>
      </div>
  
  );
};
