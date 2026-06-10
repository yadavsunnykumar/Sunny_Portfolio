export const projects = [
  {
    title: "AI Resume Screening & Interview Question Generator",
    description: [
      "Full-stack GenAI system with modular AI agents that parses resumes (PDF/DOCX/TXT), scores candidate-JD fit 0–100, and generates 20 tailored interview questions per candidate — reducing manual screening time by 70%.",
      "Supervisor state machine orchestrating 3 specialized LLM agents (Resume Extractor, JD Matcher, Q-Gen) with Pydantic schema validation and retry logic.",
      "UUID-based session memory across all agent steps for consistent multi-step processing.",
    ],
    tech: "React, FastAPI, Python, OpenAI",
    liveLink: "https://resume-screening-agent-frontend.onrender.com/",
    githubLink: "https://github.com/yadavsunnykumar",
  },
  {
    title: "AI Fitness Guide",
    description: [
      "Full-stack AI fitness platform integrating Gemini LLM and Vapi's Voice AI Assistant to deliver personalized, voice-driven workout and diet plans through a conversational coaching experience.",
      "Secure authentication and role-based access with Clerk; Convex as a real-time reactive database for dynamic program generation and seamless client–server data sync.",
      "Clean, accessible UI built with Next.js, Tailwind, and Shadcn UI with live progress tracking.",
    ],
    tech: "Next.js, Convex, Clerk.dev, TailwindCSS, shadcn/ui, Gemini AI, Vapi",
    liveLink: "https://ai-fitness-guide.vercel.app/",
    githubLink: "https://github.com/yadavsunnykumar/ai_fitness_guide",
  },
  {
    title: "10-Minute Delivery App",
    description: [
      "Full-stack Zepto-like grocery delivery platform with AI-powered semantic product search using FAISS and sentence-transformers.",
      "OTP-based authentication, JWT sessions, real-time order tracking via Socket.IO, and an admin panel.",
      "ML-based ETA prediction using XGBoost; AI service built with FastAPI and Python.",
      "Dark mode support, responsive design with React + TypeScript + Tailwind CSS + Shadcn UI.",
    ],
    tech: "React, TypeScript, Node.js, Express, MongoDB, Socket.IO, FastAPI, Python",
    liveLink: null,
    githubLink: "https://github.com/yadavsunnykumar/10-mint-delivery-app",
  },
  {
    title: "MERN Chat Application",
    description: [
      "Real-time bidirectional messaging powered by Socket.IO for instant message delivery.",
      "Typing indicators, message delivery/seen status, and private rooms & group chats.",
      "Sleek responsive UI built with React.js, TailwindCSS, and shadcn/ui.",
    ],
    tech: "React, Node.js, Express, MongoDB, Socket.IO",
    liveLink: "https://mern-chatapp-eight.vercel.app",
    githubLink: "https://github.com/yadavsunnykumar/MERN_CHATAPP",
  },
  {
    title: "Spendly — Expense Tracker",
    description: [
      "Personal finance tracker to log and manage daily expenses with category and date filtering.",
      "User registration, login, and profile management with full CRUD operations.",
      "Built with Flask backend, SQLite database, and Jinja2 templating.",
    ],
    tech: "Python, Flask, SQLite, HTML, CSS, JavaScript",
    liveLink: null,
    githubLink: "https://github.com/yadavsunnykumar/expense_tracker",
  },
  // {
  //   title: "Job Portal",
  //   description: [
  //     "End-to-end job portal with role-based access for Admin, Employer, and Job Seeker.",
  //     "Job posting, searching, and application tracking with Spring Security for auth.",
  //     "Built with Spring MVC, Hibernate/JPA, MySQL, and Thymeleaf templating.",
  //   ],
  //   tech: "Spring Boot, Java, MySQL, Spring Security, Thymeleaf",
  //   liveLink: null,
  //   githubLink: "https://github.com/yadavsunnykumar/Job-Portal-Springboot",
  // },
  // {
  //   title: "Employee Management System",
  //   description: [
  //     "Full-stack CRUD application for managing employee records with a React frontend.",
  //     "REST API built with Spring Boot and Hibernate/JPA backed by MySQL.",
  //     "Bootstrap-styled responsive UI with seamless integration between React and Spring Boot.",
  //   ],
  //   tech: "Spring Boot, Java, React, MySQL, Bootstrap",
  //   liveLink: null,
  //   githubLink: "https://github.com/yadavsunnykumar/CRUD-Spring-React-Application",
  // },
];
