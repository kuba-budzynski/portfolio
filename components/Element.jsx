import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Element({ question, anwser }) {
    const [box, setBox] = useState(false);

    return (
        <div className="bg-white shadow-md rounded p-6 md:p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg pr-3 font-semibold leading-none text-gray-700">
                        <ReactMarkdown>{question}</ReactMarkdown>
                    </h2>
                </div>
                <div onClick={() => setBox(!box)}>
                    {box ? (
                        <FaChevronUp className="w-6 h-6 text-gray-600 hover:text-indigo-500 cursor-pointer" />
                    ) : (
                        <FaChevronDown className="w-6 h-6 text-gray-600 hover:text-indigo-500 cursor-pointer" />
                    )}
                </div>
            </div>

            {box && (
                <ul className="border-t border-gray-200 border-dotted w-full mt-3">
                    <li>
                        <p className="text-base leading-normal text-gray-500 mt-3 lg:w-3/4">
                            <ReactMarkdown>{anwser}</ReactMarkdown>
                        </p>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Element;
