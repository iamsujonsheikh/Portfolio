import NavLinks from "./NavLinks";
import ProfileImage from "./ProfileImage";
import PublicSideBarTextIntro from "./SideBarTextIntro";
import SocialIcon from "./SocialIcon";

const PublicSideBar = () => {
  return (
    <div className="flex justify-around md:flex-col md:h-screen md:justify-center items-center">
      <ProfileImage />
      <PublicSideBarTextIntro />
      <SocialIcon />
      <NavLinks />
    </div>
  );
};

export default PublicSideBar;