import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 2000
};

const illustration = {
    animated: true
};

const greeting = {
    username: "John Isama",
    title: "Hi, I'm John",
    subTitle: emoji(
        "A Full Stack Software Developer, Data Analyst & IoT Builder 🚀 passionate about solving real-world problems using technology — from connected hardware to intelligent APIs and actionable insights."
    ),
    resumeLink: "https://drive.google.com/file/d/1zlsdksFXxskBo5I-_bCvlPoCVWIiWrwN/view?usp=sharing",
    displayGreeting: true
};

const socialMediaLinks = {
    github: "https://github.com/isamaj20",
    linkedin: "https://www.linkedin.com/in/isama-john-adeyi/",
    gmail: "isamaj20@gmail.com",
    //facebook: "https://facebook.com/john.isama",
    twitter: "https://x.com/AwesomeNXT",
   // instagram: "https://instagram.com/johnisama",
    display: true
};

const skillsSection = {
    title: "What I Do",
    subTitle: "PASSIONATE DATA ANALYST, FULL STACK & IOT DEVELOPER IN THE NIGERIAN TECH SPACE",
    skills: [
        emoji("⚡ Build and manage REST APIs with Laravel for web and mobile apps"),
        emoji("⚡ Integrate embedded hardware with web platforms for IoT projects"),
        emoji("⚡ Build automation tools, self-service systems, and remote control devices"),
       // emoji("⚡ Clean and transform raw data into meaningful trends and patterns"),
        emoji("⚡ Analyze and visualize data to extract actionable business insights"),
        emoji("⚡ Build interactive dashboards using Excel, Power BI, and SQL")
    ],
    softwareSkills: [
        { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
        { skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel" },
        {skillName: "Sql-Database",fontAwesomeClassname: "fas fa-database"},
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
        { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
        { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
        { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
        { skillName: "Looker Studio", fontAwesomeClassname: "fas fa-chart-pie" },
        { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3" },
        { skillName: "Arduino", fontAwesomeClassname: "fas fa-microchip" },
        { skillName: "ESP32", fontAwesomeClassname: "fas fa-microchip" }
    ],
    display: true
};

const educationInfo = {
    display: true,
    schools:[
        {
            schoolName: "Benue State University",
            logo: require("./assets/images/bsulogo.jpeg"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "December 2012 - April 2017",
            desc: "Focused on software development and software engineering principles. Built academic projects using PHP and MySQL, laying the foundation for my software development journey.",
            descBullets: [
                "Built academic projects using PHP/MySQL and C++",
                "Learned and applied data analysis techniques using Excel and SQL",
                "Gained foundational knowledge in algorithms, networking, and system design"
            ]
        },
        {
            schoolName: "Baze University",
            logo: require("./assets/images/bazelogo.jpeg"),
            subHeader: "Diploma in Data Analytics",
            duration: "February 2024 - September 2024",
            desc: "Completed a comprehensive data analytics training covering Excel, Power BI, SQL, Tableau, and Python, with hands-on projects in business intelligence and data storytelling.",
            descBullets: [
                "Analyzed real-world datasets to generate insights and dashboards",
                "Built dynamic reports using Power BI and Tableau",
                "Applied SQL and Python for data wrangling and visualization"
            ]
        }
    ]
};

const techStack = {
    viewSkillBars: true,
    experience: [
        { Stack: "Backend (Laravel / PHP)", progressPercentage: "90%" },
        { Stack: "Frontend (HTML/CSS/JS)", progressPercentage: "80%" },
        { Stack: "Data Analytics (Power Bi/Excel/SQL)", progressPercentage: "80%" },
        { Stack: "IoT / Embedded Integration", progressPercentage: "70%" },
    ],
    displayCodersrank: false
};

const workExperiences = {
    display: true,
    experience: [
        {
            role: "Software Developer",
            company: "Misterich Limited",
            companylogo: require("./assets/images/misterich-logo.jpg"),
            date: "September 2021 – Present",
            desc: "Built and maintained Laravel-based applications, integrating external APIs and managing backend infrastructure for utility vending platforms. Focused on delivering scalable, secure, and user-friendly systems for both web and kiosk platforms.",
            descBullets: [
                "Developed full stack Laravel apps (PayKiosk, internal tools) to manage Self-service electricity vending.",
                "Collaborated with PMs to define features and system requirements"
            ]
        },
        {
            role: "IT Support",
            company: "Misterich Limited",
            companylogo: require("./assets/images/misterich-logo.jpg"),
            date: "November 2018 – September 2021",
            desc: "Provided desktop and software support to staff and self-service Kiosk while managing internal backend projects."
        },
        {
            role: "System Engineer",
            company: "GS-Tech Services",
            companylogo: require("./assets/images/GS-tech-logo.png"),
            date: "April 2016 – July 2016",
            desc: "Provided tailored software development and IT support services for local organizations and individuals. Built and deployed a custom Church Management System and offered hands-on technical assistance to improve client systems and workflows.",
            descBullets:[
                "Developed a Church Management System using PHP and MySQL for a local church",
                "Deployed the system locally, ensuring usability, efficiency, and effectiveness for church operations",
                "Delivered IT support services and troubleshooting assistance to various clients"
            ]
        },
        {
            role: "Web Developer Intern",
            company: "DualHub Systems",
            //companylogo: require("./assets/images/"),
            date: "Jan 2015 – July 2015",
            descBullets:[
                "Assisted in PHP-based website maintenance and content updates",
                "Gained experience working in a collaborative dev environment",
                "Shadowed senior developers and contributed to testing and documentation"
            ]
        }
    ]
};

const openSource = {
    showGithubProfile: "true",
    display: true
};

const bigProjects = {
    title: "Big Projects",
    subtitle: "Some tech solutions I've built or contributed to",
    projects: [
        {
            image: require("./assets/images/tiqeasylogo.png"),
            projectName: "Tiqeasy",
            projectDesc:
                "An online event management and ticketing platform.",
            footerLink: [
                {
                    name: "View Demo",
                    url: "https://tiqeasy.com"
                }
            ]
        },
        {
            image: require("./assets/images/misterich-logo.jpg"),
            projectName: "PayKiosk Cloud",
            projectDesc:
                "Self-service Laravel-based vending system used to manage electricity recharges via API and local kiosks.",
            footerLink: [
                {
                    name: "View Demo",
                    url: "http://3.14.166.23/"
                }
            ]
        },
        {
            image: require("./assets/images/dataanalysis.webp"),
            projectName: "eCommerce Sales & Feedback Data Analytics Project",
            projectDesc:
                "Data analysis of eCommerce sales and customer feedback data using Excel, Power Bi and SQL",          footerLink: [
                {
                    name: "View Demo",
                    url: "https://www.linkedin.com/feed/update/urn:li:activity:7254183779554971651/"
                }
            ]
        },
    ],
    display: true
};

const achievementSection = {
    display: false,
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                {name: "Certification", url: ""},
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
};

const blogSection = {
    display: false,
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
};

const talkSection = {
    display: false,
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),
    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ]
};

const podcastSection = {
    display: false,
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
};

const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",
    display: true
};

const contactInfo = {
    title: emoji("Get In Touch 📬"),
    subtitle:
        "I’m currently open to remote Laravel backend roles, IoT integration projects, Data Analytics opportunities, or tech collaborations. Let’s build data-driven, impactful solutions together!",
    number: "+234-806-720-3944",
    email_address: "isamaj20@gmail.com"
};

const twitterDetails = {
    userName: "AwesomeNXT",
    display: true
};

const isHireable = true;

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable,
    resumeSection
};
