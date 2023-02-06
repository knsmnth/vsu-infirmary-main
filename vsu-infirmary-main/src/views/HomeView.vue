<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

import DesktopSidebar from "../components/DesktopSidebar.vue";
import MiniCalendar from "../components/MiniCalendar.vue";

const profDropdown = ref(false);
const isMobile = ref(false);
const upcomingOptions = ref([false, false, false]);
const addSLideOver = ref(false);

const records = ref([
    {
        appointment_id: 1,
        name: "Dental Examination",
        amount: 500,
        status: "Success",
        date: "January 12, 2022",
    },
    {
        appointment_id: 2,
        name: "Physical Examination",
        amount: 100,
        status: "Success",
        date: "March 25, 2022",
    },
    {
        appointment_id: 3,
        name: "Laboratory Examination",
        amount: 650,
        status: "Success",
        date: "May 15, 2022",
    },
    {
        appointment_id: 4,
        name: "X-ray",
        amount: 450,
        status: "Success",
        date: "June 18, 2022",
    },
    {
        appointment_id: 5,
        name: "Dental Examination",
        amount: 500,
        status: "Unsuccessful",
        date: "July 22, 2022",
    },
]);
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
                class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
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
                <!-- Page header -->
                <div class="bg-white shadow">
                    <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div
                            class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
                        >
                            <div class="flex-1 min-w-0">
                                <!-- Profile -->
                                <div class="flex items-center">
                                    <img
                                        class="hidden h-16 w-16 rounded-full sm:block"
                                        src="/user.png"
                                        alt=""
                                    />
                                    <div>
                                        <div class="flex items-center">
                                            <img
                                                class="h-16 w-16 rounded-full sm:hidden"
                                                src="/user.png"
                                                alt=""
                                            />
                                            <h1
                                                class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate"
                                            >
                                                Good morning, Keana Samantha
                                                Laraga
                                            </h1>
                                        </div>
                                        <dl
                                            class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap"
                                        >
                                            <dt class="sr-only">Company</dt>
                                            <dd
                                                class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6"
                                            >
                                                <Icon
                                                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                    icon="ph:identification-card"
                                                    width="20"
                                                    height="20"
                                                />
                                                Infirmary No. 80825
                                            </dd>
                                            <dt class="sr-only">
                                                Account status
                                            </dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                                <button
                                    @click="addSLideOver = true"
                                    type="button"
                                    class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                                >
                                    Add appoinment
                                </button>
                                <RouterLink
                                    to="/calendar"
                                    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-secondary hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                                >
                                    View appoinments
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">
                            Upcoming Appointment
                        </h2>
                        <ul
                            role="list"
                            class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3 mt-3"
                        >
                            <li
                                class="relative col-span-1 flex shadow-xl rounded-md h-24"
                            >
                                <div
                                    class="flex-shrink-0 flex flex-col items-center justify-center w-20 bg-secondary text-gray-600 text-sm font-medium rounded-l-md"
                                >
                                    <p class="text-3xl font-bold">3</p>
                                    <p class="text-sm">Jan</p>
                                </div>
                                <div
                                    class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-primary rounded-r-md truncate"
                                >
                                    <div
                                        class="flex-1 px-4 py-2 text-md truncate"
                                    >
                                        <a
                                            href="#"
                                            class="text-white font-medium hover:text-gray-200"
                                        >
                                            Dental Examination
                                        </a>
                                        <p class="text-gray-200 text-sm">
                                            09:00 AM
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 pr-2">
                                        <button
                                            @click="
                                                upcomingOptions[0] =
                                                    !upcomingOptions[0]
                                            "
                                            type="button"
                                            class="w-8 h-8 bg-primary inline-flex items-center justify-center text-white rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                                            id="pinned-project-options-menu-0-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span class="sr-only"
                                                >Open options</span
                                            >
                                            <Icon
                                                class="h-5 w-5"
                                                icon="ph:dots-three-outline-vertical"
                                                width="20"
                                                height="20"
                                            />
                                        </button>
                                        <div
                                            v-show="upcomingOptions[0]"
                                            class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="pinned-project-options-menu-0-button"
                                            tabindex="-1"
                                        >
                                            <div class="py-1" role="none">
                                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-0"
                                                    >View</a
                                                >
                                            </div>
                                            <div class="py-1" role="none">
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-1"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-2"
                                                    >Remove</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li
                                class="relative col-span-1 flex shadow-xl rounded-md h-24"
                            >
                                <div
                                    class="flex-shrink-0 flex flex-col items-center justify-center w-20 bg-secondary text-gray-600 text-sm font-medium rounded-l-md"
                                >
                                    <p class="text-3xl font-bold">5</p>
                                    <p class="text-sm">Jan</p>
                                </div>
                                <div
                                    class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-primary rounded-r-md truncate"
                                >
                                    <div
                                        class="flex-1 px-4 py-2 text-md truncate"
                                    >
                                        <a
                                            href="#"
                                            class="text-white font-medium hover:text-gray-200"
                                        >
                                            Laboratory Examination
                                        </a>
                                        <p class="text-gray-200 text-sm">
                                            09:00 AM
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 pr-2">
                                        <button
                                            @click="
                                                upcomingOptions[1] =
                                                    !upcomingOptions[1]
                                            "
                                            type="button"
                                            class="w-8 h-8 bg-primary inline-flex items-center justify-center text-white rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                                            id="pinned-project-options-menu-0-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span class="sr-only"
                                                >Open options</span
                                            >
                                            <Icon
                                                class="h-5 w-5"
                                                icon="ph:dots-three-outline-vertical"
                                                width="20"
                                                height="20"
                                            />
                                        </button>
                                        <div
                                            v-show="upcomingOptions[1]"
                                            class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="pinned-project-options-menu-0-button"
                                            tabindex="-1"
                                        >
                                            <div class="py-1" role="none">
                                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-0"
                                                    >View</a
                                                >
                                            </div>
                                            <div class="py-1" role="none">
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-1"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-2"
                                                    >Remove</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li
                                class="relative col-span-1 flex shadow-xl rounded-md h-24"
                            >
                                <div
                                    class="flex-shrink-0 flex flex-col items-center justify-center w-20 bg-secondary text-gray-600 text-sm font-medium rounded-l-md"
                                >
                                    <p class="text-3xl font-bold">5</p>
                                    <p class="text-sm">Jan</p>
                                </div>
                                <div
                                    class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-primary rounded-r-md truncate"
                                >
                                    <div
                                        class="flex-1 px-4 py-2 text-md truncate"
                                    >
                                        <a
                                            href="#"
                                            class="text-white font-medium hover:text-gray-200"
                                        >
                                            Physical Examination
                                        </a>
                                        <p class="text-gray-200 text-sm">
                                            1:00 PM
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 pr-2">
                                        <button
                                            @click="
                                                upcomingOptions[2] =
                                                    !upcomingOptions[2]
                                            "
                                            type="button"
                                            class="w-8 h-8 bg-primary inline-flex items-center justify-center text-white rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                                            id="pinned-project-options-menu-0-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span class="sr-only"
                                                >Open options</span
                                            >
                                            <Icon
                                                class="h-5 w-5"
                                                icon="ph:dots-three-outline-vertical"
                                                width="20"
                                                height="20"
                                            />
                                        </button>
                                        <div
                                            v-show="upcomingOptions[2]"
                                            class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="pinned-project-options-menu-0-button"
                                            tabindex="-1"
                                        >
                                            <div class="py-1" role="none">
                                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-0"
                                                    >View</a
                                                >
                                            </div>
                                            <div class="py-1" role="none">
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-1"
                                                    >Edit</a
                                                >
                                                <a
                                                    href="#"
                                                    class="text-gray-700 block px-4 py-2 text-sm"
                                                    role="menuitem"
                                                    tabindex="-1"
                                                    id="pinned-project-options-menu-0-item-2"
                                                    >Remove</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <h2
                        class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"
                    >
                        Recent appointments
                    </h2>

                    <!-- Activity list (smallest breakpoint only) -->
                    <div class="shadow sm:hidden">
                        <ul
                            role="list"
                            class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                        >
                            <li>
                                <a
                                    href="#"
                                    class="block px-4 py-4 bg-white hover:bg-gray-50"
                                >
                                    <span class="flex items-center space-x-4">
                                        <span
                                            class="flex-1 flex space-x-2 truncate"
                                        >
                                            <!-- Heroicon name: solid/cash -->
                                            <svg
                                                class="flex-shrink-0 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            <span
                                                class="flex flex-col text-gray-500 text-sm truncate"
                                            >
                                                <span class="truncate"
                                                    >Payment to Molly
                                                    Sanders</span
                                                >
                                                <span
                                                    ><span
                                                        class="text-gray-900 font-medium"
                                                        >$20,000</span
                                                    >
                                                    USD</span
                                                >
                                                <time datetime="2020-07-11"
                                                    >July 11, 2020</time
                                                >
                                            </span>
                                        </span>
                                        <!-- Heroicon name: solid/chevron-right -->
                                        <svg
                                            class="flex-shrink-0 h-5 w-5 text-gray-400"
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
                                    </span>
                                </a>
                            </li>

                            <!-- More transactions... -->
                        </ul>

                        <nav
                            class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                            aria-label="Pagination"
                        >
                            <div class="flex-1 flex justify-between">
                                <a
                                    href="#"
                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                >
                                    Previous
                                </a>
                                <a
                                    href="#"
                                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                >
                                    Next
                                </a>
                            </div>
                        </nav>
                    </div>

                    <!-- Activity table (small breakpoint and up) -->
                    <div class="hidden sm:block">
                        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="flex flex-col mt-2">
                                <div
                                    class="align-middle min-w-full overflow-x-auto shadow-xl overflow-hidden sm:rounded-lg"
                                >
                                    <table
                                        class="min-w-full divide-y divide-gray-200 pt-2"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-6 py-3 bg-primary text-left text-xs font-medium text-white uppercase tracking-wider"
                                                >
                                                    Appoinment
                                                </th>
                                                <th
                                                    class="px-6 py-3 bg-primary text-right text-xs font-medium text-white uppercase tracking-wider"
                                                >
                                                    Amount
                                                </th>
                                                <th
                                                    class="hidden px-6 py-3 bg-primary text-left text-xs font-medium text-white uppercase tracking-wider md:block"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    class="px-6 py-3 bg-primary text-right text-xs font-medium text-white uppercase tracking-wider"
                                                >
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="bg-white divide-y divide-primary"
                                        >
                                            <tr
                                                class="bg-white"
                                                v-for="record in records"
                                            >
                                                <td
                                                    class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                                >
                                                    <div class="flex">
                                                        <a
                                                            href="#"
                                                            class="group inline-flex space-x-2 truncate text-sm"
                                                        >
                                                            <p
                                                                class="text-gray-500 truncate group-hover:text-gray-900"
                                                            >
                                                                {{
                                                                    record.name
                                                                }}
                                                            </p>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td
                                                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                                                >
                                                    <span
                                                        class="text-gray-900 font-medium"
                                                        >₱{{ record.amount }}
                                                    </span>
                                                </td>
                                                <td
                                                    class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block"
                                                >
                                                    <span
                                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary capitalize"
                                                    >
                                                        {{ record.status }}
                                                    </span>
                                                </td>
                                                <td
                                                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                                                >
                                                    <time
                                                        datetime="2020-07-11"
                                                        >{{ record.date }}</time
                                                    >
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- Pagination -->
                                    <nav
                                        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                        aria-label="Pagination"
                                    >
                                        <div class="hidden sm:block">
                                            <p class="text-sm text-gray-700">
                                                Showing
                                                <span class="font-medium"
                                                    >1</span
                                                >
                                                to
                                                <span class="font-medium"
                                                    >5</span
                                                >
                                                of
                                                <span class="font-medium"
                                                    >5</span
                                                >
                                                results
                                            </p>
                                        </div>
                                        <div
                                            class="flex-1 flex justify-between sm:justify-end"
                                        >
                                            <a
                                                href="#"
                                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                Previous
                                            </a>
                                            <a
                                                href="#"
                                                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                Next
                                            </a>
                                        </div>
                                    </nav>
                                </div>
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
