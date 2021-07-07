import { FaLaptopCode, FaPenFancy, FaQuestion, FaSchool } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import React from 'react';
import patterns from '../styles/patterns.module.scss';
import useMedia from 'use-media';

function Timeline() {
    const mini = useMedia({ minWidth: '768px' });

    return (
        <section className={`w-full h-full py-24 ${patterns.lines3}`}>
            <div className="w-11/12 lg:w-5/6 max-w-5xl mx-auto">
                <p className="w-full text-left lg:text-center text-5xl lg:text-7xl pb-6 font-extrabold uppercase text-blue-500">Education path</p>
                <p className="text-base md:text-lg lg:text-xl text-left lg:text-center text-gray-600 font-normal xl:w-3/4 xl:mx-auto pb-10">
                    Even though my educational journey is not yet finished, I certainly learned a lot. The life motto I try to live by is to never
                    stop learning and I definitely do not intend to stop on what I've already achieved.
                </p>
                <VerticalTimeline animate={mini}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#60A5FA', color: '#fff' }}
                        date="2015 - 2019"
                        icon={<FaSchool />}>
                        <h3 className="text-blue-500 text-2xl font-bold text-center md:text-left">High school</h3>
                        <p className="text-coolGray-500 text-md xl:text-xl text-left">
                            II High School. gen. Gustav Orlicz-Dreszera in Chełm - Math and Science class
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#60A5FA', color: '#fff' }}
                        date="May 2019"
                        icon={<FaPenFancy />}>
                        <h3 className="text-blue-500 text-2xl font-bold text-center md:text-left">Matura</h3>
                        <p className="text-coolGray-500 text-md xl:text-xl text-left">Advanced level - math, english and computer science</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#10B981', color: '#fff' }}
                        date="October 2019 - February 2022"
                        icon={<FaLaptopCode />}>
                        <h3 className="text-emerald-500 text-2xl font-bold text-center md:text-left">Bachelor's degree</h3>
                        <p className="text-coolGray-500 text-md xl:text-xl text-left">
                            Computer Science degree at Computer Science and Management Department of Wrocław University of Science and Technology
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#10B981', color: '#fff' }}
                        date="2022 - ?"
                        icon={<FaQuestion />}>
                        <h3 className="text-emerald-500 text-2xl font-bold text-center md:text-left">Master's degree</h3>
                        <p className="text-coolGray-500 text-md xl:text-xl text-left">Yet to be decided ...</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Timeline;
