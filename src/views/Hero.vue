<template>
<v-container-fluid class="noticias">
</v-container-fluid>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style lang="scss" scoped>
.noticias {
    margin: 0 auto 0 auto;
    width: 100%;
    height: 120vh;
    background-image: url('../assets/bg-chess.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    background-color: black;

    @media (max-width: 992px) {
        height: 110vh;
    }
        @media (max-width: 768px) {
        height: 90vh;
    }
}
</style>
