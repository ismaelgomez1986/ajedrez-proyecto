<template>
<v-container-fluid class="noticias">
</v-container-fluid>
</template>

<script>
export default {
    name: 'HeroThree',
}
</script>

<style lang="scss" scoped>
.noticias {
    margin: 0 auto 0 auto;
    width: 100%;
    height: 70vh;
    background-image: url('../assets/chess-world.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    background-color: black;

    @media (max-width: 992px) {
        height: 70vh;
    }

    @media (max-width: 768px) {
        height: 60vh;
    }
}
</style>
