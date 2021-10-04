import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Experience", href: "/experience", current: false },
  { name: "Jam", href: "/spotifyplaying", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const router = useRouter();
  //   console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="sm:px-6 lg:px-8 max-w-7xl  mx-auto px-4 py-10  md:py-20">
            <div className="relative flex items-center justify-between h-16 max-w-6xl mx-auto px-4 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <h1 className="font-semibold text-xl dark:text-gray-100  ">
                        {userData.name}
                      </h1>
                      <p className="text-base font-light text-gray-500 dark:text-gray-300  ">
                        {userData.designation}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/about">
                      <a
                        className={`text-base  ${
                          router.asPath === "/about"
                            ? "text-gray-800 font-bold dark:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                            : "text-gray-600 dark:text-gray-300 font-normal hover:text-black dark:hover:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                        }`}
                      >
                        About{" "}
                        {router.asPath === "/about" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3 animate-bounce dark:text-gray-300"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                        )}
                      </a>
                    </Link>
                    <Link href="/projects">
                      <a
                        className={`text-base  ${
                          router.asPath === "/projects"
                            ? "text-gray-800 font-bold dark:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                            : "text-gray-600 dark:text-gray-300 font-normal hover:text-black dark:hover:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                        }`}
                      >
                        Projects
                        {router.asPath === "/projects" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3 animate-bounce dark:text-gray-300"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                        )}
                      </a>
                    </Link>
                    <Link href="/experience">
                      <a
                        className={`text-base  ${
                          router.asPath === "/experience"
                            ? "text-gray-800 font-bold dark:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                            : "text-gray-600 dark:text-gray-300 font-normal hover:text-black dark:hover:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                        }`}
                      >
                        Experience{" "}
                        {router.asPath === "/experience" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3 animate-bounce dark:text-gray-300"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                        )}
                      </a>
                    </Link>
                    <Link href="/spotifyplaying">
                      <a
                        className={`text-base  ${
                          router.asPath === "/spotifyplaying"
                            ? "text-gray-800 font-bold dark:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                            : "text-gray-600 dark:text-gray-300 font-normal hover:text-black dark:hover:text-[#FAF089] px-3 py-2 rounded-md text-sm  "
                        }`}
                      >
                        Jam{" "}
                        {router.asPath === "/spotifyplaying" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3 animate-bounce dark:text-gray-300"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                          </svg>
                        )}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="p-2.5 ring-2 ring-gray-700 dark:ring-[#FAF089] dark:text-[#FAF089] dark:border-gray-700 focus:outline-none rounded-md border-thin hover:border-accent-200 dark:hover:border-accent-200 hover:text-accent-200 dark:hover:text-accent-200 focus:border-accent-200 dark:focus:border-accent-200 focus:text-accent-200 dark:focus:text-accent-200"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "light" ? (
                    <FiMoon size={20} />
                  ) : (
                    <FiSun size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium  "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
