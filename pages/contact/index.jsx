import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-full bg-primary/30">
      <div className="container flex min-h-full items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-28 md:py-32 xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial={false}
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.25)}
            initial={false}
            animate="show"
            exit="hidden"
            className="text-center mb-8 text-sm sm:text-base"
          >
            <a
              href="mailto:bhavyawade2@gmail.com"
              className="text-white/80 hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              bhavyawade2@gmail.com
            </a>
            <span className="text-white/40 mx-2 hidden sm:inline">·</span>
            <br className="sm:hidden" />
            <span className="text-white/70">779880904</span>
            <span className="text-white/40 mx-2">·</span>
            Palghar, Maharashtra, India
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial={false}
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn group mx-auto flex w-full max-w-none items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent sm:max-w-[200px] md:max-w-[220px] xl:mx-0"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
