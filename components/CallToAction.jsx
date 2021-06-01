import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import Image from 'next/image';
import github from '../public/images/icons/github.svg';

const topics = [{ name: 'Other' }, { name: 'New commision' }, { name: 'Job offer' }, { name: 'Error on site' }];

export default function CallToAction() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(topics[0]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [reply, setReply] = useState('');

    function closeModal() {
        setIsOpen(false);
        setSelected(topics[0]);
        setSubject('');
        setContent('');
        setReply('');
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <section className="w-full bg-gradient-to-r from-violet-600 to-blue-600 shadow-xl">
                <div className="mt-24 max-w-5xl mx-auto relative w-10/12 lg:px-10 py-10 lg:py-14 rounded-2xl  ">
                    <img
                        className="absolute inset-0 m-auto ml-4 z-10 -mt-4 animate-bounce"
                        src="https://cdn.tuk.dev/assets/templates/weCare/ball-small.png"
                    />
                    <div className="lg:flex items-center z-10">
                        <div className="lg:w-1/2 lg:mr-12">
                            <h2 className="text-2xl xl:text-3xl text-white font-bold mb-4 text-center lg:text-left">
                                Interested in working together?
                            </h2>
                            <p className="text-lg xl:text-2xl text-white font-normal leading-7 text-center lg:text-left">
                                If you think I have something to offer, don't hesitate and hit me up!
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center justify-items-center self-center lg:justify-end mt-4 lg:mt-0">
                            <a
                                href="https://github.com/kuba-budzynski"
                                target="_blank"
                                className="mb-4 sm:mb-0 hover:bg-blue-600 p-2 focus:outline-none text-white mr-2.5 text-xs sm:text-base flex lg:border lg:border-white rounded-md">
                                <Image src={github} width={40} height={40} className="self-center" />
                            </a>
                            <button
                                onClick={openModal}
                                className="border border-white p-2 xl:p-4 focus:outline-none hover:bg-blue-600 text-white rounded-md sm:mr-2.5 text-xs sm:text-base">
                                Send me an email
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-95 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div
                                className="inline-block w-full h-full max-w-xl px-3 md:px-4 pt-0 md:pt-5 text-left align-middle transition-all transform bg-coolGray-50 shadow-xl rounded-2xl"
                                style={{ maxHeight: '95vh' }}>
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl text-center font-semibold leading-6 text-indigo-500 flex space-x-2 justify-center max-h-screen py-4">
                                    <span>Send me a message</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-indigo-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </Dialog.Title>
                                <div className="my-1 md:my-3 w-full flex flex-col">
                                    <p className="text-gray-500 text-center md:text-left">
                                        You can send me an email directly to my inbox. I will try to respond as soon as possible.
                                    </p>
                                    <label
                                        htmlFor="topic"
                                        className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                        Topic
                                    </label>

                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1 z-50">
                                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                <span className="block truncate">{selected.name}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0">
                                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {topics.map((topic, topicIdx) => (
                                                        <Listbox.Option
                                                            key={topicIdx}
                                                            className={({ active }) =>
                                                                `${active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                                            }
                                                            value={topic}>
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                                                                        {topic.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`${active ? 'text-indigo-600' : 'text-indigo-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>

                                    <div className="flex flex-col md:py-0 mt-2 w-full">
                                        <label
                                            htmlFor="email1"
                                            className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                            Subject
                                        </label>
                                        <input
                                            id="email1"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                                            placeholder="Some interesting subject"
                                        />
                                    </div>
                                    <div className="flex flex-col md:py-0 mt-2 w-full">
                                        <label
                                            htmlFor="email1"
                                            className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                            Content
                                        </label>
                                        <textarea
                                            id="email1"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            style={{ minHeight: '5rem', maxHeight: '12rem' }}
                                            className="resize-none md:resize-y relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col md:py-0 mt-2 w-full">
                                        <label
                                            htmlFor="email1"
                                            className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                            Where should I reply?
                                        </label>
                                        <input
                                            id="email1"
                                            value={reply}
                                            onChange={(e) => setReply(e.target.value)}
                                            className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                                            placeholder="reply@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-evenly md:w-3/4 mx-auto my-6">
                                    <button
                                        type="button"
                                        className="w-32 md:w-40 px-4 py-2 text-sm font-medium text-green-700 bg-green-200  border-transparent rounded-md hover:bg-green-300 focus:outline-none"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            alert(
                                                JSON.stringify({
                                                    selected,
                                                    subject,
                                                    content,
                                                    reply
                                                })
                                            );
                                            closeModal();
                                        }}>
                                        Send
                                    </button>
                                    <button
                                        type="button"
                                        className="w-32 md:w-40 px-4 py-2 text-sm font-medium text-red-700 bg-red-200 hover:bg-red-300 border-transparent rounded-md focus:outline-none"
                                        onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
