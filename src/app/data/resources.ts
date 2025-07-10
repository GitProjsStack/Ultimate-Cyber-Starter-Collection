export interface CyberResource {
  name: string;
  description: string;
  url: string;
  category: string;
}

export const cyberResources: CyberResource[] = [
  {
    name: "TryHackMe",
    description: "Learn and practice ethical hacking with gamified labs.",
    url: "https://tryhackme.com",
    category: "Ethical Hacking",
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer for capturing and inspecting packets.",
    url: "https://www.wireshark.org/",
    category: "Tools",
  },
  {
    name: "Linux Journey",
    description: "A beginner-friendly guide to learning Linux.",
    url: "https://linuxjourney.com/",
    category: "Foundations",
  },
  {
    name: "PortSwigger Academy",
    description: "Free web security training based on real vulnerabilities.",
    url: "https://portswigger.net/web-security",
    category: "Web Security",
  }
  // Add more resources here — total should be 50+
];
