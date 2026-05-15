// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/tararad1.github.io/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Working papers, publications, theses, and projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience and classroom roles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/teaching/";
          },
        },{id: "nav-awards-amp-media",
          title: "awards &amp; media",
          description: "Awards, media recognition, grants, and honor societies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/honors/";
          },
        },{id: "nav-leadership",
          title: "leadership",
          description: "Leadership and academic service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/leadership/";
          },
        },{id: "nav-industry",
          title: "industry",
          description: "Collaboration with industry and nonprofit organizations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/industry/";
          },
        },{id: "nav-miscellaneous",
          title: "miscellaneous",
          description: "Residency, hobbies, volunteering, and public engagement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tararad1.github.io/miscellaneous/";
          },
        },{id: "news-mojtaba-was-a-finalist-for-the-ibm-best-student-paper-award",
          title: 'Mojtaba was a finalist for the IBM best student paper award.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%72%61%72%61%64@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/tararad1.github.io/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qbPWSdgAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tara-radvand-382128a3", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TaraRadvand74", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/TaraRadvand", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Tara-Radvand/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
