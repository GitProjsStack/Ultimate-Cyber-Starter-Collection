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
    // Computer Science Basics:
    {
        name: "W3Schools",
        description: "Beginner-friendly tutorials for web and programming.",
        url: "https://www.w3schools.com/",
        category: "CS Learning",
    },
    {
        name: "freeCodeCamp",
        description: "Free courses on programming, algorithms, and projects.",
        url: "https://www.freecodecamp.org/",
        category: "CS Learning",
    },
    {
        name: "CS50 by Harvard",
        description: "Comprehensive intro to CS and programming fundamentals.",
        url: "https://cs50.harvard.edu/x/2023/",
        category: "CS Learning",
    },
    {
        name: "The Odin Project",
        description: "Full-stack web development curriculum with projects.",
        url: "https://www.theodinproject.com/",
        category: "CS Learning",
    },
    {
        name: "Git Official Docs",
        description: "Learn Git basics, version control, and workflows.",
        url: "https://git-scm.com/doc",
        category: "CS Learning",
    },
    {
        name: "GeeksforGeeks",
        description: "Algorithms, data structures, and coding interview prep.",
        url: "https://www.geeksforgeeks.org/",
        category: "CS Learning",
    },
];
