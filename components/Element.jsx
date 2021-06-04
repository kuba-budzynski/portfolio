import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

function Element({ question, anwser }) {
    const [box, setBox] = useState(false);

    return (
        <div class="bg-white shadow-md rounded p-6 md:p-8">
            <div class="flex items-center justify-between" onClick={() => setBox(!box)}>
                <div>
                    <h2 class="text-lg pr-3 font-semibold leading-none text-gray-700">
                        <ReactMarkdown>{question}</ReactMarkdown>
                    </h2>
                </div>
                <button
                    onClick={() => setBox(!box)}
                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                    {box ? (
                        <FaChevronUp className="w-6 h-6 text-gray-600 hover:text-indigo-500" />
                    ) : (
                        <FaChevronDown className="w-6 h-6 text-gray-600 hover:text-indigo-500" />
                    )}
                </button>
            </div>

            {box && (
                <ul class="border-t border-gray-200 border-dotted w-full mt-3">
                    <li>
                        <p class="text-base leading-normal text-gray-500 mt-3 lg:w-3/4">
                            <ReactMarkdown>{anwser}</ReactMarkdown>
                        </p>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Element;
