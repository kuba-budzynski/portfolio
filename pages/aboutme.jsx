import dynamic from 'next/dynamic';
import { FaGamepad, FaLanguage } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { IoIosBonfire } from 'react-icons/io';
import { GiSpiderWeb } from 'react-icons/gi';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Navbar = dynamic(import('../components/Navbar'));
const Footer = dynamic(import('../components/Footer'));
const Element = dynamic(import('../components/Element'));
const Stat = dynamic(import('../components/Stat'));

function aboutme({ faqs }) {
    return (
        <>
            <Head>
                <title>About me</title>
                <meta name="description" content="An about me, faq and image section of my portfolio" />
                <meta property="og:title" content="About me" />
                <meta property="og:description" content="An about me, faq and image section of my portfolio" />
                <meta property="og:url" content="https://www.kubabudzynski.com/aboutme/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="w-screen max-w-full min-h-screen h-full bg-indigo-50 mt-16">
                <img
                    src="https://i.ibb.co/DQ4FZhL/pattern-bg.png"
                    alt="blue pattern background"
                    className="absolute w-full h-64 md:h-96 object-center object-fit z-0"
                />
                <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-8 lg:pb-16">
                    <div className="md:py-36 py-20">
                        <h1 role="heading" className="xl:text-6xl md:text-5xl text-3xl font-bold leading-10 text-white text-center">
                            Some info about me
                        </h1>
                    </div>
                    <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full space-y-6">
                        {faqs.map((faq) => (
                            <Element key={faq.id} question={faq.question} anwser={faq.anwser} />
                        ))}
                    </div>
                </div>
                <div className="w-full mx-auto flex flex-col items-center justify-center py-4">
                    <div className="w-full flex justify-center">
                        <Image
                            src="https://ik.imagekit.io/0omc2vwzaz9/tr:w-500,h-500/profile_-w5ip8PL8.png"
                            width={300}
                            height={300}
                            className="mx-auto rounded-full shadow-sm"
                            alt="Profile"
                        />
                    </div>
                    <p className="text-justify lg:text-center text-gray-600 text-lg py-5 max-w-4xl mx-auto mb-8 px-8 lg:px-0">
                        I'm a Computer Science student at{' '}
                        <a href="https://wiz.pwr.edu.pl/" target="_blank" className="underline hover:text-indigo-500">
                            Wroc??aw University of Science and Technology
                        </a>{' '}
                        at the department of Computer Science and Management. As of now, my main focus is to excel my knowledge about Web Development,
                        its best practices, and industry standards as well as to gain professional experience.
                    </p>
                    <div role="list" className="mx-auto w-5/6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <Stat question="Languages I know" anwser="Polish (native), English (advanced), Russian (basic)">
                            <FaLanguage className="w-12 h-12 text-indigo-400" />
                        </Stat>

                        <Stat
                            question="First piece of code I've ever written"
                            anwser="It was a java Minecraft plugin - very simple but at the same time opened my eyes to endless possibilities">
                            <FaGamepad className="w-12 h-12 text-indigo-400" />
                        </Stat>

                        <Stat
                            question="Plans for the future"
                            anwser="I would like to learn and excel mostly in the field of Web Apps. I still see a huge potential for it in the future">
                            <GiSpiderWeb className="w-12 h-12 text-indigo-400" />
                        </Stat>

                        <Stat question="My favourite game series" anwser="Dark Souls series and Sekiro">
                            <IoIosBonfire className="w-12 h-12 text-indigo-400" />
                        </Stat>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default aboutme;

export async function getStaticProps() {
    const { client } = require('../graphql/client');

    const { faqs } = await client.request(`
        query MyQuery {
            faqs {
                id
                question
                anwser
            }
        }
    `);

    return {
        props: { faqs },
        revalidate: 43200
    };
}
