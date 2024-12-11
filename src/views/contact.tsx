import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { useIsPageInView } from "../hooks/use-in-view";
import { PAGES } from "../const";

import contact from "../assets/contact-image.jpeg";

export const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const ref = useIsPageInView(PAGES.contact);

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id={PAGES.contact} className="py-48">
      <div
        className="flex flex-col lg:flex-row items-center md:justify-between gap-16"
        ref={ref}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center"
        >
          <img src={contact} alt="contact" />
        </motion.div>
        <div className="max-w-[650px] flex flex-col justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-end w-full"
          >
            <p className="font-playfair font-semibold text-4xl my-10">
              <span className="text-yellow">CONTACT ME</span> TO GET STARTED
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/f8382673a19b2b1024bc9cd6a35af2c7"
              method="POST"
            >
              <input
                className="w-full bg-grey font-semibold text-primary placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-grey font-semibold text-primary placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-grey font-semibold text-primary placeholder-opaque-black p-3 mt-5"
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-5 bg-yellow font-semibold text-primary mt-5 hover:bg-red hover:text-white transition duration-500"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
