module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Max Kaplan", // Site title.
  siteTitleAlt: "Max Kaplan", // Alternative site title for SEO.
  siteLogo: "/assets/favicon.ico", // Logo used for SEO and manifest.
  siteUrl: "https://mkaplan9.github.io/", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Max Kaplan", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Projects", // Default category for posts.
  userName: "mkaplan9", // Username to display in the author segment.
  userLocation: "Baltimore, MD", // User location to display in the author segment.
  userAvatar: "/assets/MaxHeadshot.jpg", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/mkaplan9",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/max-kaplan-6a946455/",
      iconClassName: "fa fa-linkedin"
    }
  ],
  copyright: "Copyright © 2018 Max Kaplan" // Copyright string for the footer of the website and RSS feed.
};
