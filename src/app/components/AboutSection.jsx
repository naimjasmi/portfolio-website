"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content:(
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
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>UiTM Arau, Perlis</li>
                <li>UiTM Jasin, Melaka</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id:"certifications",
        content:(
            <ul className="list-disc pl-2">
                <li>Diploma in Science Computer</li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ip
                        quae ab illo inventore veritatis et quasi architecto beatae vit
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolo
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qui
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
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content} </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;