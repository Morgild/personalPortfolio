import Image from "next/image";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-full fixed z-20 bg-[#ffffffd5]">
        <Header />
      </div>
      <Introduction />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
