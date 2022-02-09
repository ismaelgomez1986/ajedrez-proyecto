<template>
<div id="app">
    <Navigation />
    <transition name="slide-fade" mode="out-in">
        <router-view />
    </transition>
</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import firebase from "firebase";

export default {
    name: 'App',
    components: {
        Navigation,
    },

    data: () => ({
        bgNav: "rgb(0,0,0);"
    }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

#app {
    font-family: "Merriweather", sans-serif;
}

.slide-fade-enter-active {
    transition: all .4s ease;
}

.slide-fade-leave-active {
    transition: all .6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
</style>
