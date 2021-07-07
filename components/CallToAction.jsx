import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { store } from 'react-notifications-component';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import { RiSendPlaneFill } from 'react-icons/ri';
import github from '../public/images/icons/github.svg';
import useMedia from 'use-media';
import axios from 'axios';

const topics = [{ name: 'Other' }, { name: 'New commision' }, { name: 'Job offer' }, { name: 'Error on site' }];

export default function CallToAction() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(topics[0]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [reply, setReply] = useState('');

    const mini = useMedia({ maxWidth: '767px' });

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

    const send = async (data) => {
        const res = await axios.post('/api/sendMail', data);
        if (res.status == 200) {
            store.addNotification({
                title: 'Wonderful',
                message: 'Your message was successfully sent',
                type: 'success',
                insert: 'top',
                container: 'bottom-center',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        } else {
            store.addNotification({
                title: 'My apologies',
                message: 'It seens ther is an issue with your message',
                type: 'danger',
                insert: 'top',
                container: 'bottom-center',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
    };

    return (
        <>
            <section className="w-full bg-gradient-to-b lg:bg-gradient-to-r from-violet-600 to-blue-600 shadow-xl">
                <div className="mt-24 max-w-5xl mx-auto relative w-10/12 lg:px-10 py-10 lg:py-14 rounded-2xl  ">
                    <img
                        className="absolute inset-0 m-auto ml-4 z-10 -mt-4 animate-bounce"
                        src="https://cdn.tuk.dev/assets/templates/weCare/ball-small.png"
                        alt="Bouncing ball"
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
                        <div className="lg:w-1/2 flex flex-col justify-center items-center justify-items-center self-center lg:justify-end mt-4 lg:mt-0">
                            <div className="flex flex-col md:flex-row">
                                <a
                                    href="https://github.com/kuba-budzynski"
                                    target="_blank"
                                    className="mb-4 sm:mb-0 hover:bg-blue-600 p-2 focus:outline-none text-white mr-2.5 text-xs sm:text-base flex lg:border lg:border-white rounded-md self-center">
                                    <Image src={github} width={40} height={40} className="self-center" alt="Github logo" />
                                </a>
                                <button
                                    onClick={openModal}
                                    className="border border-white p-2 xl:p-4 focus:outline-none hover:bg-blue-600 text-white rounded-md sm:mr-2.5 text-xs sm:text-base">
                                    Send me an email
                                </button>
                            </div>
                            <p className="text-white font-light mt-2 text-center select-all">main.kubabudzynski@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
                    <div className="min-h-screen md:px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-95 transition-opacity hidden md:inline-block" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden md:inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        {mini ? (
                            <Transition.Child
                                as="div"
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        await send({
                                            replyTo: reply,
                                            subject,
                                            content,
                                            topic: selected.name
                                        });
                                        closeModal();
                                    }}
                                    id="mini"
                                    className="flex flex-col justify-items-center justify-center w-full h-full max-w-xl px-5 text-left align-middle transition-all transform bg-white shadow-xl min-h-screen">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center font-bold leading-6 text-indigo-500 flex space-x-2 justify-center max-h-screen py-3">
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
                                    <div className="my-1 w-full flex flex-col">
                                        <p className="text-gray-500 text-center text-sm">
                                            You can send me an email directly to my inbox. I will try to respond as soon as possible.
                                        </p>
                                        <label
                                            htmlFor="topic"
                                            className="text-base font-semibold text-indigo-500 mt-3 leading-tight tracking-normal mb-1">
                                            Topic
                                        </label>

                                        <Listbox value={selected} onChange={setSelected}>
                                            <div className="relative z-50">
                                                <Listbox.Button className="relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none">
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
                                                                        <span
                                                                            className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
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

                                        <div className="flex flex-col mt-3 w-full">
                                            <label
                                                htmlFor="subject"
                                                className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none"
                                                placeholder="Some interesting subject"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col mt-3 w-full">
                                            <label
                                                htmlFor="email1"
                                                className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                                Content
                                            </label>
                                            <textarea
                                                id="email1"
                                                required
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                style={{ minHeight: '5rem', maxHeight: '12rem' }}
                                                className="resize-none relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none border-none outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col mt-3 w-full">
                                            <label
                                                htmlFor="email1"
                                                className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                                Where should I reply?
                                            </label>
                                            <input
                                                id="email1"
                                                required
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)}
                                                className="relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none"
                                                placeholder="reply@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-evenly md:w-3/4 mx-auto my-8">
                                        <button
                                            type="submit"
                                            form="mini"
                                            className="px-8 py-2 text-sm font-medium text-green-700 bg-green-200 hover:bg-green-300 border-transparent rounded-md focus:outline-none">
                                            <div className="mx-auto flex space-x-1">
                                                <RiSendPlaneFill className="w-4 h-4 self-center place-self-center text-green-700" />
                                                <span>Send</span>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            className="px-6 py-2 text-sm font-medium text-red-700 bg-red-200 hover:bg-red-300 border-transparent rounded-md focus:outline-none"
                                            onClick={closeModal}>
                                            <div className="mx-auto flex space-x-1">
                                                <FaTrashAlt className="w-4 h-4 self-center place-self-center text-red-700" />
                                                <span>Cancel</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </Transition.Child>
                        ) : (
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <div className="inline-block w-full h-full max-w-2xl px-5 pt-5 text-left align-middle transition-all transform bg-white shadow-xl md:rounded-2xl min-h-screen md:min-h-0">
                                    <form
                                        id="bigger"
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            await send({
                                                replyTo: reply,
                                                subject,
                                                content,
                                                topic: selected.name
                                            });
                                            closeModal();
                                        }}
                                        className="max-w-xl mx-auto">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-4xl text-center font-bold leading-6 text-indigo-500 flex space-x-2 justify-center max-h-screen py-2">
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
                                            <p className="text-gray-500 text-center md:text-left px-4">
                                                You can send me an email directly to my inbox. I will try to respond as soon as possible.
                                            </p>
                                            <label
                                                htmlFor="topic"
                                                className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                                Topic
                                            </label>

                                            <Listbox value={selected} onChange={setSelected}>
                                                <div className="relative mt-1 z-50">
                                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none ">
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
                                                                            <span
                                                                                className={`${
                                                                                    selected ? 'font-medium' : 'font-normal'
                                                                                } block truncate`}>
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
                                                    required
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    className="relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none"
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
                                                    required
                                                    value={content}
                                                    onChange={(e) => setContent(e.target.value)}
                                                    style={{ minHeight: '5rem', maxHeight: '12rem' }}
                                                    className="resize-none md:resize-y relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex flex-col md:py-0 mt-2 w-full">
                                                <label
                                                    htmlFor="email1"
                                                    className="text-base font-semibold text-indigo-500 mt-4 leading-tight tracking-normal mb-1">
                                                    Where should I reply?
                                                </label>
                                                <input
                                                    required
                                                    id="email1"
                                                    value={reply}
                                                    onChange={(e) => setReply(e.target.value)}
                                                    className="relative w-full py-2 pl-3 text-left bg-coolGray-100 rounded shadow-md cursor-default focus:outline-none"
                                                    placeholder="reply@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full flex justify-center md:w-3/4 mx-auto my-9 space-x-6">
                                            <button
                                                type="submit"
                                                form="bigger"
                                                className="px-8 py-2 text-sm font-medium text-green-700 bg-green-200 hover:bg-green-300 border-transparent rounded-md focus:outline-none">
                                                <div className="mx-auto flex space-x-1">
                                                    <RiSendPlaneFill className="w-4 h-4 self-center place-self-center text-green-700" />
                                                    <span>Send</span>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                className="px-6 py-2 text-sm font-medium text-red-700 bg-red-200 hover:bg-red-300 border-transparent rounded-md focus:outline-none"
                                                onClick={closeModal}>
                                                <div className="mx-auto flex space-x-1">
                                                    <FaTrashAlt className="w-4 h-4 self-center place-self-center text-red-700" />
                                                    <span>Cancel</span>
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Transition.Child>
                        )}
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
