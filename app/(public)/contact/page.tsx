import type { Metadata } from "next";
import ContactIconLink from "@/components/contact/ContactIconLink";
import ContactText from "@/components/contact/ContactText";
import Location from "@/components/contact/Location";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sujon Sheikh by email or WhatsApp for web development work.",
};

const Contact = () => {
  return (
    <>
      <div className="flex flex-col sm:gap-10 sm:flex-row sm:justify-between my-0 sm:my-20">
        <div className="space-y-10">
          <ContactText />
          <ContactIconLink />
        </div>

        <Location />
      </div>

      <Footer />
    </>
  );
};

export default Contact;