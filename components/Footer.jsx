import Image from 'next/image';
import React from 'react';
import github from '../public/images/icons/github.svg';
import linkedin from '../public/images/icons/linkedin.svg';
import logo from '../public/images/logos/white-logo.svg';
import mail from '../public/images/icons/mail.svg';

function Footer() {
    return (
        <>
            <footer className="bg-blueGray-800 py-8">
                <div className="mx-auto container flex flex-col items-center justify-center">
                    <div>
                        <Image src={logo} width={120} height={120} className="animate-pulse" alt="Logo" />
                    </div>
                    <div className="text-white flex flex-col md:items-center mt-4">
                        <h1 className="text-2xl uppercase font-semibold">Fullstack developer</h1>
                        {/* <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
                            <h2 className="cursor-pointer">License</h2>
                        </div> */}
                        <div className="my-6 flex justify-center space-x-8">
                            <a href="https://github.com/kuba-budzynski" target="_blank">
                                <div className="group">
                                    <Image src={github} width={40} height={40} className="mx-auto" alt="Github" />
                                    <p className="text-center text-white group-hover:text-gray-300 font-light cursor-pointer">Github</p>
                                </div>
                            </a>
                            <a href="mailto: main.kubabudzynski@gmail.com" target="_blank">
                                <div className="group">
                                    <Image src={mail} width={40} height={40} className="mx-auto" alt="Email" />
                                    <p className="text-center text-white group-hover:text-gray-300 font-light cursor-pointer">Email</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <div className="group">
                                    <Image src={linkedin} width={40} height={40} className="mx-auto" alt="LinkedIn" />
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
