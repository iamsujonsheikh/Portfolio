export const contact = {
    email: "sujonsheikh.dev@gmail.com",
    phoneDisplay: "+880 1999-986919",
    whatsappNumber: "8801999986919",
    location: "Magura Sadar, Magura",
};

export const resumeUrl: string = "";

export const socialLinks = [
    {
        id: "linkedin",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/iamsujonsheikh/",
    },
    {
        id: "github",
        name: "GitHub",
        href: "https://github.com/iamsujonsheikh",
    },
    {
        id: "leetcode",
        name: "LeetCode",
        href: "https://leetcode.com/u/iamsujon/",
    },
    {
        id: "facebook",
        name: "Facebook",
        href: "https://www.facebook.com/iamsujonsheikh",
    },
] as const;

export type SocialId = (typeof socialLinks)[number]["id"];