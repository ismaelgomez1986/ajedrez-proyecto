<template>
<v-container-fluid class="explanation-piece">
    <v-row justify="center">
        <h3 class> ¿Cómo se juega?</h3>
        <h5>Conoceremos características importantes de cada pieza</h5>
        <v-col class="explanation-piece__card" v-for="(item, index) in pieces" :key="index" cols="12" sm="6" lg="4">
            <PieceCard :piece="item" />
        </v-col>
    </v-row>
</v-container-fluid>
</template>

<script>
import PieceCard from '@/components/PieceCard';

import {
    mapState
} from 'vuex';

export default {
    name: 'HowToPlay',
    components: {
        PieceCard
    },

    data() {
        return {

        }
    },
    computed: {
        ...mapState(["pieces"]),
    },

}
</script>

<style lang="scss" scoped>
.explanation-piece {
    font-family: "Merriweather", sans-serif;
    background-color: black !important;
    padding: 5% 0;
    width: 100%;
    height: auto;
    color: grey;
}

h3, h5 {
margin-left: 10%;
}
</style>
