"use client";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  const router = useRouter();
  return (
    <div className="flex mt-8 gap-4 text-2xl text-orange-400">
      <i className="cursor-pointer">
        <FaInstagram />
      </i>
      <i
        onClick={() => {
          window.open("https://www.linkedin.com/in/orgil-lkhagvajav/");
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
