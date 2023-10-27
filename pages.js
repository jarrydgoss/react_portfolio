const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://jarrydgoss.github.io/react_portfolio/";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
