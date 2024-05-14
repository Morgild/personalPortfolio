import { CustomButton } from "./CustomButton";
import { Work } from "./Work";

const works = [
  {
    title: "E-commerce Web Application",
    text: "Typescript,ReactJS, NextJS,Vercel, ExpressJS, NodeJS, MongoDB, MUI, Nodemailer, Cloudinary",
    source: "/ecommerce.png",
    path: "https://team2-omae.vercel.app/",
  },
  {
    title: "Food Delivery Web Application",
    text: "Typescript,ReactJS, NextJS,Vercel, ExpressJS, NodeJS, MongoDB, MUI, Nodemailer, JWT, Cloudinary ",
    source: "/fooddeliver.png",
    path: "https://food-delivery-teal-rho.vercel.app/",
  },
  {
    title: "Expense tracker Web Application",
    text: "Javascript,ReactJS, NextJS,Vercel, ExpressJS, NodeJS, MongoDB, Tailwind .",
    source: "/expenseTracker.png",
    path: "https://expense-tracker-9pdt.vercel.app/",
  },
  {
    title: "API MetaBlog",
    text: "Javascript, ReactJS NextJS,Vercel, ExpressJS, NodeJS, Tailwind ",
    source: "/metablog.png",
    path: "https://metablog-five.vercel.app/",
  },
];
export const Works = () => {
  return (
    <section id="Works" className="py-[120px] bg-[#f8f9ff]">
      <div className="max-w-[1280px] m-auto">
        <div className="flex flex-col gap-8">
          <h3 className="text-main text-xl font-bold mb-3  m-auto">
            RECENT WORKS
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-12 px-8">
            {works.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
