"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Diploma in Computer Science, UiTM Arau, Perlis</li>
                <li>Bachelor of Computer Science (Hons), UiTM Jasin, Melaka</li>
            </ul>
        )
    },

    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Diploma in Computer Science</li>
                <li>Bachelor of Computer Science Hons.</li>
                <li>Vice Chancellor Award</li>
            </ul>
        )
    },
]
const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/computer.png" alt="about" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base md:text-lg">
                        I am a 23-year-old Malaysian, born on April 15, 2001, in Teluk Intan, Perak. My passion lies in art and digital
                        drawing, and I am an enthusiastic learner, constantly expanding my skills in various areas of digital design and development.
                        Currently, I am delving deeper into Next.js, React.js, Figma, and Adobe Photoshop to enhance my proficiency in web development
                        and UI/UX design.
                        <br /><br />
                        My commitment to learning and growing drives me to take on new challenges and explore innovative solutions in the realm of digital
                        design. I am always eager to collaborate with like-minded individuals and teams to create impactful and visually appealing digital experiences.
                    </p>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content} </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;