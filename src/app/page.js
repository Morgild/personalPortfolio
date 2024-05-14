import Image from "next/image";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Works />
    </main>
  );
}
