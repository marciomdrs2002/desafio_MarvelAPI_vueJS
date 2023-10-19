<template>
    <div class="main mt-4 mb-4" style="display: flex;
    align-items: center;
    gap: 0.5em;">
        <router-link to="/"> <ion-icon style="color: #767676;" name="home-outline"></ion-icon> </router-link>
        <small class="text"> {{ name }} </small>
        <small v-if="subName"> /</small>
        <small v-if="subName">{{ subName }}</small>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    subName: String,
});
</script>

<style scoped>
.main span {
    color: #767676 !important;
}

@media (min-width: 992px) {
    .main {
        padding: 32px 0;
    }

}
</style>