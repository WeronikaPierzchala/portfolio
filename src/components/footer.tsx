import { SocialMediaIcons } from "./social-media";

export const Footer = () => {
  return (
    <footer className="bg-red pt-5 pb-5">
      <div className="w-5/6 mx-auto flex justify-between items-center gap-7">
        <SocialMediaIcons />
        <div className="font-playfair font-semibold">
          WERONIKA PIERZCHAŁA 2024
        </div>
      </div>
    </footer>
  );
};
