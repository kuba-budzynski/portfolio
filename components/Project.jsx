import React, { useState } from 'react';
import { match } from '../utils/TechnologyIcon';
import AliceCarousel from 'react-alice-carousel';
import { FaGithub, FaLink, FaImages } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';
import ReactTooltip from 'react-tooltip';
import { Disclosure } from '@headlessui/react';
import v from 'voca';

function Project({ project }) {
    const [toggler, setToggler] = useState(false);
    const textLength = 512;
    const [text, setText] = useState(v.truncate(project.description, textLength));
    const [compact, setCompact] = useState(project.description.length > textLength);

    return (
        <div className="w-full h-full px-6 pt-6 pb-2 bg-white shadow-lg md:shadow-2xl rounded-md md:rounded-xl mx-auto">
            {project.picture.length > 0 && (
                <div className="w-full relative">
                    <FaImages className="w-6 h-6 text-indigo-400 hover:text-indigo-500 absolute top-0 right-0 animate-bounce" onClick={setToggler} />
                </div>
            )}
            <div className="w-full h-full">
                <h1 className="text-xl md:text-3xl text-indigo-400 font-bold text-left uppercase pr-6">{project.title}</h1>
                {project.description.length < textLength ? (
                    <p className=" text-justify md:text-left text-gray-500 text-sm md:text-base w-full md:w-11/12 pt-6">{project.description}</p>
                ) : (
                    <p
                        className=" text-justify md:text-left text-gray-500 text-sm md:text-base w-full md:w-11/12 pt-6"
                        onClick={() => {
                            if (text.length > textLength) {
                                setText(v.truncate(project.description, textLength));
                                setCompact(true);
                            } else {
                                setText(project.description);
                                setCompact(false);
                            }
                        }}>
                        {text}
                        {compact && <span className="text-indigo-400 px-3">read more</span>}
                    </p>
                )}
            </div>

            <div className="w-full mx-auto h-full border-b-2 border-t-2 border-gray-100 mt-10">
                <AliceCarousel
                    mouseTracking
                    items={project.technologies.map((tech) => (
                        <div className="flex justify-center justify-items-center py-5">{match(tech)}</div>
                    ))}
                    autoPlayInterval={1500}
                    animationDuration={800}
                    infinite={true}
                    autoPlay={true}
                    disableButtonsControls={true}
                    disableDotsControls={true}
                    mouseTracking={true}
                    responsive={{
                        0: {
                            items: 3
                        },
                        768: {
                            items: 4
                        },
                        1024: {
                            items: 5
                        }
                    }}
                />
            </div>
            <div className="w-full p-6 flex justify-center justify-items-center space-x-10 relative">
                <a href={project.github} target="_blank">
                    <FaGithub size="2rem" className="text-indigo-400 hover:text-indigo-500" />
                </a>
                <a href={project.url} target="_blank">
                    <FaLink size="2rem" className="text-indigo-400 hover:text-indigo-500" />
                </a>
                <p className="font-light text-xs pt-5 pb-1 text-gray-500 italic text-center absolute bottom-0 right-0">{project.create}</p>
            </div>
            <ReactTooltip place="top" type="info" effect="float" />
            <FsLightbox toggler={toggler} sources={project.picture.map((p) => p.url)} />
        </div>
    );
}

export default Project;
