<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

import DesktopSidebar from "../components/DesktopSidebar.vue";
import MiniCalendar from "../components/MiniCalendar.vue";

const profDropdown = ref(false);
const isMobile = ref(false);
const addSLideOver = ref(false);
</script>

<template>
    <div class="min-h-full bg-white">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div
            v-show="isMobile"
            class="fixed inset-0 flex z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
        >
            <div
                class="fixed inset-0 bg-gray-600 bg-opacity-75"
                aria-hidden="true"
            ></div>
            <div
                class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary"
            >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                        @click="isMobile = false"
                        type="button"
                        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <span class="sr-only">Close sidebar</span>
                        <!-- Heroicon name: outline/x -->
                        <Icon
                            class="h-6 w-6 text-white"
                            icon="ph:x"
                            width="20"
                            height="20"
                        />
                    </button>
                </div>

                <div class="flex-shrink-0 flex items-center px-4">
                    <img
                        class="h-14 w-auto"
                        src="/logo.png"
                        alt="Easywire logo"
                    />
                </div>
                <nav
                    class="mt-8 flex-1 flex flex-col divide-y divide-secondary overflow-y-auto"
                    aria-label="Sidebar"
                >
                    <div class="px-4 space-y-1">
                        <!-- Current: "bg-primary text-white", Default: "text-white hover:text-white hover:bg-secondary/50" -->
                        <RouterLink
                            to="/dashboard"
                            active-class="bg-secondary text-gray-600"
                            class="text-white hover:text-white hover:bg-secondary/50 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                            aria-current="page"
                        >
                            <Icon
                                class="mr-4 flex-shrink-0 h-6 w-6"
                                icon="ph:house-line"
                                width="20"
                                height="20"
                            />
                            Home
                        </RouterLink>

                        <RouterLink
                            to="/calendar"
                            active-class="bg-secondary text-gray-600"
                            class="text-white hover:text-white hover:bg-secondary/50 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                        >
                            <Icon
                                class="mr-4 flex-shrink-0 h-6 w-6"
                                icon="ph:calendar"
                                width="20"
                                height="20"
                            />
                            Calendar
                        </RouterLink>

                        <RouterLink
                            to="/records"
                            active-class="bg-secondary text-gray-600"
                            class="text-white hover:text-white hover:bg-secondary/50 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                        >
                            <Icon
                                class="mr-4 flex-shrink-0 h-6 w-6"
                                icon="ph:files"
                                width="20"
                                height="20"
                            />
                            Medical Records
                        </RouterLink>
                    </div>
                    <div class="mt-6 pt-6">
                        <div class="px-4 space-y-1">
                            <RouterLink
                                to="/profile"
                                active-class="bg-secondary text-gray-600"
                                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-secondary/50"
                            >
                                <Icon
                                    class="mr-4 flex-shrink-0 h-6 w-6"
                                    icon="ph:user-circle-gear"
                                    width="20"
                                    height="20"
                                />
                                Profile
                            </RouterLink>
                            <RouterLink
                                to="/settings"
                                active-class="bg-secondary text-gray-600"
                                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-secondary/50"
                            >
                                <Icon
                                    class="mr-4 flex-shrink-0 h-6 w-6"
                                    icon="ph:gear"
                                    width="20"
                                    height="20"
                                />
                                Settings
                            </RouterLink>

                            <RouterLink
                                to="/help"
                                active-class="bg-secondary text-gray-600"
                                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-secondary/50"
                            >
                                <Icon
                                    class="mr-4 flex-shrink-0 h-6 w-6"
                                    icon="ph:question"
                                    width="20"
                                    height="20"
                                />
                                Help
                            </RouterLink>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="flex-shrink-0 w-14" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit isMobile icon -->
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <DesktopSidebar />

        <div class="lg:pl-64 flex flex-col flex-1">
            <div
                class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none shadow"
            >
                <button
                    @click="isMobile = true"
                    type="button"
                    class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                >
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/menu-alt-1 -->
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
                <!-- Search bar -->
                <div
                    class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"
                >
                    <div class="flex-1 flex">
                        <form
                            class="w-full flex md:ml-0"
                            action="#"
                            method="GET"
                        >
                            <label for="search-field" class="sr-only"
                                >Search</label
                            >
                            <div
                                class="relative w-full text-gray-400 focus-within:text-gray-600"
                            >
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                                    aria-hidden="true"
                                >
                                    <Icon
                                        class="h-5 w-5"
                                        icon="ph:magnifying-glass"
                                        width="20"
                                        height="20"
                                    />
                                </div>
                                <input
                                    id="search-field"
                                    name="search-field"
                                    class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <span class="sr-only">View notifications</span>
                            <Icon
                                class="h-6 w-6"
                                icon="ph:bell"
                                width="20"
                                height="20"
                            />
                        </button>

                        <!-- Profile dropdown -->
                        <div class="ml-3 relative">
                            <div>
                                <button
                                    @click="profDropdown = !profDropdown"
                                    type="button"
                                    class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                                >
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        src="/user.png"
                                        alt=""
                                    />
                                    <span
                                        class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"
                                        ><span class="sr-only"
                                            >Open user menu for </span
                                        >Keana Samantha Laraga</span
                                    >
                                    <Icon
                                        class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                        icon="ph:caret-down"
                                        width="20"
                                        height="20"
                                    />
                                </button>
                            </div>

                            <div
                                v-show="profDropdown"
                                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1"
                            >
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                    >Your Profile</a
                                >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                    >Settings</a
                                >
                                <RouterLink
                                    to="/"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                    >Logout</RouterLink
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main class="flex-1 pb-8 min-h-screen bg-primary/5">
                <div class="mt-16">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:h-full lg:flex-col">
                            <header
                                class="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none"
                            >
                                <h1 class="text-lg font-semibold text-gray-900">
                                    <time datetime="2022-01">January 2022</time>
                                </h1>
                                <div class="flex items-center">
                                    <div
                                        class="flex items-center rounded-md shadow-sm md:items-stretch"
                                    >
                                        <button
                                            type="button"
                                            class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                                        >
                                            <span class="sr-only"
                                                >Previous month</span
                                            >
                                            <!-- Heroicon name: solid/chevron-left -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                                        >
                                            Today
                                        </button>
                                        <span
                                            class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"
                                        ></span>
                                        <button
                                            type="button"
                                            class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                                        >
                                            <span class="sr-only"
                                                >Next month</span
                                            >
                                            <!-- Heroicon name: solid/chevron-right -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div
                                        class="hidden md:ml-4 md:flex md:items-center"
                                    >
                                        <div class="relative">
                                            <button
                                                type="button"
                                                class="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                                id="menu-button"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Month view
                                                <!-- Heroicon name: solid/chevron-down -->
                                                <svg
                                                    class="ml-2 h-5 w-5 text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                class="hidden focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="menu-button"
                                                tabindex="-1"
                                            >
                                                <div class="py-1" role="none">
                                                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                    <a
                                                        href="#"
                                                        class="text-gray-700 block px-4 py-2 text-sm"
                                                        role="menuitem"
                                                        tabindex="-1"
                                                        id="menu-item-0"
                                                        >Day view</a
                                                    >
                                                    <a
                                                        href="#"
                                                        class="text-gray-700 block px-4 py-2 text-sm"
                                                        role="menuitem"
                                                        tabindex="-1"
                                                        id="menu-item-1"
                                                        >Week view</a
                                                    >
                                                    <a
                                                        href="#"
                                                        class="text-gray-700 block px-4 py-2 text-sm"
                                                        role="menuitem"
                                                        tabindex="-1"
                                                        id="menu-item-2"
                                                        >Month view</a
                                                    >
                                                    <a
                                                        href="#"
                                                        class="text-gray-700 block px-4 py-2 text-sm"
                                                        role="menuitem"
                                                        tabindex="-1"
                                                        id="menu-item-3"
                                                        >Year view</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="ml-6 h-6 w-px bg-gray-300"
                                        ></div>
                                        <button
                                            @click="addSLideOver = true"
                                            type="button"
                                            class="focus:outline-none ml-6 rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-gray-600 shadow-sm hover:bg-secondary/80 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                                        >
                                            Add appointment
                                        </button>
                                    </div>
                                    <div class="relative ml-6 md:hidden">
                                        <button
                                            type="button"
                                            class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                                            id="menu-0-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span class="sr-only"
                                                >Open menu</span
                                            >
                                            <!-- Heroicon name: solid/dots-horizontal -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            class="hidden focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-0-button"
                                            tabindex="-1"
                                        >
                                            <div class="py-1" role="none">
                                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-0"
                                                    >Create event</a
                                                >
                                            </div>
                                            <div class="py-1" role="none">
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-1"
                                                    >Go to today</a
                                                >
                                            </div>
                                            <div class="py-1" role="none">
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-2"
                                                    >Day view</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-3"
                                                    >Week view</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-4"
                                                    >Month view</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="menu-0-item-5"
                                                    >Year view</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div
                                class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col"
                            >
                                <div
                                    class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none"
                                >
                                    <div class="bg-white py-2">
                                        M<span class="sr-only sm:not-sr-only"
                                            >on</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        T<span class="sr-only sm:not-sr-only"
                                            >ue</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        W<span class="sr-only sm:not-sr-only"
                                            >ed</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        T<span class="sr-only sm:not-sr-only"
                                            >hu</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        F<span class="sr-only sm:not-sr-only"
                                            >ri</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        S<span class="sr-only sm:not-sr-only"
                                            >at</span
                                        >
                                    </div>
                                    <div class="bg-white py-2">
                                        S<span class="sr-only sm:not-sr-only"
                                            >un</span
                                        >
                                    </div>
                                </div>
                                <div
                                    class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto"
                                >
                                    <div
                                        class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px"
                                    >
                                        <!--
          Always include: "relative py-2 px-3"
          Is current month, include: "bg-white"
          Is not current month, include: "bg-gray-50 text-gray-500"
        -->
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <!--
            Is today, include: "flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-semibold text-white"
          -->
                                            <time datetime="2021-12-27"
                                                >27</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2021-12-28"
                                                >28</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2021-12-29"
                                                >29</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2021-12-30"
                                                >30</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2021-12-31"
                                                >31</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time
                                                datetime="2022-01-01"
                                                class="flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-semibold text-white"
                                                >1</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-01">2</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-03">3</time>
                                            <ol class="mt-2">
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="group flex"
                                                    >
                                                        <p
                                                            class="flex-auto truncate font-medium text-gray-900 group-hover:text-secondary"
                                                        >
                                                            Dental Examination
                                                        </p>
                                                        <time
                                                            datetime="2022-01-03T10:00"
                                                            class="ml-3 hidden flex-none text-gray-500 group-hover:text-secondary xl:block"
                                                            >09:00 AM</time
                                                        >
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-04">4</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-05">5</time>
                                            <ol class="mt-2">
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="group flex"
                                                    >
                                                        <p
                                                            class="flex-auto truncate font-medium text-gray-900 group-hover:text-secondary"
                                                        >
                                                            Laboratory
                                                            Examination
                                                        </p>
                                                        <time
                                                            datetime="2022-01-03T10:00"
                                                            class="ml-3 hidden flex-none text-gray-500 group-hover:text-secondary xl:block"
                                                            >09:00 AM</time
                                                        >
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        class="group flex"
                                                    >
                                                        <p
                                                            class="flex-auto truncate font-medium text-gray-900 group-hover:text-secondary"
                                                        >
                                                            Physical Examination
                                                        </p>
                                                        <time
                                                            datetime="2022-01-03T10:00"
                                                            class="ml-3 hidden flex-none text-gray-500 group-hover:text-secondary xl:block"
                                                            >01:00 PM</time
                                                        >
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-06">6</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-07">7</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-08">8</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-09">9</time>
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-10"
                                                >10</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-11"
                                                >11</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-12"
                                                >12</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-13"
                                                >13</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-14"
                                                >14</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-15"
                                                >15</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-16"
                                                >16</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-17"
                                                >17</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-18"
                                                >18</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-19"
                                                >19</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-20"
                                                >20</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-21"
                                                >21</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-22"
                                                >22</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-23"
                                                >23</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-24"
                                                >24</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-25"
                                                >25</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-26"
                                                >26</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-27"
                                                >27</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-28"
                                                >28</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-29"
                                                >29</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-30"
                                                >30</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-white py-2 px-3"
                                        >
                                            <time datetime="2022-01-31"
                                                >31</time
                                            >
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-01">1</time>
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-02">2</time>
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-03">3</time>
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-04">4</time>
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-05">5</time>
                                        </div>
                                        <div
                                            class="relative bg-gray-50 py-2 px-3 text-gray-500"
                                        >
                                            <time datetime="2022-02-06">6</time>
                                        </div>
                                    </div>
                                    <div
                                        class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden"
                                    >
                                        <!--
          Always include: "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
          Is current month, include: "bg-white"
          Is not current month, include: "bg-gray-50"
          Is selected or is today, include: "font-semibold"
          Is selected, include: "text-white"
          Is not selected and is today, include: "text-secondary"
          Is not selected and is current month, and is not today, include: "text-gray-900"
          Is not selected, is not current month, and is not today: "text-gray-500"
        -->
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <!--
            Always include: "ml-auto"
            Is selected, include: "flex h-6 w-6 items-center justify-center rounded-full"
            Is selected and is today, include: "bg-secondary"
            Is selected and is not today, include: "bg-gray-900"
          -->
                                            <time
                                                datetime="2021-12-27"
                                                class="ml-auto"
                                                >27</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2021-12-28"
                                                class="ml-auto"
                                                >28</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2021-12-29"
                                                class="ml-auto"
                                                >29</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2021-12-30"
                                                class="ml-auto"
                                                >30</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2021-12-31"
                                                class="ml-auto"
                                                >31</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-01"
                                                class="ml-auto"
                                                >1</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-02"
                                                class="ml-auto"
                                                >2</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-03"
                                                class="ml-auto"
                                                >3</time
                                            >
                                            <p class="sr-only">2 events</p>
                                            <div
                                                class="-mx-0.5 mt-auto flex flex-wrap-reverse"
                                            >
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-04"
                                                class="ml-auto"
                                                >4</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-05"
                                                class="ml-auto"
                                                >5</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-06"
                                                class="ml-auto"
                                                >6</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-07"
                                                class="ml-auto"
                                                >7</time
                                            >
                                            <p class="sr-only">1 event</p>
                                            <div
                                                class="-mx-0.5 mt-auto flex flex-wrap-reverse"
                                            >
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-08"
                                                class="ml-auto"
                                                >8</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-09"
                                                class="ml-auto"
                                                >9</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-10"
                                                class="ml-auto"
                                                >10</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-11"
                                                class="ml-auto"
                                                >11</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 font-semibold text-secondary hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-12"
                                                class="ml-auto"
                                                >12</time
                                            >
                                            <p class="sr-only">1 event</p>
                                            <div
                                                class="-mx-0.5 mt-auto flex flex-wrap-reverse"
                                            >
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-13"
                                                class="ml-auto"
                                                >13</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-14"
                                                class="ml-auto"
                                                >14</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-15"
                                                class="ml-auto"
                                                >15</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-16"
                                                class="ml-auto"
                                                >16</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-17"
                                                class="ml-auto"
                                                >17</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-18"
                                                class="ml-auto"
                                                >18</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-19"
                                                class="ml-auto"
                                                >19</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-20"
                                                class="ml-auto"
                                                >20</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-21"
                                                class="ml-auto"
                                                >21</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 font-semibold text-white hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-22"
                                                class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900"
                                                >22</time
                                            >
                                            <p class="sr-only">2 events</p>
                                            <div
                                                class="-mx-0.5 mt-auto flex flex-wrap-reverse"
                                            >
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-23"
                                                class="ml-auto"
                                                >23</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-24"
                                                class="ml-auto"
                                                >24</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-25"
                                                class="ml-auto"
                                                >25</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-26"
                                                class="ml-auto"
                                                >26</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-27"
                                                class="ml-auto"
                                                >27</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-28"
                                                class="ml-auto"
                                                >28</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-29"
                                                class="ml-auto"
                                                >29</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-30"
                                                class="ml-auto"
                                                >30</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-white py-2 px-3 text-gray-900 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-01-31"
                                                class="ml-auto"
                                                >31</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-01"
                                                class="ml-auto"
                                                >1</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-02"
                                                class="ml-auto"
                                                >2</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-03"
                                                class="ml-auto"
                                                >3</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-04"
                                                class="ml-auto"
                                                >4</time
                                            >
                                            <p class="sr-only">1 event</p>
                                            <div
                                                class="-mx-0.5 mt-auto flex flex-wrap-reverse"
                                            >
                                                <div
                                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                                ></div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-05"
                                                class="ml-auto"
                                                >5</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                        <button
                                            type="button"
                                            class="flex h-14 flex-col bg-gray-50 py-2 px-3 text-gray-500 hover:bg-gray-100 focus:z-10"
                                        >
                                            <time
                                                datetime="2022-02-06"
                                                class="ml-auto"
                                                >6</time
                                            >
                                            <p class="sr-only">0 events</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="py-10 px-4 sm:px-6 lg:hidden">
                                <ol
                                    class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5"
                                >
                                    <li
                                        class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                                    >
                                        <div class="flex-auto">
                                            <p
                                                class="font-semibold text-gray-900"
                                            >
                                                Dental Examination
                                            </p>
                                            <time
                                                datetime="2022-01-15T09:00"
                                                class="mt-2 flex items-center text-gray-700"
                                            >
                                                <!-- Heroicon name: solid/clock -->
                                                <svg
                                                    class="mr-2 h-5 w-5 text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                09:00 AM
                                            </time>
                                        </div>
                                        <a
                                            href="#"
                                            class="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                                            >Edit<span class="sr-only"
                                                >, Maple syrup museum</span
                                            ></a
                                        >
                                    </li>

                                    <li
                                        class="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                                    >
                                        <div class="flex-auto">
                                            <p
                                                class="font-semibold text-gray-900"
                                            >
                                                Laboratory Examination
                                            </p>
                                            <time
                                                datetime="2022-01-22T19:00"
                                                class="mt-2 flex items-center text-gray-700"
                                            >
                                                <!-- Heroicon name: solid/clock -->
                                                <svg
                                                    class="mr-2 h-5 w-5 text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                09:00 AM
                                            </time>
                                        </div>
                                        <a
                                            href="#"
                                            class="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                                            >Edit<span class="sr-only"
                                                >, Hockey game</span
                                            ></a
                                        >
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <div
        v-show="addSLideOver"
        class="fixed inset-0 overflow-hidden z-20"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute inset-0 bg-gray-500 bg-opacity-75"
                aria-hidden="true"
            >
                <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
                    <div class="w-screen max-w-md">
                        <form
                            class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
                        >
                            <div class="flex-1 h-0 overflow-y-auto">
                                <div class="py-6 px-4 bg-primary sm:px-6">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <h2
                                            class="text-lg font-medium text-white"
                                            id="slide-over-title"
                                        >
                                            New Appointment
                                        </h2>
                                        <div class="ml-3 h-7 flex items-center">
                                            <button
                                                @click="addSLideOver = false"
                                                type="button"
                                                class="bg-primary rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            >
                                                <span class="sr-only"
                                                    >Close panel</span
                                                >
                                                <Icon
                                                    class="h-6 w-6"
                                                    icon="ph:x"
                                                    width="20"
                                                    height="20"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-1">
                                        <p class="text-sm text-gray-200">
                                            Get started by filling in the
                                            information below to create your new
                                            appoinment.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="flex-1 flex flex-col justify-between"
                                >
                                    <div
                                        class="px-4 divide-y divide-gray-200 sm:px-6"
                                    >
                                        <div class="space-y-6 pt-6 pb-5">
                                            <div class="mt-4">
                                                <MiniCalendar />
                                            </div>
                                            <div>
                                                <label
                                                    for="description"
                                                    class="block text-sm font-medium text-gray-900"
                                                >
                                                    Choose Time Schedule
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        type="time"
                                                        name="time"
                                                        id="time"
                                                        class="shadow-sm sm:text-sm focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    class="text-sm font-medium text-gray-900"
                                                    >Appoinment</label
                                                >
                                                <p
                                                    class="text-sm leading-5 text-gray-500"
                                                >
                                                    Choose the type of
                                                    Appointment.
                                                </p>
                                                <div class="space-y-5 mt-4">
                                                    <div
                                                        class="relative flex items-start"
                                                    >
                                                        <div
                                                            class="flex items-center h-5"
                                                        >
                                                            <input
                                                                id="small"
                                                                aria-describedby="small-description"
                                                                name="plan"
                                                                type="radio"
                                                                checked
                                                                class="focus:ring-secondary/80 h-4 w-4 text-secondary border-gray-300"
                                                            />
                                                        </div>
                                                        <div
                                                            class="ml-3 text-sm"
                                                        >
                                                            <label
                                                                for="small"
                                                                class="font-medium text-gray-700"
                                                                >Dental
                                                                Examination</label
                                                            >
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="relative flex items-start"
                                                    >
                                                        <div
                                                            class="flex items-center h-5"
                                                        >
                                                            <input
                                                                id="medium"
                                                                aria-describedby="medium-description"
                                                                name="plan"
                                                                type="radio"
                                                                class="focus:ring-secondary/80 h-4 w-4 text-secondary border-gray-300"
                                                            />
                                                        </div>
                                                        <div
                                                            class="ml-3 text-sm"
                                                        >
                                                            <label
                                                                for="medium"
                                                                class="font-medium text-gray-700"
                                                                >Physical
                                                                Examination</label
                                                            >
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="relative flex items-start"
                                                    >
                                                        <div
                                                            class="flex items-center h-5"
                                                        >
                                                            <input
                                                                id="large"
                                                                aria-describedby="large-description"
                                                                name="plan"
                                                                type="radio"
                                                                class="focus:ring-secondary/80 h-4 w-4 text-secondary border-gray-300"
                                                            />
                                                        </div>
                                                        <div
                                                            class="ml-3 text-sm"
                                                        >
                                                            <label
                                                                for="large"
                                                                class="font-medium text-gray-700"
                                                                >Laboratory
                                                                Examination</label
                                                            >
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="relative flex items-start"
                                                    >
                                                        <div
                                                            class="flex items-center h-5"
                                                        >
                                                            <input
                                                                id="large"
                                                                aria-describedby="large-description"
                                                                name="plan"
                                                                type="radio"
                                                                class="focus:ring-secondary/80 h-4 w-4 text-secondary border-gray-300"
                                                            />
                                                        </div>
                                                        <div
                                                            class="ml-3 text-sm"
                                                        >
                                                            <label
                                                                for="large"
                                                                class="font-medium text-gray-700"
                                                                >X-ray</label
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex-shrink-0 px-4 py-4 flex justify-end"
                            >
                                <button
                                    @click="addSLideOver = false"
                                    type="button"
                                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
