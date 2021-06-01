import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';

function Repo() {
    const [show, setShow1] = useState(false);

    return (
        <div className="mx-auto px-4 xl:px-0 py-2 max-w-2xl">
            <div className="flex flex-col w-full items-center justify-centerl">
                <div className="relative bg-white w-full xl:w-11/12 px-6 py-8 xl:px-16 shadow-2xl rounded-2xl" style={{ minHeight: '12rem' }}>
                    <div className="lg:flex justify-between w-full">
                        <div>
                            <div className="flex w-full justify-between lg:justify-start items-center">
                                <h1 className="text-color font-black text-3xl lg:text-4xl lg:mr-8 text-indigo-400">Starter</h1>
                                <button
                                    className="w-10 h-10 absolute top-5 right-5 bg-gray-100 focus:outline-none flex items-center justify-center rounded-full"
                                    onClick={() => setShow1(!show)}>
                                    {show ? (
                                        <FaChevronUp className="w-6 h-6 text-gray-600 hover:text-indigo-500" />
                                    ) : (
                                        <FaChevronDown className="w-6 h-6 text-gray-600 hover:text-indigo-500" />
                                    )}
                                </button>
                            </div>
                            <div className="pt-3">
                                <p className="text-xl w-full text-gray-500 font-normal">
                                    For personal use that need advanced sharing &amp; reporting.
                                </p>
                            </div>
                            {show && (
                                <div id="listHolder" className=" pt-12">
                                    <div className="flex items-center">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">10 team projects</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">60-day version history</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">Up to 4 collaborators</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">Org-wide design systems</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">Plugin administration</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">Shared fonts</div>
                                    </div>
                                    <div className="flex items-center mt-7">
                                        <div className="pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12L10 17L20 7"
                                                    stroke="#718096"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-2xl f-f-r">Analytics review for each instance</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Repo;
