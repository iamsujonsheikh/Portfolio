import {
  IconBriefcase,
  IconListLetters,
  IconBrandHipchat,
  IconShieldCode,
  IconDeviceGamepad3,
  IconUserCode,
} from "@tabler/icons-react";
import ActiveLink from "./ActiveLink";

const links = [
  { name: "About", href: "/", icon: IconUserCode },
  { name: "Experience", href: "/experience", icon: IconBriefcase },
  { name: "Skills", href: "/skills", icon: IconShieldCode },
  { name: "Projects", href: "/projects", icon: IconDeviceGamepad3 },
  { name: "Blogs", href: "/blogs", icon: IconListLetters },
  { name: "Contact", href: "/contact", icon: IconBrandHipchat },
];

const SideNavLinks = () => {
  return (
    <nav aria-label="Main">
      <ul className="flex flex-row md:flex-col justify-between gap-0 md:gap-2 md:my-4">
        {links.map(({ href, icon: Icon, name }) => (
          <li key={name}>
            <ActiveLink path={href} label={name}>
              <Icon
                aria-hidden="true"
                className="w-8 h-8 group-hover:scale-125 duration-300"
              />
              <span className="hidden md:block text-lg">{name}</span>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavLinks;