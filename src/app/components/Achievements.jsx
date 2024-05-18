import React from "react";

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
            <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
                {achievementList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-white text-4xl font-bold">
                                {achievement.value}
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