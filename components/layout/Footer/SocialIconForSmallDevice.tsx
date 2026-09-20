import SocialLinks from "@/components/common/SocialLinks";

const SocialIconForSmallDevice = () => {
  return (
    <SocialLinks
      className="md:hidden flex justify-center gap-4 pb-8"
      iconClassName="w-10 h-10"
    />
  );
};

export default SocialIconForSmallDevice;