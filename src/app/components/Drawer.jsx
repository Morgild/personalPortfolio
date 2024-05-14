import { FaCode } from "react-icons/fa";
import { CustomButton } from "./CustomButton";

const menuList = ["Home", "About", "Skills", "Works"];
export const Drawer = (props) => {
  return (
    <div className={`w-screen h-full`}>
      <div
        className={`bg-white w-full h-full z-30 absolute right-0 top-0 transition-all ease-in-out`}
      >
        <div className="flex justify-between bg-white items-center p-4 border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712] ">
          <div className="cursor-pointer text-main p-4 font-bold text-2xl leading-8 ">
            <FaCode />
          </div>
          <div
            onClick={() => {
              props.setOpenDrawer(false);
            }}
            className="w-9 h-9"
          >
            <img className="cursor-pointer" src={"/icon-x.png"} />
          </div>
        </div>
        <ul className="gap-5 p-4 items-start justify-around flex flex-col bg-white border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712]">
          {menuList.map((item) => (
            <li
              key={`${item}1`}
              onClick={() => {
                props.setOpenDrawer(false);
                document.getElementById(`${item}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-base font-medium text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <a download href="/cv.pdf" className="p-4 gap-4 flex flex-col">
          <li
            className="flex justify-center text-center m-auto cursor-pointer display-block w-full text-white px-4 py-1.5 rounded-xl  items-center text-base font-medium text-[#F9FAFB
       ]"
          >
            <CustomButton text="Download CV" />
          </li>
        </a>
      </div>
    </div>
  );
};
