import { FaArrowDown } from 'react-icons/fa';
import React from 'react';

function LandingPage() {
    return (
        <section className="w-screen h-full max-w-full bg-wave bg-bottom bg-cover bg-no-repeat ">
            <div className="w-full h-full relative">
                <div className="absolute inset-x-0 bottom-2 h-8">
                    <FaArrowDown className="h-6 w-6 text-indigo-400 animate-bounce mx-auto" />
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
