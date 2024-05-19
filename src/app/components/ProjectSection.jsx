"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
    {
        id: 1,
        title: "NextJS Portfolio Website",
        description: "Project description",
        image: "/images/webs/web1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/images/webs/web1.png",
    },
    {
        id: 2,
        title: "??",
        description: "Project description",
        image: "/images/arts/art1.jpg",
        tag: ["All", "Artworks"],
        gitUrl: "/",
        previewUrl: "/images/arts/art1.jpg",

    },
    {
        id: 3,
        title: "Wednesday Addams",
        description: "Project description",
        image: "/images/arts/art2.jpg",
        tag: ["All", "Artworks"],
        gitUrl: "/",
        previewUrl: "/images/arts/art2.jpg",

    },
    {
        id: 4,
        title: "Me",
        description: "Project description",
        image: "/images/arts/art3.jpg",
        tag: ["All", "Artworks"],
        gitUrl: "/",
        previewUrl: "/images/arts/art3.jpg",

    },
    {
        id: 5,
        title: "My deceased pet",
        description: "Project description",
        image: "/images/arts/art5.jpg",
        tag: ["All", "Artworks"],
        gitUrl: "/",
        previewUrl: "/images/arts/art5.jpg",

    },
    {
      id: 6,
      title: "First Art Commission",
      description: "Project description",
      image: "/images/arts/art6.jpg",
      tag: ["All", "Artworks"],
      gitUrl: "/",
      previewUrl: "/images/arts/art6.jpg",

  },
  {
    id: 7,
    title: "Reference from Pinterest",
    description: "Project description",
    image: "/images/arts/art7.jpg",
    tag: ["All", "Artworks"],
    gitUrl: "/",
    previewUrl: "/images/arts/art7.jpg",

},
{
  id: 8,
  title: "Reference from Pinterest2",
  description: "Project description",
  image: "/images/arts/art8.jpg",
  tag: ["All", "Artworks"],
  gitUrl: "/",
  previewUrl: "/images/arts/art8.jpg",

},
{
  id: 9,
  title: "Hand-drawn Jungkook",
  description: "Project description",
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