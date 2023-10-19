<template>
    <li>
        <router-link :to="{ name: link }">
            <button style="color: white;">
                {{ text }}
            </button>
        </router-link>
    </li>
</template>
    
<script setup>
const props = defineProps({
    text: String,
    color: String,
    link: String
});
</script>
    
<style scoped>
li {
    list-style: none;
    font-size: 20px;
    font-weight: 500;
}

button {
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    padding: 0;
}
</style>
  