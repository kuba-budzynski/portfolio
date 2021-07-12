import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import Tools from '../components/Tools';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/LandingPage'), { ssr: false });

export default function Home() {
    return (
        <div className="w-screen h-screen max-w-full bg-indigo-50">
            <Head>
                <title>Kuba Budzyński - Fullstack Developer</title>
                <meta name="description" content="A portfolio app to showcase some of my projects" />
                <meta property="og:title" content="Kuba Budzyński - Fullstack Developer" />
                <meta property="og:description" content="A portfolio app to showcase some of my projects" />
                <meta property="og:url" content="https://www.kubabudzynski.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Navbar />

            <LandingPage />
            <main className="bg-indigo-50 w-screen min-h-screen max-w-full flex">
                <div className="mx-auto flex flex-col w-full space-y-24">
                    <div className="w-full max-w-8xl mx-auto">
                        <Technologies />
                    </div>
                    <div className="w-screen max-w-full">
                        <CallToAction />
                    </div>

                    <div className="w-full max-w-8xl mx-auto">
                        <Tools />
                    </div>

                    <div className="w-full">
                        <Timeline />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
