import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Welcome to my personal portfolio website! I am Arjun Gurjar, a passionate Frontend Engineer and MERN Stack Developer dedicated to building scalable, user-friendly web applications.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    code:'https://github.com/arjungurjar01/React-ecommerce',
    link:'https://react-ecommerce-preview.vercel.app/',
    image: project1,
    description:
      "The VillageVeda frontend is a beautifully designed e-commerce platform that brings the essence of Indian village culture online. Built using React.js and Tailwind CSS, it offers a seamless shopping experience for customers looking to buy desi ghee, kachi ghani oils (mustard, almond, coconut, peanut), and spices (red chili powder and turmeric powder).",
    technologies: ["React", "Tailwind CSS","Node.js","Express", "MongoDB"],
  },
  {
    title: "Task Management App(Taskify)",
    code:'https://github.com/arjungurjar01/taskify' ,
    link:'https://taskify-preview.vercel.app/',
    image: project2,
    description:
      "Taskify is a React.js and Tailwind CSS-based task management application that enables admins to create tasks for employees, while employees can accept, complete, or mark tasks as failed. The application uses LocalStorage to persist task data, ensuring tasks remain saved even after a page refresh.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Todo App",
    code:'https://github.com/arjungurjar01/todo-mern',
    link:'https://github.com/arjungurjar01/todo-mern',
    image: project3,
    description:
      "Todo App is a full-stack Todo management application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a simple yet efficient way to create, update, delete, and manage tasks while fetching real-time to-dos from an API server.",
    technologies: ["React.js","Tailwind CSS","Node", "Express", "MongoDB"],
  },
  {
    title: "React Minis",
    code:'https://github.com/arjungurjar01/react-minis',
    link:'https://react-minis.vercel.app/',
    image: project4,
    description:
      "React Mini Projects is a collection of small, reusable, and interactive React components designed to enhance frontend development skills. This project includes a variety of mini projects and UI components like carousels, progress bars and more.",
    technologies: ["React.js","Tailwind CSS"],
  },
];


