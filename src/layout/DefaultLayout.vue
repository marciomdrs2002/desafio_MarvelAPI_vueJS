<template>
    <div>







        <!-- Mobile -->
        <div class="d-lg-none d-flex justify-content-between align-items-center p-3"
            style="background-color: #EC1D24; height: 5rem;">
            <img class="w-25" src="../assets/marvel.svg" />
            <button class="btn" type="button" @click="toggleCollapse">
                <ion-icon :name="isCollapsed ? 'close-outline' : 'menu-outline'"
                    style="color: white; font-size: 48px;"></ion-icon>
            </button>
        </div>

        <div v-if="isCollapsed" class="position-absolute w-100 h-100" :class="{ show: isCollapsed }"
            style="z-index: 9999; background-color: #EC1D24;">
            <div class="divider w-75 mt-2"></div>

            <div class="menu">
                <ul class="d-flex flex-column" style="gap: 2em; padding-left: 1em;">
                    <ButtonMenu @click="toggleCollapse" :link="'welcome'" :text="'HOME'" />
                    <ButtonMenu @click="toggleCollapse" :link="'contact'" :text="'CHARACTERS'" />
                    <ButtonMenu @click="toggleCollapse" :link="'welcome'" :text="'COMICS'" />
                    <ButtonMenu @click="toggleCollapse" :link="'welcome'" :text="'EVENTS'" />
                    <ButtonMenu @click="toggleCollapse" :link="'welcome'" :text="'CONTACT'" />
                </ul>
            </div>
        </div>
    </div>
    <slot />
</template>
  

<script setup>
import { ref } from 'vue';
import ButtonMenu from '../components/ButtonMenu.vue';




const isCollapsed = ref(false);
function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style>
/* Zerar as margens etc */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
</style>

<style scoped>
.divider {
    height: 1px;
    background-color: #9F0013;
    margin: 2em auto;
}
</style>