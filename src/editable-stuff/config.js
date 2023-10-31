// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jarryd",
  middleName: "",
  lastName: "Goss",
  message: "Passionate Data Engineer, crafting transformative solutions for actionable insights.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jarrydgoss",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jarryd-g",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/LinkedIn Photo.jpg"),
  imageSize: 375,
  message:
    "Yooo, it's your boy J, a.k.a The Data Guy! I'm passionate about all things Data Analytics, with a particular focus on Data Engineering. There's something incredibly satisfying about creating Data Solutions that empower businesses and people to use their data effectively. I love helping others unlock the true potential of their data, turning it into insights that drive smart decisions. It's not just a job for me, it's a passion 😉",
  resume: "https://docs.google.com/document/d/11xq0EbYGTbdRbx0S5IpQw-jMy__WztCav_yinJVe63o/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jarrydgoss", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/LinkedIn Photo.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/LinkedIn Photo.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Power BI", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Python/R", value: 60 },
    { name: "Bash Linux", value: 50 },
    { name: "Elastic Stack", value: 45},
    { name: "React", value: 30 },
    { name: "HTML/CSS", value: 30 },
    { name: "neo4j Aura", value: 25 },
  ],
  softSkills: [
    { name: "Attention to Detail", value: 95 },
    { name: "Communication", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Strong Analytical Skills", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Collaboration", value: 80 },
    { name: "Critical Thinking", value: 70 },
    { name: "Creativity", value: 65 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jarrydgoss@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Data Analyst',// Here Add Company Name
      companylogo: require('../assets/img/atos_eviden.png'),
      date: 'Dec 2021 – Present',
    },
    {
      role: 'Data Analyst',
      companylogo: require('../assets/img/defence.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
