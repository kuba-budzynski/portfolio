import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaGithub, FaHome, FaUserGraduate, FaBriefcase, FaLink } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';
import styled from '../styles/scrollbar.module.scss';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logos/white-logo.svg';
import logoDark from '../public/images/logos/purple-logo.svg';
import { client } from '../graphql/client';
import useSWR from 'swr';
import { Loader } from '../components/utils';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const fetcher = (query) => client.request(query);

export default function Navbar() {
    const { data, error } = useSWR(
        `query MyQuery {
            projects {
                id,
                slug
                title
                url
                github
            }
        }`,
        fetcher
    );

    return (
        <Popover className="bg-blueGray-800 shadow-lg absolute top-0 w-screen max-w-full z-40">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex py-3 justify-start md:justify-center md:justify-items-center border-b-2 border-blueGray-500">
                            <div className="-mr-2 -my-2 md:hidden flex justify-between w-full py-3 px-4">
                                <Popover.Button className="rounded-sm p-2 inline-flex items-center justify-center text-gray-300 hover:bg-blueGray-700">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-8 w-8 self-center" aria-hidden="true" />
                                </Popover.Button>
                                <div className="relative self-center">
                                    <Link href="/">
                                        <a>
                                            <Image src={logo} width={40} height={40} className="animate-pulse" alt="Logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <Popover.Group as="nav" static className="hidden md:flex space-x-10">
                                <Link href="/">
                                    <a className="text-lg font-medium text-white hover:text-indigo-400 self-center">Home</a>
                                </Link>

                                <a
                                    className="text-lg font-medium text-white hover:text-indigo-400 self-center"
                                    href="https://github.com/kuba-budzynski"
                                    target="_blank">
                                    Repository
                                </a>

                                <div className="relative self-center cursor-pointer">
                                    <Link href="/">
                                        <a>
                                            <Image src={logo} width={60} height={60} className="animate-pulse" alt="Logo" />
                                        </a>
                                    </Link>
                                </div>

                                <Link href="/aboutme">
                                    <a className="text-lg font-medium text-white hover:text-indigo-400 self-center">About me</a>
                                </Link>

                                <Popover className="relative self-center">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-indigo-400' : 'text-white',
                                                    'group rounded-md inline-flex items-center text-lg font-medium hover:text-indigo-400 focus:outline-none'
                                                )}>
                                                <span>Projects</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-indigo-400' : 'text-white',
                                                        'ml-1 h-6 w-6 group-hover:text-indigo-400'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1">
                                                <Popover.Panel
                                                    static
                                                    className="absolute -left-full transform -translate-x-1/2 z-40 mt-8 px-2 w-screen max-w-md sm:px-0">
                                                    <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                                                        <Link href="/projects">
                                                            <a className="py-8 px-4 flex items-cente bg-indigo-50 hover:bg-indigo-100 w-full justify-center justify-items-center group space-x-3">
                                                                <FaBriefcase className="flex-shrink-0 h-7 w-7 text-indigo-400" aria-hidden="true" />
                                                                <span className="text-lg font-bold text-indigo-400 uppercase">
                                                                    See all my projects
                                                                </span>
                                                            </a>
                                                        </Link>
                                                        <div
                                                            className={`relative flex flex-col overflow-y-scroll max-h-64 ${styled.scrollbar} divide-y-2 divide-gray-100`}>
                                                            {!data ? (
                                                                <div className="w-full h-16 mx-auto">
                                                                    <Loader color="text-indigo-500"></Loader>
                                                                </div>
                                                            ) : (
                                                                data.projects.slice(0, 3).map((d) => (
                                                                    <div className="w-full h-full space-y-1 py-3 px-4 hover:bg-indigo-50" key={d.url}>
                                                                        <p className="text-center text-base font-semibold text-gray-600">{d.title}</p>
                                                                        <div className="flex space-x-5 w-full justify-center">
                                                                            <a className="" href={d.github} target="_blank">
                                                                                <FaGithub className="w-5 h-5 text-indigo-400 hover:text-indigo-500" />
                                                                            </a>
                                                                            {d.url != null && (
                                                                                <a className="" href={d.url} target="_blank">
                                                                                    <FaLink className="w-5 h-5 text-indigo-400 hover:text-indigo-500" />
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Popover.Panel static className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div className="relative self-center">
                                            <Link href="/">
                                                <Image src={logoDark} width={40} height={40} className="animate-pulse" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            <Link href="/">
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <FaHome className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">Home page</span>
                                                </a>
                                            </Link>
                                            <a
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                href="https://github.com/kuba-budzynski"
                                                target="_blank">
                                                <FaGithub className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">Repository</span>
                                            </a>
                                            <Link href="/aboutme">
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <FaUserGraduate className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">About me</span>
                                                </a>
                                            </Link>
                                            <Link href="/projects">
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <FaBriefcase className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">Projects</span>
                                                </a>
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
