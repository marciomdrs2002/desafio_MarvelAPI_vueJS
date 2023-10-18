<template>
    <div class="main" style="display: flex;
    align-items: center;
    gap: 0.5em;">
        <router-link to="/"> <ion-icon style="color: #767676;" name="home-outline"></ion-icon> </router-link>
        <span class="text"> {{ name }} </span>
        <span v-if="subName"> /</span>
        <span v-if="subName">{{ subName }}</span>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    subName: String,
});
</script>

<style scoped>
.main {
    padding: 1.5em 0;
}

.main span {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
}

@media (min-width: 992px) {
    .main {
        padding: 32px 0;
    }

}
</style>