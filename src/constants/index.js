import resume from "../assets/images/resume.jpg";
import resume2 from "../assets/images/resume2.jpg";
import resume3 from "../assets/images/resume3.jpg";
import oriel from "../assets/images/oriel.png";
import marion from "../assets/images/marion.jpg";
import linda from "../assets/images/linda.jpg";
import blackmark from "../assets/images/Blackmark.png";

export const slides = [
  {
    src: resume,
    label: "Modern CV",
  },
  {
    src: resume2,
    label: "ATS-Friendly CV",
  },
  {
    src: resume3,
    label: "Creative Resume",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This platform made it super easy to create my CV. Highly recommended!",
  },
  {
    name: "Jane Smith",
    feedback:
      "The templates are amazing and the process is very smooth. Great job!",
  },
  {
    name: "Michael Brown",
    feedback:
      "I landed my dream job thanks to the professional CV I built here.",
  },
  {
    name: "John Doe",
    feedback:
      "This platform made it super easy to create my CV. Highly recommended!",
  },
  {
    name: "Jane Smith",
    feedback:
      "The templates are amazing and the process is very smooth. Great job!",
  },
  {
    name: "Michael Brown",
    feedback:
      "I landed my dream job thanks to the professional CV I built here.",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export const teamMembers = [
  {
    name: "Oriel Kiplangat",
    role: "Founder & CEO",
    image: oriel,
  },
  {
    name: "Oriel Kiplangat",
    role: "Head of Design",
    image: marion,
  },
  {
    name: "Linda Wangui",
    role: "Content Specialist",
    image: linda,
  },
];
export const projects = [
  {
    title: "Modern CV",
    description: "A modern CV template that is easy to customize.",
    imageUrl: resume,
    isResume: true, 
  },
  {
    title: "ATS-Friendly CV",
    description: "An ATS-friendly CV designed to pass automated system scans.",
    imageUrl: resume2,
    isResume: true, 
  },
  {
    title: "Creative Resume",
    description:
      "A creative resume for those looking to stand out in design and media.",
    imageUrl: resume3,
    isResume: true, 
  },
  {
    title: "Blackmark CVs Website",
    description:
      "A professional CV and resume website to showcase services, pricing, and details about Blackmark CVs.",
    imageUrl: blackmark,
    link: "https://example.com",
    isResume: false,
  },
];
