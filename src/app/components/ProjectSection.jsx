"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./projectTag";

const ProjectData = [
    {
        id: 1,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 3,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 4,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/4.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 5,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 6,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/6.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },

]
const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
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
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {ProjectData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                )}
            </div>
        </>

    )
}

export default ProjectSection