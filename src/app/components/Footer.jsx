"use client";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
const footerItems = ["Introduction", "About", "Skills", "Works"];
export const Footer = () => {
  return (
    <footer
      className="flex pt-[60px] pb-[60px] bg-main"
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-full flex-col gap-8 items-center max-w-[1280px] m-auto">
        <div className="w-full flex items-center gap-10 justify-center">
          {footerItems.map((item) => (
            <div
              onClick={() => {
                document.getElementById(`${item}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
              key={item}
              className="flex cursor-pointer"
            >
              <div className="text-center">
                <p className="font-semibold text-white text-base">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 p-1 text-white">
          <SocialLinks />
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="text-center flex gap-4">
          <p className="text-base font-normal text-white">
            © 2024 Munkh-Orgil.L
          </p>
          <p className="text-white font-normal text-base">
            Copyright reserved .
          </p>
        </div>
      </div>
    </footer>
  );
};
