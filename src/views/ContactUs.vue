<template>
<b-container-fluid class="contact-section">
    <h1 class=" Titulo text-center display-4 my-4">¡Contáctenos!</h1>

    <form class="form" action="https://formspree.io/f/mnqwpkpb" method="POST">
        <div class="form__container">
            <input type="text" class="form__input" placeholder="Nombre:" name="name">
            <input type="email" class="form__input" placeholder="Email:" name="_replyto">
            <textarea class="form_inputform_input--message" placeholder="Mensaje:" name="message"></textarea>

            <input type="submit" value="Enviar" class="form__cta">
        </div>
    </form>

</b-container-fluid>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

@media(max-width: 450px) {}

* {

    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.contact-section {
    padding: 5% 0;
    background: linear-gradient(70deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 82%, rgba(255, 255, 255, 1) 100%);
}

.form {

    background: rgb(0, 0, 0);
    background: linear-gradient(248deg, rgba(0, 0, 0, 1) 0%, rgba(191, 191, 191, 1) 30%, rgba(255, 255, 255, 1) 58%, rgba(255, 255, 255, 1) 82%, rgba(255, 255, 255, 1) 100%);
    width: 90%;
    margin: auto;
    max-width: 400px;
    border-radius: 1em;
    padding: 3.5em;

}

.form__container {
    width: 100%;
    display: grid;
    gap: 1em;
    grid-auto-columns: 100%;

}

.form__input {

    font-family: inherit;
    font-size: 1rem;
    padding: .8rem 1em;
    /* outline: none;
  border: none; */
    border: 1px solid #bbb0bb;
    border-radius: 2rem;

}

.form_inputform_input--message {
    padding: .5rem 0 0 1rem;
    resize: none;
    height: 10rem;
    margin-bottom: .5em;
    border: 1px solid #bbb0bb;
    border-radius: .5rem;
}

.form__cta {

    font-family: inherit;
    background-color: #000000;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    padding: .7em 0;
    border-radius: .2em;
    cursor: pointer;
    font-weight: 400;
    border-radius: 2rem;

}

.form__title {
    text-align: center;
    font-size: 1.9rem;
    margin-bottom: .4em;
}

/* redes sociales */
</style>
