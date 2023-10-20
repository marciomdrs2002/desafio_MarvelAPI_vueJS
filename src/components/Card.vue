<template>
    <div class="card mb-5" style="cursor: pointer;">
        <img class="card-img-top rounded" :src="image ? image : '/src/assets/images/card_padrao.svg'" :class="{'comic': pages}">
        <div class="body pt-3">
            <small class="card-title fw-bold text-uppercase" :class="{'text-decoration-underline' : !pages}">{{ title }}</small>
            <br>
            <small v-if="pages" class="card-subtitle mt-1">PAGES: {{ pages }}</small>
        </div>
        
    </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    pages: Number
});
</script>

<style scoped>
.comic{
    min-height: 15em !important;
}
.card {
border: none; /* Desabilitar para melhor visualização */
}
.card img {
    min-height: 11.437em;
    width: 10em !important;
}
</style>