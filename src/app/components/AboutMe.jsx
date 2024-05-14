import { SocialLinks } from "./SocialLinks";
export const AboutMe = () => {
  return (
    <section id="About" className="w-full flex bg-[#f8f9ff] py-[80px]">
      <div className="flex w-full flex-col md:flex-row  max-w-[1280px] m-auto gap-4">
        <div className="md:w-1/2 w-full px-4">
          <h3 className="text-main text-xl font-bold mb-3">ABOUT ME</h3>
          <h4 className="text-secondary mb-5 text-5xl font-bold">
            Better design, better experience
          </h4>
          <p className="text-gray text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            similique adipisci dolorem tempore labore quos numquam porro eius
            illo? Iusto, inventore pariatur hic sit odio tempora ducimus dolor
            cupiditate ea.
          </p>
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h4 className="text-secondary text-3xl font-semibold mb-6">
            Connect With Me
          </h4>
          <p className="text-gray text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            facilis facere quas magni reprehenderit excepturi assumenda commodi,
            nisi, delectus mollitia nam, ut numquam distinctio. Porro natus
            nulla quidem minima velit! Beatae rerum quasi, neque laborum esse
            omnis
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
