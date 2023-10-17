<template>
    <div :class="[desk ? 'desk' : 'mobile']" style="display: flex;
    align-items: center;
    gap: 0.5em;">
        <ion-icon style="color: #767676;" name="home-outline"></ion-icon>
        <span class="text"> {{ name }} </span>
        <span v-if="subName"> /</span>
        <span v-if="subName">{{ subName }}</span>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    subName: String,
    desk: Boolean
});
</script>

<style scoped>
.mobile {
    padding: 1.5em 0;
}

.desk {
    padding: 32px 0;
}

span {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
}
</style>