"use client";
import Image from "next/image";

export const Work = (props) => {
  const { title, source, text, path } = props;
  return (
    <div className="w-full flex flex-col gap-8 ">
      <div
        onClick={() => {
          window.open(path);
        }}
        className="relative w-full hover:scale-[98%] flex justify-start aspect-video overflow-scroll cursor-pointer rounded-md"
      >
        <Image src={source} fill alt="work" />
      </div>
      <h3
        onClick={() => {
          window.open(path);
        }}
        className="text-xl text-secondary font-semibold hover:text-main cursor-pointer"
      >
        {title}
      </h3>
      <p className="text-lg text-gray font-medium">{text}</p>
    </div>
  );
};
