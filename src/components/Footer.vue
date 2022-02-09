<template>
<div>
    <div class="footer">
        <div class="dinofooter">
            <div class="redes">
                <a href="https://es-la.facebook.com/"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a>
            </div>

        </div>
        <div class="link-id">
            <a href="https://github.com/AdrianFigueroaA">
                Desarrollado por <span>Adrian Figueroa.</span></a>
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
.footer {
    background-image: url("../assets/horses.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
}

.dinofooter {
    background-image: url("../assets/dino-footer.svg");
    background-position: 80%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 300px;
}

.link-id {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;

    a {
        color: black;

        span {

            color: #099745;
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

    .dinofooter {
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
