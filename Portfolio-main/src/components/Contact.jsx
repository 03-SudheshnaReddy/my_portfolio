import React, { useRef, useState } from "react";
//import { motion } from "framer-motion";

import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
//import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Portfolio Message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:sudheshnareddy.tr@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </div>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-visible items-center justify-center`}
      >
        <div className="flex-[1.05] bg-black-100 p-8 rounded-2xl max-w-[650px] w-full">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Who am I speaking with?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address, please?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Feel free to type your message."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="xl:flex-1 xl:h-[600px] md:h-[550px] h-[350px] min-w-[600px]">
          <EarthCanvas />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
