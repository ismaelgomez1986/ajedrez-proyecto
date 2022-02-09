<template>
<div class="navigation-nav">
    <b-navbar toggleable="lg" type="dark" pb-5>
        <b-navbar-brand class="navigation-nav__logo" @click="scroll()" :to="{ name: 'Home' }">
            <img class="chess-logo" src="../assets/logo.png" alt="chess-logo" />
            <v-text class="navigation-nav__title">
                <h4>MundoAjedrez</h4>
            </v-text>
        </b-navbar-brand>

        <b-navbar-toggle light target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="
            $route.name === 'Home' ||
            $route.name === 'HowToPlay' ||
            $route.name === 'Games' ||
            $route.name === 'Exponents' ||
            $route.name === 'News' ||
            $route.name === 'ContactUs'">
                <b-nav-item id="inicio" @click="scroll()" :to="{ name: 'Home' }">
                    <span>Inicio</span>
                </b-nav-item>
                <b-nav-item id="howToPlay" @click="scroll()" :to="{ name: 'HowToPlay' }">
                    <span>Cómo Jugar</span>
                </b-nav-item>
                <b-nav-item id="games" @click="scroll()" :to="{ name: 'Games' }">
                    <span>Juegos</span>
                </b-nav-item>
                <b-nav-item id="exponents" @click="scroll()" :to="{ name: 'Exponents' }">
                    <span>Grandes Exponentes</span>
                </b-nav-item>
                <b-nav-item id="news" @click="scroll()" :to="{ name: 'News' }">
                    <span>Noticias</span>
                </b-nav-item>
                <b-nav-item id="contactUs" @click="scroll()" :to="{ name: 'ContactUs' }">
                    <span>Contáctanos</span>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "Navigation",
    data() {
        return {
            user: "",
            password: "",
        };
    },

    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.user, this.password)
                .then(
                    (user) => this.$router.push("Information"),
                    (error) => console.error(error)
                );
        },

        logOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.error("Sign Out Error", e);
                });
        },

        scroll() {
            // window.scrollTo(0,0)
            scroll({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style lang="scss">
.formulario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    font-family: "Merriweather", sans-serif;
}

.navigation-nav {
    vertical-align: middle;
    position: sticky;
    top: 0;
    z-index: 10;
background: linear-gradient(70deg, rgba(0,0,0,1) 0%, rgba(3,3,3,1) 88%, rgba(255,255,255,1) 91%, rgba(0,0,0,1) 94%, rgba(0,0,0,1) 100%);    & * {
        font-family: Merriweather;
    }

    &__title {

        margin: 10px 0 0 20px;

        & h2 {
            font-size: 1.7rem;
            //agregar @media para disminuir tamaño en dispositivos móviles
        }
    }

    &__logo * {
        display: inline-block;
    }
}

b-nav-item * {
    color: white;
    border: 1px solid black;
    font-family: "Merriweather", sans-serif;
}

.chess-logo {
    width: 40px;
}

.navbar-nav {
    display: flex;
    flex-direction: column;
    margin-left: 3.5rem;
    margin-bottom: 0;
    list-style: none;
    justify-content: start;
    align-items: start;
}

.navbar-toggler {
    border: none;
    color: none;

    &-icon {
        color: black
    }
}

.modal-footer {
    margin: auto;
}


@media (max-width: 500px) {
    .navbar-nav.ml-auto {
        display: none;
    }
}
</style>
