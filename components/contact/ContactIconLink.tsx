import { contact } from "@/data/Socials";
import Image from "next/image";

const iconClass = "hover:scale-125 transition duration-700";
const labelClass = "flex items-center text-lg font-mono text-slate-200 hover:text-brand duration-300";
const hintClass = "hidden sm:block pl-2 text-sm text-slate-400";

const ContactIconLink = () => {
  return (
    <section className="space-y-4">
      <div>
        <a
          className="flex gap-2 justify-start items-center"
          href={`mailto:${contact.email}`}
        >
          <Image src="/assets/icons/social/gmail.png" width={40} height={40} alt="" className={iconClass} />
          <p className={labelClass}>
            {contact.email}
            <span className={hintClass}>(Recommended)</span>
          </p>
        </a>
      </div>

      <div>
        <a
          className="flex gap-2 justify-start items-center"
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/assets/icons/social/whatsapp.png" width={40} height={40} alt="" className={iconClass} />
          <p className={labelClass}>
            {contact.phoneDisplay}
            <span className={hintClass}>(Most preferred)</span>
          </p>
        </a>
      </div>

      <div className="flex gap-2 justify-start items-center">
        <Image src="/assets/icons/house.png" width={40} height={40} alt="" className={iconClass} />
        <p className="text-lg font-mono text-slate-200">{contact.location}</p>
      </div>
    </section>
  );
};

export default ContactIconLink;