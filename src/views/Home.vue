<template>
<v-app>
    <Intro />
    <Hero />
    <HowToPlay />
    <HeroTwo/>
    <Game/>
    <HeroThree/>
    <ContactUs/>
    <Footer/>
</v-app>
</template>

<script>
import Hero from '../views/Hero';
import Intro from '../views/Intro';
import HowToPlay from '../views/HowToPlay';
import HeroTwo from '../views/HeroTwo';
import ContactUs from '../views/ContactUs';
import Footer from '../components/Footer';
import Game from '../views/Game';
import HeroThree from '../views/HeroThree';

export default {
    name: 'Home',
    components: {
        Hero,
        HeroTwo,
        HeroThree,
        Intro,
        HowToPlay,
        Game,
        ContactUs,
        Footer,
    },



}
</script>
