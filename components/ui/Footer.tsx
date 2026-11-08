import Link from "next/link";
import {
  FaDev,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/hamidrazadev",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hamidrazadev",
      icon: <FaLinkedin />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/@hamidrazadev_",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hamidrazadev",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/hamidrazadev/",
      icon: <FaFacebookF />,
    },
    {
      name: "Dev.to",
      href: "https://dev.to/hamidrazadev",
      icon: <FaDev />,
    },
  ];

  return (
    <footer className="w-full bg-accent-soft">
      <div className="container mx-auto py-2 flex justify-between items-center flex-wrap">
        <div className="my-auto">
          Made with 💖 by{" "}
          <Link
            className="hover:text-accent"
            target="_blank"
            href={"https://hamidrazadev.com"}
          >
            hamidrazadev
          </Link>{" "}
          for everyone.
        </div>
        <div className="flex flex-col items-center justify-center md:mx-0 mx-auto">
          <span className="text-xl font-semibold">Socials</span>
          <div className="flex gap-2 items-center justify-center">
            {socials.map((social) => (
              <Link href={social.href} className="text-xl hover:text-accent" key={social.name} title={social.name}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
