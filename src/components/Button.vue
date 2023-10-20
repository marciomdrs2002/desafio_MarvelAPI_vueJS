<template>
    <button :disabled="disable" type="button" :class="{ 'disable-btn': disable, 'active-btn': true }">{{ content }}</button>
</template>

<script setup>
const props = defineProps({
    content: String,
    disable: Boolean
});
</script>

<style scoped>
.active-btn {
    background-color: #EC1D24 ;
    color: #ffffff ;
    border: none;
    height: 2.5em;
    border-radius: 4px;
    width: 100%;
}

.disable-btn {
    background-color: #CCCCCC !important;
    color: #767676 !important;
}

@media (min-width: 1200px) {
    .active-btn {
        width: 96px;
    }

}
</style>