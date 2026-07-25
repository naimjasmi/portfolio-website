"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "My portfolio blends Tailwind and React Bootstrap for styling, featuring a responsive layout for optimal user experience.",
    image: "/images/webs/web1.png",
    tag: ["All", "Web"],
    gitUrl: "https://portfolio-website-peach-six.vercel.app",
    previewUrl: "/images/webs/web1.png",
  },
  {
    id: 2,
    title: "Emergensys CAD System Mock-Up",
    description: "Mock-up for NGCAD system using React Bootstrap and Tailwind with Next.js framework.",
    image: "/images/webs/web2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naimjasmi/ngcadmockup2",
    previewUrl: "/images/webs/web2.png",
  },
  {
    id: 3,
    title: "Peru ERS Citizen-App Mock-Up",
    description: "Mobile app mock-up for Citizen 911 using Canva.",
    image: "/images/webs/web3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.canva.com/design/DAF_L_BZLeg/PsfXru7WQj7dm8nDE9NzCQ/edit?utm_content=DAF_L_BZLeg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    previewUrl: "/images/webs/web3.png",
  },
  {
    id: 4,
    title: "FER System For School Counsellor using CNN",
    description: "This final year project is a real-time facial emotion recognition system using CNNs, TensorFlow, Keras, Flask, and Bootstrap.",
    image: "/images/webs/web4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naimjasmi/FERFYP",
    previewUrl: "/images/webs/web4prev.mp4",
  },
  {
    id: 5,
    title: "CAD Login Figma Mock-Up",
    description: "Clean login design for an emergency CAD system with username, password, Forgot Password link, and role selection.",
    image: "/images/webs/web5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/proto/d6NUzwJO8Dt5a6YGHF6VaQ/CAD-Mock-Up?node-id=0-1&t=Iv9Qxzq6HIMJQAzd-1",
    previewUrl: "/images/webs/web5.png",
  },
  {
    id: 6,
    title: "Image Carousel Slider",
    description: "This Figma design features a modern, interactive image carousel for showcasing diverse content. Users can swipe or drag to navigate.",
    image: "/images/webs/web6.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/proto/jn0GNkcOkZwehuDqOVsCYu/Untitled?node-id=0-1&t=SiRSYFE5lUNNlIDo-1",
    previewUrl: "/images/webs/web6.png",
  },
  {
    id: 7,
    title: "Digital Art",
    description: "Girl lying motionless, conveying emotional stillness.",
    image: "/images/arts/art1.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art1.jpg",
  },
  {
    id: 8,
    title: "Wednesday Addams",
    description: "Wednesday Addams from Wednesday",
    image: "/images/arts/art2.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art2.jpg",
  },
  {
    id: 9,
    title: "Floral Rest",
    description: "Digital sketch of a man seated in a flower, evoking calm and reflection.",
    image: "/images/arts/art3.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art3.jpg",
  },
  {
    id: 10,
    title: "My deceased pet",
    description: "Memorializing the beloved",
    image: "/images/arts/art5.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art5.jpg",
  },
  {
    id: 11,
    title: "First Art Commission",
    description: "A Girl holding a bouquet of flowers.",
    image: "/images/arts/art6.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art6.jpg",
  },
  {
    id: 12,
    title: "LRT sketch",
    description: "Digital sketch of a girl on the LRT, focusing on mood and urban stillness.",
    image: "/images/arts/art7.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art7.jpg",
  },
  {
    id: 13,
    title: "Reference from Pinterest",
    description: "Inspired by a Pinterest girl",
    image: "/images/arts/art8.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art8.jpg",
  },
  {
    id: 14,
    title: "Hand-drawn Jungkook",
    description: "Handrawn Sketch",
    image: "/images/arts/art9.jpeg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art9.jpeg",
  },
  {
    id: 15,
    title: "Chatbot Admin Web",
    description: "A streamlined and intuitive Chatbot Admin Dashboard design.",
    image: "/images/projects/project7.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/Bhay8pGeUSgFif26WH9fdl/Interactive-Admin-Hub-with-Chatbot-and-Query-Management-(Community)?node-id=0-1&t=HFuWSryBbSnilS3S-1",
    previewUrl: "/images/projects/project7.png",
  },
  {
    id: 16,
    title: "Mobile Login Screen",
    description: "A clean, modern mobile login screen with a user-friendly interface.",
    image: "/images/projects/project8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/design/Bhay8pGeUSgFif26WH9fdl/Interactive-Admin-Hub-with-Chatbot-and-Query-Management-(Community)?node-id=0-1&t=HFuWSryBbSnilS3S-1",
    previewUrl: "/images/projects/project8.png",
  },
  {
    id: 17,
    title: "Eid Money Packet Design",
    description: "A clean, modern Eid Money Packet Design",
    image: "/images/design/design1.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/images/design/moneypacket.gif",
  },
  {
    id: 18,
    title: "Interactive Product Showcase Design",
    description: "Prototype of Interactive Product Showcase Web Design",
    image: "/images/webs/web7.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/community/file/1496029435347948587/interactive-product-showcase-single-page-layout",
    previewUrl: "/images/webs/web7.png",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8">
      <p className="text-center text-primary-400 text-sm tracking-widest uppercase mb-2">
        Portfolio
      </p>
      <h2 className="text-center text-4xl font-bold text-white mb-3">
        My projects
      </h2>
      <p className="text-center text-[#ADB7BE] max-w-xl mx-auto mb-8 md:mb-12">
        A mix of web apps, mobile mock-ups, and digital art — filter by type to
        browse.
      </p>
      <div className="text-white flex flex-row justify-center items-center flex-wrap gap-2 py-2 mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Artworks"
          isSelected={tag === "Artworks"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      {filteredProjects.length === 0 ? (
        <p className="text-center text-[#ADB7BE] py-12">
          No projects in this category yet.
        </p>
      ) : (
        <ul ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: (index % 6) * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProjectSection;