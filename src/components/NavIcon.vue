<template>
    <div class="main mt-4 mb-4 d-flex align-items-center" style="gap: 0.5em;">
        <router-link to="/"> <ion-icon style="color: #767676;" name="home-outline"></ion-icon> </router-link>
        <router-link :to="{ name: name }"> <small class="text"> {{ name }} </small> </router-link>
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