<template>
<v-app>
    <Intro />
    <Hero />
    <HowToPlay />
    <HeroTwo/>
    <Exponents/>
</v-app>
</template>

<script>
import Hero from '../views/Hero';
import Intro from '../views/Intro';
import HowToPlay from '../views/HowToPlay';
import HeroTwo from '../views/HeroTwo';
import Exponents from '../views/Exponents';


export default {
    name: 'Home',
    components: {
        Hero,
        HeroTwo,
        Intro,
        HowToPlay,
        Exponents,
    },



}
</script>
