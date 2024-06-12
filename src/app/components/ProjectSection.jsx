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
    tag: ["All", "Web"],
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
    title: "??",
    description: "Her eyes vacant, her soul drained.",
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
    title: "Me",
    description: "Eyes closed, he rests amidst blooms, lost in tranquility.",
    image: "/images/arts/art3.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art3.jpg",

  },
  {
    id: 10,
    title: "My deceased pet",
    description: "Memorializing the beloved: A somber depiction of a cat peacefully at rest",
    image: "/images/arts/art5.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art5.jpg",

  },
  {
    id: 11,
    title: "First Art Commission",
    description: "Holding a bouquet of flowers.",
    image: "/images/arts/art6.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art6.jpg",

  },
  {
    id: 12,
    title: "LRT",
    description: "Caught in a moment: Engrossed in her book, yet sharing a relaxed gaze.",
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
    description: "Did a li77le something",
    image: "/images/arts/art9.jpeg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art9.jpeg",

  },

]
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection