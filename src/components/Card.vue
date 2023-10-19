<template>
    <div class="card">
        <img class="card-img-top rounded" :src="image ? image : '/src/assets/images/card_padrao.svg'">
        <div class="body pt-3 pb-3">
            <small class="card-title fw-bold text-uppercase" :class="!comic ? 'text-decoration-underline' : ''">{{ title }}</small>
            <p v-if="comic" class="card-subtitle mt-1">PAGES: {{ pages }}</p>
        </div>
        
    </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    comic: Boolean,
    pages: String
});
</script>

<style scoped>
.body p{
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}
.card {
    border: none;
}

.card img {
    height: 183px;
}
</style>