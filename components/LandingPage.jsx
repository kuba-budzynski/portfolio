import { FaArrowDown } from 'react-icons/fa';
import React from 'react';
import Typist from 'react-typist';
import { useUserAgent } from 'next-useragent';

function LandingPage() {
    const ua = useUserAgent(window.navigator.userAgent);
    return (
        <section className={`w-screen h-full max-w-full ${ua.isFirefox || ua.isIE ? 'bg-wave-static' : 'bg-wave'} bg-bottom bg-cover bg-no-repeat`}>
            <div className="w-full h-full relative flex flex-col justify-items-center justify-center ">
                <div className="w-full lg:w-10/12 mx-auto pt-0 space-y-6 lg:space-y-10 xl:pb-16">
                    <div className="text-4xl lg:text-6xl xl:text-7xl text-center font-extrabold tracking-widest text-white h-20 flex justify-center justify-items-center">
                        <Typist
                            cursor={{
                                show: false
                            }}
                            className="my-auto">
                            <Typist.Delay ms={500} />
                            FULL STACK DEVELOPER
                        </Typist>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold tracking-wider text-white">KUBA BUDZYŃSKI</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 lg:h-32 w-24 lg:w-32 text-white mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <div className="absolute inset-x-0 bottom-2 h-8">
                    <FaArrowDown className="h-6 w-6 text-indigo-400 animate-bounce mx-auto" />
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
