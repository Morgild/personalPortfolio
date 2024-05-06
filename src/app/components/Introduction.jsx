import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Introduction = () => {
  return (
    <section className="w-full flex md:flex-row flex-col px-5">
      <div className="flex flex-col md:w-1/2 w-full bg-orange-400 justify-center py-10">
        <h2 className="text-base font-semibold text-main">Hey There 👋 I am</h2>
        <h2 className="text-4xl font-bold text-secondary mt-1 mb-3">
          Daniel Jack
        </h2>
        <p className="text-xl font-medium mb-5">Professional Developer</p>
        <p className="text-gray font-medium text-base mb-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          delectus at?
        </p>
        <div className="flex gap-4">
          <CustomButton text="Contact Me" bgColor="main" />
          <CustomButton text="Learn More" bgColor="secondary" />
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 w-full relative overflow-hidden">
        <div className="justify-self-center">
          <Image src={"/hero-image.png"} height={490} width={491} />
        </div>
        <figure className="w-[800px] h-[800px] rounded-full bg-main absolute z-[-10] top-[5%] left-[0]"></figure>
      </div>
    </section>
  );
};
