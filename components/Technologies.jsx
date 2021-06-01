import Image from 'next/image';
import React from 'react';
import android from '../public/images/icons/android3.svg';
import graphql from '../public/images/icons/graphql.svg';
import java from '../public/images/icons/java.svg';
import javascript from '../public/images/icons/javascript.svg';
import kotlin from '../public/images/icons/kotlin.svg';
import mongodb from '../public/images/icons/mongodb.svg';
import next from '../public/images/icons/next.svg';
import node from '../public/images/icons/node.svg';
import reactLogo from '../public/images/icons/react2.svg';
import spring from '../public/images/icons/spring.svg';
import tailwindcss from '../public/images/icons/tailwindcss.svg';
import typescript from '../public/images/icons/typescript.svg';

function Technologies() {
    return (
        <section className="w-full mx-auto pt-4" id="technologies">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-7xl text-4xl text-center font-extrabold mb-5 pt-4 uppercase bg-clip-text text-transparent bg-gradient-to-r to-green-400 from-blue-500">
                    My preferred technology stack
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
                    When the time comes to start a new project - these are the technologies I'm most likely to choose. Even though these are my go-to
                    solutions, I'm aware there is no shoe to fit all so I try to keep my approach technologically agnostic as much as possible.
                </p>
            </div>
            <div className="py-4 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b border-gray-200 py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://reactjs.org/" target="_blank">
                        <Image src={reactLogo} width={80} height={80} alt="React.js" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">React</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center md:border-r border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://tailwindcss.com/" target="_blank">
                        <Image src={tailwindcss} width={110} height={80} alt="Tailwind css" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">TailwindCSS</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b border-gray-200 py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://nodejs.org/en/" target="_blank">
                        <Image src={node} width={130} height={80} alt="Node.js" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Node.js / Express</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <Image src={javascript} width={80} height={80} alt="Javascript" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Javascript</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://www.java.com/en/" target="_blank">
                        <Image src={java} width={80} height={80} alt="Java" />
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center md:border-r border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://www.mongodb.com/" target="_blank">
                        <Image src={mongodb} width={80} height={80} alt="Mongodb" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">MongoDB</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://kotlinlang.org/" target="_blank">
                        <Image src={kotlin} width={80} height={80} alt="Kotlin" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Kotlin</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-b border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <Image src={typescript} width={80} height={80} alt="Typescript" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Typescript</p>
                    </a>
                </div>

                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b md:border-b-0 border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://spring.io/" target="_blank">
                        <Image src={spring} width={80} height={80} alt="Spring.io" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Spring</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center md:border-r border-b md:border-b-0 border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://graphql.org/" target="_blank">
                        <Image src={graphql} width={80} height={80} alt="GraphQL" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">GraphQL</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://nextjs.org/" target="_blank">
                        <Image src={next} width={130} height={80} alt="Next.js / Vercel" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Next.js / Vercel</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://www.android.com/" target="_blank">
                        <Image src={android} width={80} height={80} alt="Android" />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Android</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Technologies;
