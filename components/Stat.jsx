import React from 'react';

function Stat({ question, anwser, children }) {
    return (
        <div role="listitem" className="focus:outline-none">
            <div className="bg-white focus:outline-none shadow-md flex items-center px-4 py-2 lg:px-5 lg:py-2 h-28">
                <div className="flex">
                    <div>{children}</div>
                    <div className="ml-4">
                        <p className="text-base font-medium leading-none text-gray-600">{question}</p>
                        <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-500 mt-2 2xl:w-7/12">{anwser}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stat;
