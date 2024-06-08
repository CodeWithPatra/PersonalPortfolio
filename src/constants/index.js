import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Pie Infocomm",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Jun 2023 - Jul 2023",
        points: [
            "Architected a travel booking system using Java Servlet and JSP.",
            "Collaborating with cross-functional teams including Backend developer to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Optimizing backend operations, resulting in a 15% increase in successful bookings.",
        ],
    },
    {
        title: "Artificial Intelligence Intern",
        company_name: "Smartknower",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Sep 2022 - Nov 2022",
        points: [
            "Architected a Deep Learning model to predict CIFAR-10 images using Python, TensorFlow, and Keras.",
            "Collaborated with expertises to enhance model performance.",
            "Implemented data analysis techniques, leading to a 10% increase in predictive accuracy.",
            "Applied fundamental Deep Learning concepts to improve model efficiency.",
        ],
    },
    {
        title: "Artificial Intelligence Intern",
        company_name: "Internship Studio",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Developed a German to English translator using Python, TensorFlow, and NLTK.",
            "Collaborated with cross-functional teams to refine the translator's functionality and accuracy.",
            "Implemented data preprocessing, algorithm optimization and enhancing translation accuracy.",
            "Analyzed insights and improved translation precision by 12%.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Sushant proved me wrong.",
        name: "Ram Yadav",
        designation: "Tech Lead",
        company: "Delphian Logic",
        image: "https://media.licdn.com/dms/image/D4D03AQG3CR0pKoAp5A/profile-displayphoto-shrink_800_800/0/1697435127617?e=1723075200&v=beta&t=5w4cg0NcpqSljLsV9rfKCew_NxOwrp1YNwYgaRkRSQs",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Sushant does.",
        name: "Yash Shah",
        designation: "Developer",
        company: "LTIMindtree",
        image: "https://media.licdn.com/dms/image/D4D03AQFV3bB10PDjJg/profile-displayphoto-shrink_800_800/0/1706622339555?e=1723075200&v=beta&t=RcivhRKNY9P33cG3JsCkLolGRVFgiQZ4FmgrMntkn3U",
    },
    {
        testimonial:
            "After Sushant optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Chittranjan Kaushal",
        designation: "Sr. Engineer",
        company: "Netwoven",
        image: "https://media.licdn.com/dms/image/D5603AQEoabyZ02N27Q/profile-displayphoto-shrink_400_400/0/1684085674857?e=1723075200&v=beta&t=EglbF5_vHQgzpB8jWcI97vrmcBumMnri1uahJe_QyVY",
    },
];

const projects = [
    {
        name: "Vidmerise",
        description:
            "Vidmerise a AI tool that summarize videos into native or regional languages, improving accessibility and user engagement.",
        tags: [
            {
                name: "flask",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Invoice Management System",
        description:
            "An Angular-based Application that enhancing invoice generation, tracking, and management with 70% efficiency boost and 50% reduction in errors over traditional methods. ",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Travel Booking",
        description:
            "A user-centric full stack travel booking system leveraging Java Servlet and JSP, optimizing backend operations for improved efficiency.",
        tags: [
            {
                name: "javaservlet",
                color: "blue-text-gradient",
            },
            {
                name: "jsp",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
