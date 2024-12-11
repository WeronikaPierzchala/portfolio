import { motion } from "motion/react";
import { useIsPageInView } from "../hooks/use-in-view";
import { PAGES } from "../const";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Projects = () => {
  const ref = useIsPageInView(PAGES.projects);

  return (
    <section id={PAGES.projects} className="pt-48 pb-48">
      <div ref={ref}>
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>

          <p className="mt-10 mb-10">I was a part of</p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="sm:grid md:grid-cols-2 lg:grid-cols-3 w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Project
              title="Braintrust"
              description="Braintrust is a user-owned talent network that connects skilled freelancers with top companies. It operates on a decentralized model, allowing professionals to retain more of their earnings while clients access high-quality talent at competitive rates. Built on blockchain technology, Braintrust ensures transparency, fairness, and a more efficient way to match talent with opportunities."
              bgColor="bg-red"
              link="https://www.usebraintrust.com/"
            />
            <Project
              title="Braintrust Dashboard"
              description="The Braintrust Network Dashboard provides an overview of key metrics and activities within the Braintrust ecosystem. It includes data on active talent, job postings, client engagement, network growth, and transaction statistics. Users can track their contributions, earnings, and overall performance, gaining insights into the network's health and opportunities for collaboration."
              bgColor="bg-white"
              color="text-primary"
              link="https://info.app.usebraintrust.com/"
            />
            <Project
              title="Other"
              description="If you are interested in viewing my other projects, please click this tile to view the source code on GitHub"
              bgColor="bg-secondary"
              link="https://github.com/WeronikaPierzchala/"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

type ProjectProps = {
  title: string;
  description: string;
  bgColor: string;
  link: string;
  color?: string;
};

const Project = ({
  title,
  description,
  bgColor,
  link,
  color,
}: ProjectProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-primary min-h-fit`;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <motion.div
        variants={projectVariant}
        className={`relative h-[400px] w-full max-w-100 ${bgColor} flex justify-center items-center`}
      >
        <p className={`text-2xl font-playfair ${color}`}>{title}</p>
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
      </motion.div>
    </a>
  );
};
