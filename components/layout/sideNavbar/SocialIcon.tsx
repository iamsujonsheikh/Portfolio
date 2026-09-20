import SocialLinks from "@/components/common/SocialLinks";

const SocialIcon = () => {
  return (
    <SocialLinks
      className="hidden md:flex justify-center gap-3 my-4 bg-neutral-500/10 border border-neutral-500/20 px-5 py-2 rounded-full"
      iconClassName="w-7 h-7"
    />
  );
};

export default SocialIcon;