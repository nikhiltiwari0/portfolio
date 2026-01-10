// Portfolio Version Configuration
// Ordered newest to oldest

export const portfolioVersions = [
  {
    id: "v5",
    name: "ASCII",
    date: "Jan 2026",
    commitHash: "latest",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio",
    isCurrent: true,
  },
  {
    id: "v4",
    name: "Genesis",
    date: "Nov 2025",
    commitHash: "0166187",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio/commit/0166187",
    isCurrent: false,
  },
  {
    id: "v3",
    name: "Revamp",
    date: "May 2025",
    commitHash: "07c622b",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio/commit/07c622b",
    isCurrent: false,
  },
  {
    id: "v2",
    name: "Timeline",
    date: "Feb 2025",
    commitHash: "32a1cdd",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio/commit/32a1cdd",
    isCurrent: false,
  },
  {
    id: "v1",
    name: "Gemini",
    date: "Dec 2024",
    commitHash: "e7f9821",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio/commit/e7f9821",
    isCurrent: false,
  },
  {
    id: "v0",
    name: "Origin",
    date: "Nov 2024",
    commitHash: "2e1a4a1",
    commitUrl: "https://github.com/nikhiltiwari0/portfolio/commit/2e1a4a1",
    isCurrent: false,
  },
];

export const getVersionById = (id) => {
  return portfolioVersions.find((v) => v.id === id);
};

export const getCurrentVersion = () => {
  return portfolioVersions.find((v) => v.isCurrent);
};
