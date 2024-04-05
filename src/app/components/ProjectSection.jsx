import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectData = [
    {
        id: 1,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/4.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 5,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"],
    },
    {
        id: 6,
        title: "HTML Portfolio Website",
        description: "Project description",
        image: "/images/projects/6.jpg",
        tag: ["All", "Web"],
    },

]
const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
            My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {ProjectData.map((project) =>
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                />
            )}
            </div>
        </>

    )
}

export default ProjectSection