"use client";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col py-20 justify-center items-center w-full  gap-8 bg-error"
    >
      <h3 className="text-main text-xl font-bold mb-3  m-auto">
        Contact With Me
      </h3>
      <form
        action="https://formsubmit.co/morgild@gmail.com"
        method="POST"
        className="w-full  flex flex-col items-center justify-center gap-7"
      >
        <div className="flex flex-col md:w-1/3 w-1/2  gap-2">
          <p className="font-semibold text-md">Name</p>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            placeholder="Please insert name"
            className="p-5 w-full bg-[#F7F8F8] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col md:w-1/3 w-1/2 gap-2">
          <p className="font-semibold text-md">Email</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Please insert email"
            className="p-5 w-full bg-[#F7F8F8] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col md:w-1/3 w-1/2 gap-2">
          <p className="font-semibold text-md">Message</p>
          <textarea
            type="text"
            name="message"
            placeholder="Please insert message"
            required
            className="p-5 min-h-[200px] w-full bg-[#F7F8F8] rounded-md"
          />
        </div>
        <button className="bg-main px-8 py-4 rounded-2xl" type="submit">
          <p className="text-white font-semibold">Send message</p>
        </button>
      </form>
    </section>
  );
};
