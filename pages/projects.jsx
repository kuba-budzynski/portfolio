import React from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import _ from 'lodash';
const Project = dynamic(() => import('../components/Project'), { ssr: false });

function projects({ projects }) {
    return (
        <>
            <Head>
                <title>My projects</title>
                <meta name="description" content="Some of the projects I've made" />
                <meta property="og:title" content="My projects" />
                <meta property="og:description" content="Some of the projects I've made" />
                <meta property="og:url" content="https://www.kubabudzynski.com/projects/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="w-screen max-w-full min-h-screen h-full bg-indigo-50 pt-40">
                <h1 className="xl:text-7xl lg:text-6xl text-5xl text-center font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r to-green-400 from-blue-500 py-4">
                    Some of my projects
                </h1>
                {/* <img
                    src="https://i.ibb.co/DQ4FZhL/pattern-bg.png"
                    alt="blue pattern background"
                    className="absolute w-full h-64 md:h-96 object-center object-fit z-0"
                />
                <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-8 lg:pb-16">
                    <div className="md:py-36 py-20">
                        <h1 role="heading" className="xl:text-6xl md:text-5xl text-3xl font-bold leading-10 text-white text-center">
                            Some of my projects
                        </h1>
                    </div>
                </div> */}
                <div className="w-full mx-auto flex flex-col items-center justify-center py-6 xl:py-12">
                    <div className="py-12 space-y-24 xl:space-y-36 max-w-5xl mx-auto w-11/12 md:w-4/5">
                        {_.orderBy(projects, (p) => p.order, ['asc']).map((project) => (
                            <Project project={project} key={project.id} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default projects;

export async function getStaticProps() {
    const { client } = require('../graphql/client');
    const { projects } = await client.request(`
    query MyQuery {
        projects {
            id
            create
            github
            url
            title
            technologies
            slug
            picture {
                url
                width
                height
                handle
            }
            description
            order
        }
    }`);

    return {
        props: {
            projects,
            revalidate: 43200
        }
    };
}
