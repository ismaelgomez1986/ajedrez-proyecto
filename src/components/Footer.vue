<template>
<div>
    <div class="footer">
        <div class="chess-footer">
            <div class="redes">
                <a href="https://es-la.facebook.com/"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="link-id">
                <a href="https://github.com/ismaelgomez1986">
                    Creado por <span>Ismael Gómez.</span></a>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="scss">
.chess-footer {
    background-image: url("../assets/chess-footer.png");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
}

.footer {
    position: relative;
}

.link-id,
a {
    display: absolute;
    font-weight: bold;
    font-size: 20px;
    top: 10%;
    left: 10%;

    a {
        color: black;

        span {
            color: #000000;

        }
    }

}

.redes {
    font-size: 40px;
    padding-top: 175px;
    margin-left: 70px;

    a {
        padding-right: 15px;
        color: white !important;
    }
}

@media (max-width: 500px) {

    .chess-footer {
        background-image: none;
        height: 250px;
    }

    .redes {

        text-align: center;
        padding-top: 175px;
        margin-left: 15px;
    }
}
</style>
