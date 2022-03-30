export default {
  author: "Mario Torres",
  hero: {
    subtitle: "Freelance programmer",
    description: "Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.",
    cta: "Projects/Products",
  },
  products: {
    featured: [
      {
        name: "DoubleText",
        medium: "React · Go · GraphQL",
        summary: "Facebook Messenger Analyzer",
        copy: [
          "See millions of messages at a glance, without data leaving your computer."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://doubletext.me/"
          }
        },
        images: [
          "/doubletext/0.jpg",
          "/doubletext/1.jpg",
          "/doubletext/2.jpg",
          "/doubletext/3.jpg",
          "/doubletext/4.jpg"
        ]
      },
      {
        name: "ClimbList",
        medium: "React · Next.js",
        summary: "Climbing gym discovery",
        copy: [
          "The comparison site for climbers — coming soon."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Coming Soon",
            url: "https://climblist.com/"
          }
        },
        images: [
          "/climblist/0.jpg",
          "/climblist/1.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Web developer",
        description: "Landscape, domain, graphic design (logos, slogans) included",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Web scraping",
        description: "Recollect and analyze data from any websites",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/final-slash-vr"
        }
      },
      {
        name: "Automation",
        description: "Programs that automate repetitive tasks ",
        link: {
          name: "Demo",
          url: "https://mphwatch.samxie.net/demo"
        }
      }
    ]
  },
  logoSection: {
    title: "Hire me in",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F11%2FUpwork_logo_logotype.png&f=1&nofb=1",
        url: "https://unimelb.edu.au/"
      },
      {
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F06%2FFreelancer_logo.png&f=1&nofb=1",
        url: "https://www.zendesk.com/"
      },
      {
        src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F06%2FTwitter-Logo.png&f=1&nofb=1",
        url: "https://cash.app/"
      }
  ]
  },
  footer: {
    tagline: "Mario Torres",
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/inrainbowz2",
        fa: "fab fa-twitter" // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Github",
        url: "https://github.com/Mariovlv",
        fa: "fab fa-github"
      },
      {
        name: "Email",
        url: "mailto:inrainbowz01@gmail.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}