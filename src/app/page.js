import Image from "next/image";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { AboutMe } from "./components/AboutMe";

export default function Home() {
  return (
    <main className="">
    <Header/>
    <Introduction/>
    <AboutMe/>
    <AboutMe/>
    </main>
  );
}
