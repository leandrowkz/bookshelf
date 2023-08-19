const headerLinks = [
  {
    "link": "/",
    "label": "Home"
  },
  {
    "link": "/favorites",
    "label": "Favorites"
  },
  {
    "link": "/booklist",
    "label": "My list"
  }
]

const footerLinks = [
  {
    "title": "About",
    "links": [
      {
        "label": "Features",
        "link": "#"
      },
      {
        "label": "Pricing",
        "link": "#"
      },
      {
        "label": "Support",
        "link": "#"
      },
      {
        "label": "Forums",
        "link": "#"
      }
    ]
  },
  {
    "title": "Project",
    "links": [
      {
        "label": "Contribute",
        "link": "#"
      },
      {
        "label": "Media assets",
        "link": "#"
      },
      {
        "label": "Changelog",
        "link": "#"
      },
      {
        "label": "Releases",
        "link": "#"
      }
    ]
  },
  {
    "title": "Community",
    "links": [
      {
        "label": "Join Discord",
        "link": "#"
      },
      {
        "label": "Follow on Twitter",
        "link": "#"
      },
      {
        "label": "Email newsletter",
        "link": "#"
      },
      {
        "label": "GitHub discussions",
        "link": "#"
      }
    ]
  }
]

export const useMenuLinks = () => ({
  header: headerLinks,
  footer: footerLinks,
})
