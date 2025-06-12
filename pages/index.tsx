import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  useEffect(() => {
    document.title = "Devansh Agrawal | Portfolio";
  }, []);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Devansh Agrawal
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
        >
          Full Stack Developer
        </motion.h2>
        <div className="flex space-x-6 mt-6 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-lg leading-7">
          I'm a passionate developer focused on building modern, responsive web applications.
          I enjoy working with technologies like React, Next.js, and Tailwind CSS.
        </p>
      </section>

      <Skills />

      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Project One</h4>
            <p className="mb-4">A brief description of the project, what it does, and what technologies were used.</p>
            <a href="https://github.com/yourusername/project-one" className="text-blue-500 hover:underline">View Code</a>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Project Two</h4>
            <p className="mb-4">Another project description. This one could focus on design or interactivity.</p>
            <a href="https://github.com/yourusername/project-two" className="text-blue-500 hover:underline">View Code</a>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Devansh Agrawal. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
