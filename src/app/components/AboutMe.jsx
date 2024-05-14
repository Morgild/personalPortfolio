import { SocialLinks } from "./SocialLinks";
export const AboutMe = () => {
  return (
    <section
      id="About"
      className="w-full flex bg-[#f8f9ff] py-[80px] mt-[100px]"
    >
      <div className="flex w-full flex-col md:flex-row  max-w-[1280px] m-auto gap-4">
        <div className="md:w-1/2 w-full px-4">
          <h3 className="text-main text-xl font-bold mb-3">ABOUT ME</h3>
          <h4 className="text-secondary mb-5 text-5xl font-bold">
            Better code, better experience
          </h4>
          <p className="text-gray text-base text-justify">
            I'm Orgil, a passionate developer with a focus on the MERN (MongoDB,
            Express.js, React.js, Node.js) stack. I thrive on turning innovative
            ideas into efficient, user-friendly applications that make a
            tangible impact. In addition to my technical skills, I bring a
            positive attitude, strong work ethic, and a willingness to go the
            extra mile to deliver exceptional results. I am excited about the
            opportunity to continue growing as a fullstack developer and to
            contribute my skills and expertise to projects that make a positive
            impact on the world.
          </p>
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h4 className="text-secondary text-3xl font-semibold mb-6">
            Connect With Me
          </h4>
          <p className="text-gray text-base text-justify">
            I'm always open to new opportunities, collaboration, and networking.
            Whether you have a question about my work, want to discuss a
            potential project, or just want to connect, don't hesitate to get in
            touch. I'll do my best to respond to your message promptly. Let's
            connect and turn your ideas into reality! Feel free to reach out to
            me through any of the channels below:
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
