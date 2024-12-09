import linkedin from "../assets/linkedin.png";
import github from "../assets/github-mark-white.png";

export const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <IconLink
        image={linkedin}
        href="https://www.linkedin.com/in/weronika-pierzcha%C5%82a-424449241/"
        ariaLabel="linkedin-link"
      />
      <IconLink
        image={github}
        href="https://github.com/WeronikaPierzchala/"
        ariaLabel="github"
      />
    </div>
  );
};

type IconLinkProps = {
  image: string;
  href: string;
  ariaLabel: string;
};

const IconLink = ({ image, href, ariaLabel }: IconLinkProps) => {
  return (
    <a
      aria-label={ariaLabel}
      className="hover:opacity-50 transition duration-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img alt={ariaLabel} src={image} width={30} height={30} />
    </a>
  );
};
