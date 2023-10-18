<template>
    <div class="container">
        <NavIcon :name="'Home'" />

        <div class="body">
            <img class="pb-4" src="@/assets/images/marvelgray.svg" alt="icone da marvel cinza">
            <h1 class="d-none d-md-block" style="font-size: 32px !important;">WELCOME TO MARVEL'S DIRECTORY</h1>
            <h3 class="d-lg-none">WELCOME TO MARVEL'S DIRECTORY</h3>
        </div>
    </div>
</template>

<script setup>
import NavIcon from '@/components/NavIcon.Vue';
</script>

<style scoped>
.body {
    padding-top: 13em;
    text-align: center;
}

.body img {
    width: 50%;
}

@media (min-width: 992px) {
    .body {
        padding-top: 248px;
    }

    .body img {
        width: 25%;
    }
}
</style>