import { PAGES } from "../const";
import { useMediaQuery, usePageContext } from "src/hooks";
import { motion } from "motion/react";
import { SocialMediaIcons } from "../components/social-media";
import { useIsPageInView } from "../hooks/use-in-view";

import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/pic.png";

export const Landing = () => {
  const { setSelectedPage } = usePageContext();
  const ref = useIsPageInView(PAGES.home);
  const isTablet = useMediaQuery("md");

  const borderStyles = `relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
          before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full 
          before:border-2 before:border-secondary before:z-[-1] before:md:max-w-[500px]`;

  const gotToContactPage = () => setSelectedPage(PAGES.contact);

  return (
    <section
      id={PAGES.home}
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 flex-row-reverse"
    >
      <div className="flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        <div className={`${isTablet ? "" : borderStyles}`}>
          <img
            alt="profile"
            className="hover:filter hover:saturate-[1.25] transition duration-500 z-10 w-full
               max-w-[400px] md:max-w-[500px]"
            src={profile}
          />
        </div>
      </div>
      <div className="basis-2/5 mt-12 md:mt-32 z-30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            ref={ref}
            className="text-6xl font-playfair z-10 text-center md:text-start"
          >
            Weronika <span className="text-red">Pierzchała</span>
          </p>
          <p className="mt-10 mb-7 text-base text-center md:text-start">
            I am a Frontend Developer with 3 years of experience in building
            dynamic and scalable applications using React, TypeScript, Redux,
            and other modern web technologies. I enjoy solving challenging
            problems and delivering clean, efficient, and maintainable code.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-white text-primary rounded-l-sm py-3 px-7 font-semibold hover:bg-yellow hover:text-white transition duration-500 whitespace-nowrap"
            onClick={gotToContactPage}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-white py-0.5 pr-0.5"
            onClick={gotToContactPage}
            href="#contact"
          >
            <div className="bg-primary hover:text-yellow transition duration-500 w-full h-full flex items-center font-playfair px-10 whitespace-nowrap">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
