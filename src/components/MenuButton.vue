<template>
    <button style="color: white;">
        {{ text }}
    </button>
</template>
    
<script setup>
const props = defineProps({
    text: String,
    color: String,
});
</script>
    
<style scoped>
button {
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    padding: 0;
    font-size: 20px;
    font-weight: 500;
}
</style>
  