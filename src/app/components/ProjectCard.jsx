"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const isVideo = previewUrl?.endsWith(".mp4");

    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div
                    className="overlay absolute items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
                >
                    <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon
                            className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
                        />
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsPreviewOpen(true)}
                        aria-label={`Preview ${title}`}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <EyeIcon
                            className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
                        />
                    </button>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>

            {isPreviewOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setIsPreviewOpen(false)}
                >
                    <div
                        className="relative max-w-3xl w-full max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsPreviewOpen(false)}
                            aria-label="Close preview"
                            className="absolute -top-10 right-0 text-[#ADB7BE] hover:text-white"
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                        {isVideo ? (
                            <video
                                src={previewUrl}
                                controls
                                autoPlay
                                className="w-full max-h-[85vh] rounded-xl"
                            />
                        ) : (
                            <img
                                src={previewUrl}
                                alt={`${title} preview`}
                                className="w-full max-h-[85vh] object-contain rounded-xl"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;