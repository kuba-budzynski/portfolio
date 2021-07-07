import Image from 'next/image';
import React from 'react';
import github from '../public/images/icons/github.svg';
import linkedin from '../public/images/icons/linkedin.svg';
import logo from '../public/images/logos/white-logo.svg';
import mail from '../public/images/icons/mail.svg';
import useMedia from 'use-media';

function Footer() {
    const mini = useMedia({ minWidth: '768px' });

    return (
        <>
            <footer className="bg-blueGray-800 py-8">
                <div className="mx-auto container flex flex-col items-center justify-center">
                    <div>
                        <Image src={logo} width={!mini ? 60 : 120} height={!mini ? 60 : 120} className="animate-pulse" alt="Logo" />
                    </div>
                    <div className="text-white flex flex-col md:items-center mt-4">
                        <h1 className="text-lg md:text-2xl uppercase font-semibold text-center">Fullstack developer</h1>
                        <div className="my-6 flex justify-center space-x-8">
                            <a href="https://github.com/kuba-budzynski" target="_blank">
                                <div className="group">
                                    <Image src={github} width={!mini ? 30 : 40} height={!mini ? 30 : 40} className="mx-auto" alt="Github" />
                                    <p className="text-center text-white group-hover:text-gray-300 font-light cursor-pointer">Github</p>
                                </div>
                            </a>
                            <a href="mailto: main.kubabudzynski@gmail.com" target="_blank">
                                <div className="group">
                                    <Image src={mail} width={!mini ? 30 : 40} height={!mini ? 30 : 40} className="mx-auto" alt="Email" />
                                    <p className="text-center text-white group-hover:text-gray-300 font-light cursor-pointer">Email</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/kuba-budzynski" target="_blank">
                                <div className="group">
                                    <Image src={linkedin} width={!mini ? 30 : 40} height={!mini ? 30 : 40} className="mx-auto" alt="LinkedIn" />
                                    <p className="text-center text-white group-hover:text-gray-300 font-light cursor-pointer">Linkedin</p>
                                </div>
                            </a>
                        </div>
                        <div className="text-sm text-white">
                            <p>{`© ${new Date().getFullYear()} Kuba Budzyński. All rights reserved`}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
