import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Introduction = () => {
  return (
    <section className="w-full flex md:flex-row flex-col-reverse px-5 py-[40px] max-w-[1280px] m-auto">
      <div className="flex flex-col md:w-1/2 w-full bg-orange-400 justify-center py-10">
        <h2 className="text-base font-semibold text-main">Hey There 👋 I am</h2>
        <h2 className="text-4xl font-bold text-secondary mt-1 mb-3">
          Munkh-Orgil
        </h2>
        <p className="text-xl font-medium mb-5">Web Developer</p>
        <p className="text-gray font-medium text-base mb-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          delectus at?
        </p>
        <div className="flex gap-4">
          <CustomButton text="Contact Me" bgColor="main" />
          <CustomButton text="Learn More" bgColor="secondary" />
        </div>
      </div>
      <div className="flex relative justify-center items-center md:w-1/2 w-full overflow-hidden">
        <div className="flex items-center rotate-12 justify-center overflow-hidden transition-all hover:scale-[105%]  bg-gray rounded-lg w-[255px] h-[255px]">
          <Image
            src={"/profile.jpeg"}
            style={{
              filter: "grayscale(100%)",
              borderRadius: "8px",
              rotate: "-12deg",
            }}
            height={250}
            width={250}
          />
        </div>
      </div>
    </section>
  );
};
