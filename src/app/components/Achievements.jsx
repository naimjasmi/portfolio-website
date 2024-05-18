"use client"
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })
const AchievementSection = () => {

    const achievementList = [
        {
            metric: "Projects",
            value: "3",
        },
        {
            metric: "Users",
            value: "1",
        },
        {
            metric: "Awards",
            value: "1",
        },
        {
            metric: "Years",
            value: "5",
        },
    ]
    return (
        <div className="py-8 px-4 xl:gap-16 smp:py-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
                {achievementList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friection: 100,
                                            tesnion: 140 * (index + 1),
                                        };
                                    }}
                                />
                            </h2>
                            <p className="text-[#ADB7BE] text-base">
                                {achievement.metric}
                            </p>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
};

export default AchievementSection