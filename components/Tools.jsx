import Image from 'next/image';
import React from 'react';
import gitkraken from '../public/images/icons/gitkraken.svg';
import illustrator from '../public/images/icons/illustrator.svg';
import intellij from '../public/images/icons/intellij.svg';
import vscode from '../public/images/icons/vscode.svg';

function Tools() {
    return (
        <section className="w-full mx-auto pt-4" id="tools">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-7xl text-5xl text-center font-extrabold mb-5 pt-4 uppercase bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-400">
                    Favourite tools
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
                    Some of the tools I'm used to working with
                </p>
            </div>
            <div className="py-4 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-b md:border-b-0 border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://reactjs.org/" target="_blank">
                        <Image src={vscode} width={80} height={80} />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">VS Code</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center md:border-r border-b md:border-b-0 border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://tailwindcss.com/" target="_blank">
                        <Image src={intellij} width={80} height={80} />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">IntelliJ IDEA</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-r border-gray-200 py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://nodejs.org/en/" target="_blank">
                        <Image src={gitkraken} width={80} height={80} />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">GitKraken</p>
                    </a>
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center border-gray-200  py-4 md:py-6 items-center cursor-pointer">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <Image src={illustrator} width={80} height={80} />
                        <p className="text-blueGray-500 text-lg text-center font-semibold">Illustrator</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Tools;
