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
    nyura,
    starbucks,
    tesla,
    adas,
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
        title: "Python Developer",
        icon: web,
    },
    {
        title: "TypeScript Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Software Architect",
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
        title: "Consultant Software Developer",
        company_name: "RSK ADAS, UK",
        icon: adas,
        iconBg: "#fffff9",
        date: "From October 2022",
        points: [
            "Spearheaded the development of cutting-edge, cloud-based data gathering platforms and information systems, catering to the needs of over 13,000 users. Engineered data analysis and decision-making support, enhancing environmental monitoring and reporting.",
            "Utilized a versatile tech stack, including Python, React and more, to ensure the platforms' scalability, robustness and security. Orchestrated the entire software development lifecycle, from meticulous requirements gathering through deployment and ongoing maintenance. Written transparent documentation through continuous processes at crucial stages of the projects.",
            "Collaborated with stakeholders and cross-functional teams to align development efforts with business objectives, fostering efficient communication and project success. Implemented industry best practices to streamline processes, ensuring optimal efficiency in project timelines and deliverables.",
            "Redesigned and fortified client application infrastructure, instituting continuous integration with automated unit and integration tests. Implemented rigorous testing methodologies, utilizing tools like Jest and Cypress, to maintain code reliability and application stability.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Nyura, UK",
        icon: nyura,
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Aug 2022",
        points: [
            "Conducted extensive research and technical data analysis to identify and implement innovative UI features, enhancing the user experience and functionality of the digital portfolio platform. Collaborated with UX designers to ensure seamless integration of frontend enhancements, aligning with the overall product vision.",
            "Engineered scripts automating continuous integration and deployment processes, resulting in a remarkable 22% increase in team productivity. Implemented robust automation solutions for repetitive tasks involving the SaaS, reducing manual efforts and accelerating the development pipeline.",
            "Successfully integrated proprietary software components with commercial off-the-shelf products, ensuring interoperability and a cohesive user experience. Contributed to the selection and integration of third-party tools, optimizing functionality and expanding the platform's feature set.",
            "Achieved a remarkable 96% customer satisfaction rate by proactively addressing support issues, eliminating manual checks, and enhancing application stability. Engaged with end-users to gather feedback, identify pain points, and implement improvements, resulting in an enhanced overall user experience.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
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
