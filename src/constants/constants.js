import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  fire,
  java,
  c,
  bootstrap,
  mysql,
  django,
  flask,
  jquery,
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
  ec_logo,
  logo,
  tesla,
  shopify,
  university,
  atdr,
  tripguide,
  textutil,
  frs,
  port,
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelance Software Developer",
    company_name: "For - Eastern Compunet Pvt Ltd.",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Conceptualized, developed, and implemented the ATDR Repair Management System, a comprehensive freelance project focusing on streamlining repair operations.",
      "Engineered a dedicated module for the efficient addition and management of transporter details, enhancing overall system functionality.",
      "Established a robust feature set for adding and tracking vehicles involved in repair operations, optimizing logistics and resource management.",
      "Designed an intuitive interface empowering field mechanics to log repair tasks, associating them with specific vehicles. Implemented a secure login system for mechanics to efficiently track repair assignments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Eastern Compunet Pvt Ltd.",
    icon: ec_logo,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jun 2023",
    points: [
      "Developed a Face Recognition Attendance App using TensorFlow, incorporating an admin panel for efficient employee monitoring.",
      "Enhanced Bar Counting System functionality by integrating real-time data retrieval and implementing dynamic graphs with Flask and Chart.js",
      "Demonstrated proficiency in Python, Flask, JavaScript, jQuery, Chart.js, MySQL, Android Studio with Java, HTML, CSS, and Bootstrap.",
      "Exhibited strong soft skills, including effective teamwork, precise time management, and clear communication. Contributed to constructive code reviews and adhered to project timelines.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Outstanding Python and web developer-excellent code, reliable, and a key contributor to project success.",
    name: "Harpreet Singh",
    designation: "Project Head",
    company: "Eastern Compunet Pvt Ltd.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Aman does.",
    name: "Debashish Pathak",
    designation: "Founder & CEO",
    company: "Eastern Compunet Pvt Ltd.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Exceptional Python developer, delivers high-quality code, and a valuable team player. Highly recommend.",
    name: "Ashish Ranjan Das",
    designation: "Founder & CEO",
    company: "Eastern Compunet Pvt Ltd.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  // {
  //   name: "University Website",
  //   description:
  //     "Developed a University Website for My College Project at MRs. KMPM Vocational COllege as my final year project. Where I Designed a user-friendly interface with an Appointment System and Admin Panel using HTML, CSS, JS, Bootstrap, Flask, JQuery, DataTables, and NodeJs.",
  //   tags: [
  //     {
  //       name: "Flask",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "NodeJS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: university,
  //   source_code_link: "https://github.com/aman24deep/University_Website_with_appointment_system",
  // },
  {
    name: "ATDR Monitoring System",
    description:
      "Completed a freelance project for ATDR Repair Management System. Integrated Transporter Management, Vehicle Tracking, and Field Mechanics Repair Records using HTML, CSS, ChartJs, jQuery, JavaScript, Flask, DataTables, AJAX, MySQL, Bootstrap, and Python.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "ChartJS",
        color: "green-text-gradient",
      },
      {
        name: "DataTables",
        color: "pink-text-gradient",
      },
    ],
    image: atdr,
    source_code_link: "",
  },
  {
    name: "Fire Detection System Using YOLOv8",
    description:
      "Presenting a fire detection alarm system using YOLOv8 and OpenCV. Set up with a virtual environment or install dependencies directly. Run with webcams or CLI commands for video/picture detection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "pink-text-gradient",
      },
    ],
    image: fire,
    source_code_link: "https://github.com/aman24deep/Fire_Detection_System_Using_Yolov8",
  },
  {
    name: "FR Attendance System",
    description:
      "Contributed to E-Attendance at Eastern Compunet Private Limited, developing a Face Recognition Attendance App and admin panel for streamlined employee management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: frs,
    source_code_link: "",
  },
  // {
  //   name: "Text-Utils",
  //   description:
  //     "Crafted a Text Utilities web app using React and React-Router-Dom, enhanced with Bootstrap properties. Manipulate and explore detailed insights about texts, sentences, or paragraphs seamlessly.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "NodeJS",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: textutil,
  //   source_code_link: "https://github.com/aman24deep/Text-Utilities",
  // },
  // {
  //   name: "Portfolio Website",
  //   description:
  //     "Designed and developed a portfolio website with React, Three.js, Framer Motion, and Tailwind CSS. Featuring my skills, projects, and experience, it incorporates captivating 3D animations for a dynamic presentation.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "ThreeJS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: port,
  //   source_code_link: "",
  // },
];

export { services, technologies, experiences, testimonials, projects };
