import HomePage from "./../assets/homepage-demo.png";

const PROJECTS_INFO = [
  {
    id: 1,
    projectPhoto: HomePage,
    projectTitle: "Ramtek Bazar",
    projectDesc:
      "Ramtek Bazar is a hyperlocal marketplace web application where users can buy and sell electronics, vehicles, furniture, and other items within Ramtek. It enables direct contact between buyers and sellers via WhatsApp with zero commission fees.",

    features: [
      "User registration and login with JWT authentication.",
      "Secure protected routes for sellers and buyers.",
      "Create, edit, and delete product listings.",
      "Upload product images with details like price, category, and description.",
      "Seller profile page with all listed products.",
      "Customer reviews system with edit and delete permissions.",
      "Direct WhatsApp contact integration with seller.",
      "Responsive UI optimized for mobile and desktop.",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Axios"
    ],

    gitHubLink: "https://github.com/Utkarshende/ramtek-mini-e-shop",
    liveLink: "https://ramtek-shop.netlify.app",
  },
];

export default PROJECTS_INFO;
