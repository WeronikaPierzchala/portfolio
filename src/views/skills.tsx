import { LineGradient } from "../components";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Fragment, ReactElement } from "react";
import skillsImg from "../assets/skills-image.png";

export const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <ImageWrapper>
            <img alt="skills" className="z-10" src={skillsImg} />
          </ImageWrapper>
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <AnimateSkill>
          <Skill
            title="Asdasdasd"
            description="  Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a"
          />
        </AnimateSkill>

        <AnimateSkill delay={0.2}>
          <Skill
            title="Asdasdasd"
            description="  Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a"
          />
        </AnimateSkill>

        <AnimateSkill delay={0.4}>
          <Skill
            title="Asdasdasd"
            description="  Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a"
          />
        </AnimateSkill>
      </div>
    </section>
  );
};

type AnimateSkillProps = {
  delay?: number;
  children: ReactElement;
};

const AnimateSkill = ({ delay = 0, children }: AnimateSkillProps) => {
  return (
    <motion.div
      className="md:w-1/3 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

type SkillProps = {
  title: string;
  description: string;
};

const Skill = ({ title, description }: SkillProps) => {
  return (
    <Fragment>
      <div className="relative h-32">
        <div className="z-10">
          <p className="font-playfair font-semibold text-3xl mt-3">{title}</p>
        </div>
        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
      </div>
      <p className="mt-5 pt-4">{description}</p>
    </Fragment>
  );
};

const ImageWrapper = ({ children }: { children: ReactElement }) => {
  const isSmallScreen = useMediaQuery("md");

  if (isSmallScreen) return children;

  return (
    <div
      className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
      before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
    >
      {children}
    </div>
  );
};
