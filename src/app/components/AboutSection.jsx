"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc pl-5">
                <li>HTML5 &amp; CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js &amp; Next.js</li>
                <li>Tailwind CSS</li>
                <li>Figma (UI/UX)</li>
                <li>Django &amp; Flask</li>
                <li>Git &amp; GitHub</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="space-y-3">
                <li>
                    <p className="font-semibold text-white">Bachelor of Computer Science (Hons.)</p>
                    <p className="text-white/70 text-sm">UiTM Jasin, Melaka &middot; 2022 - 2024 &middot; CGPA 3.14</p>
                </li>
                <li>
                    <p className="font-semibold text-white">Diploma in Computer Science</p>
                    <p className="text-white/70 text-sm">UiTM Arau, Perlis &middot; 2019 - 2022 &middot; CGPA 3.72</p>
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Front End Development Libraries</li>
                <li>Responsive Web Design</li>
                <li>Working with Containers: Intro to Kubernetes</li>
                <li>Vice Chancellor Award (Diploma)</li>
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
                    <p className="uppercase tracking-widest text-xs text-[#ADB7BE] mb-2">About me</p>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Junior Developer specializing in frontend web development
                    </h2>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed">
                        I&apos;m a frontend developer based in Shah Alam, Selangor, building responsive
                        web apps with React, Next.js, and Tailwind CSS, and shaping the interfaces behind
                        them in Figma. My day-to-day spans client web apps, wireframing, and UI/UX design,
                        with some backend exposure through Django.
                        <br /><br />
                        I care about clean, accessible interfaces and enjoy the handoff between design and
                        code, especially untangling a messy layout into something that just works across
                        devices.
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
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;