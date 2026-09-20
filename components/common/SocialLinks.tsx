import { SocialId, socialLinks } from "@/data/Socials";
import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLeetcode,
    IconBrandLinkedin,
} from "@tabler/icons-react";


const icons: Record<SocialId, typeof IconBrandGithub> = {
    linkedin: IconBrandLinkedin,
    github: IconBrandGithub,
    leetcode: IconBrandLeetcode,
    facebook: IconBrandFacebook,
};

interface SocialLinksProps {
    className?: string;
    iconClassName?: string;
}

const SocialLinks = ({ className = "", iconClassName = "" }: SocialLinksProps) => {
    return (
        <ul className={className}>
            {socialLinks.map(({ id, name, href }) => {
                const Icon = icons[id];
                return (
                    <li key={id}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className="block rounded focus-visible:outline-2 focus-visible:outline-brand"
                        >
                            <Icon
                                aria-hidden="true"
                                className={`text-brand hover:scale-125 duration-500 ${iconClassName}`}
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialLinks;