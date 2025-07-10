export interface CyberResource {
    name: string;
    description: string;
    url: string;
    category: string;
}

export const cyberResources: CyberResource[] = [
    {
        name: "NetworkChuck",
        description: "Cybersecurity, networking, and IT tutorials.",
        url: "https://www.youtube.com/@NetworkChuck",
        category: "YouTube Channel",
    },
    {
        name: "The Hacker Mindset (LiveOverflow Blog)",
        description: "Deep articles on hacking to prevent attacks.",
        url: "https://liveoverflow.com/",
        category: "Blog",
    },
    {
        name: "TryHackMe",
        description: "Interactive hacking labs from beginner to pro.",
        url: "https://tryhackme.com/",
        category: "Learning Platform",
    },
    {
        name: "PortSwigger Web Security Academy",
        description: "Learn OWASP Top 10 with real labs.",
        url: "https://portswigger.net/web-security",
        category: "Learning Platform",
    },
    {
        name: "OverTheWire: Bandit",
        description: "Linux command line game teaching vital skills.",
        url: "https://overthewire.org/wargames/bandit/",
        category: "Learning Platform",
    },
    {
        name: "Cryptohack",
        description: "Interactive cryptography puzzles, from XOR to RSA.",
        url: "https://cryptohack.org/",
        category: "Learning Platform",
    },
];