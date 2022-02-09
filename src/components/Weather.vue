<template>
<div id="app">

</div>
</template>

<script>
export default {

    methods: {
        async weatherSearch() {
            try {
                const resp = await fetch('https://api.gael.cloud/general/public/clima/SCTB');
                const data = await resp.json();
                this.weather = data;
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        },
    },
}

</script>

<style>

</style>
