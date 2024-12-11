import { useMediaQuery } from "../hooks/use-media-query";
import { motion } from "motion/react";
import { Fragment, ReactElement } from "react";
import { useIsPageInView } from "../hooks/use-in-view";
import { PAGES } from "../const";

import skillsImg from "../assets/skills-image.png";
import react from "../assets/react.png";
import ts from "../assets/ts.png";
import sass from "../assets/sass.png";

export const Skills = () => {
  const ref = useIsPageInView(PAGES.skills);

  return (
    <section id={PAGES.skills} className="pt-20 pb-24">
      <div ref={ref} className="md:flex md:justify-between md:gap-16 mt-32">
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
          <p className="mt-10 mb-7">
            These are the skills I use daily in my work, especially during
            project development, to solve challenges, collaborate with my team,
            and deliver successful outcomes
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          <ImageWrapper>
            <img alt="skills" className="z-10" src={skillsImg} />
          </ImageWrapper>
        </div>
      </div>

      <div className="md:flex md:justify-between mt-24 gap-32">
        <AnimateSkill>
          <Skill
            src={react}
            title="React"
            description="Allows developers to create dynamic, fast, and scalable applications with reusable components. Its virtual DOM ensures efficient updates, making it ideal for high-performance apps. React’s extensive ecosystem, active community, and compatibility with modern tools make it a top choice for front-end development."
          />
        </AnimateSkill>

        <AnimateSkill delay={0.2}>
          <Skill
            src={ts}
            title="Typescript"
            description="Adds static typing, which enhances code quality and reduces runtime errors. It helps developers catch bugs early, improves code maintainability, and provides better tooling support with features like autocompletion and robust debugging. Ideal for large-scale applications, TypeScript ensures clearer, more reliable, and scalable code."
          />
        </AnimateSkill>

        <AnimateSkill delay={0.4}>
          <Skill
            src={sass}
            title="SASS"
            description="Simplifies writing stylesheets. It offers features like variables, nesting, mixins, and functions, making CSS more efficient and easier to maintain. Sass helps streamline workflows, reduce repetition, and create scalable, well-organized styles for complex projects."
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
  src: string;
};

const Skill = ({ title, description, src }: SkillProps) => {
  return (
    <Fragment>
      <div className="relative">
        <div className="z-10">
          <p className="font-playfair font-semibold text-3xl mt-3">{title}</p>
        </div>
        <img
          alt={title}
          className="z-[-1] absolute top-[-40px] right-[-40px] brightness-50 opacity-50 max-w-[150px] mr-4"
          src={src}
        />
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
      before:w-full before:h-full before:border-2 before:border-secondary before:z-[-1]"
    >
      {children}
    </div>
  );
};
