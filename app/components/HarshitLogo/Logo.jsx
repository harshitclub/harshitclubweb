import Logo from "@/public/harshitclub.svg";
import LogoW from "@/public/harshitclub-w.svg";
import Image from "next/image";

export const HarshitLogo = () => {
  return <Image src={Logo} alt="harshitclub logo" />;
};

export const HarshitLogoW = () => {
  return <Image src={LogoW} alt="harshitclub logo" />;
};
