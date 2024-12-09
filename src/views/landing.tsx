import { PageType } from "../const";
import { useMediaQuery } from "src/hooks";
import { motion } from "framer-motion";
import { SocialMediaIcons } from "../components/social-media";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/profile-image.png";

type LandingProps = {
  setSelectedPage: (page: PageType) => void;
};

export const Landing = ({ setSelectedPage }: LandingProps) => {
  const isTablet = useMediaQuery("md");
  const borderStyles = `relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
          before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full 
          before:border-2 before:border-blue before:z-[-1] before:md:max-w-[600px]`;

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 flex-row-reverse"
    >
      <div className="flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        <div className={`${isTablet ? "" : borderStyles}`}>
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
               max-w-[400px] md:max-w-[600px]"
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
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Jane {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
            before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Esper
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
            className="bg-gradient-rainbow-blue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow-blue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center font-playfair px-10">
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
