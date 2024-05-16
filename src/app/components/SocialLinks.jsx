"use client";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  const router = useRouter();
  return (
    <div className="flex mt-8 gap-4 text-2xl text-orange-400">
      <i
         onClick={() => {
          window.open("https://www.instagram.com/orgil.lk/");
        }}
        className="cursor-pointer">
        <FaInstagram />
      </i>
      <i
        onClick={() => {
          window.open("https://www.linkedin.com/in/morgild/");
        }}
        className="cursor-pointer"
      >
        <FaLinkedin />
      </i>
      <i
        onClick={() => {
          window.open("https://github.com/Morgild/");
        }}
        className="cursor-pointer"
      >
        <FaGithub />
      </i>
    </div>
  );
};
