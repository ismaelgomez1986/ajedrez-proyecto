<template>
<div id="app">
    <v-card class="mx-auto container-card" max-width="344" height="400">
        <v-card-text>
            <div>Características</div>
            <p class="text-h4 text--primary italic">
                {{piece.name}}
            </p>
            <p>¿Cómo se mueve esta pieza?</p>
            <div class="text--primary justify">
                {{piece.move}}
            </div>
        </v-card-text>
        <v-card-actions class="bottom">
            <v-btn text color="teal accent-4" @click="reveal = true">
                ¡Descubre más!
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 80%;">
                <v-card-text class="pb-0">
                    <p class="text-h5 italic text--primary">
                        Tip Adicional
                    </p>
                    <p>Soy más información</p>
                    <!-- <p>{{piece.data.moreInfo}}</p> -->
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn class="bottom" text color="teal accent-4" @click="reveal = false">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-expand-transition>
    </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
        reveal: false,
    }),
    props: {
        piece: {
            type: Object
        }
    },
}
</script>

<style lang="scss" scoped>
#app {
    font-family: "Merriweather", sans-serif;
}

.italic {
    font-style: italic;
}

.container-card {
    position: relative;
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(209,209,209,1) 100%);
}

.bottom {
    position: absolute;
    bottom: 5%;
    left: 21%;
}

.justify {
    text-align: justify;
}

.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>
