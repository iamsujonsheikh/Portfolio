import ByeTypeWriter from "../../contact/ByeTypeWriter";
import SocialIconForSmallDevice from "./SocialIconForSmallDevice";


const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center mt-20 sm:mt-36 space-y-4 sm:space-y-0 sm:space-x-6">
        <ByeTypeWriter />
        <SocialIconForSmallDevice />
      </div>

    </>
  );
};

export default Footer;
