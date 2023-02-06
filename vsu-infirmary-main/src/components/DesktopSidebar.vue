<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div
            class="flex flex-col flex-grow bg-primary pt-5 pb-4 overflow-y-auto"
        >
            <div class="flex items-center flex-shrink-0 px-4">
                <img class="h-16 w-auto" src="/logo.png" alt="Easywire logo" />
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
    </div>
</template>
