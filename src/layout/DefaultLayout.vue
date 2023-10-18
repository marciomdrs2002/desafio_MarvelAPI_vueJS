<template>
    <div>
        <div class="header d-flex justify-content-between align-items-center p-3">
            <img src="@/assets/images/marvel.svg" />

            <!-- Mobile -->
            <button class="btn d-lg-none" type="button" @click="toggleCollapse">
                <ion-icon :name="isCollapsed ? 'close-outline' : 'menu-outline'"
                    style="color: white; font-size: 48px;"></ion-icon>
            </button>

        </div>
        <!-- Mobile -->
        <div v-if="isCollapsed" class=" d-lg-none position-absolute w-100 h-100" :class="{ show: isCollapsed }"
            style="z-index: 9999; background-color: #EC1D24;">
            <div class="divider mt-2"></div>

            <div class="menu">
                <ul class=" d-flex flex-column" style="gap: 2em; padding-left: 1em;">
                    <MenuButton @click="toggleCollapse" :link="'welcome'" :text="'HOME'" />
                    <MenuButton @click="toggleCollapse" :link="'contact'" :text="'CHARACTERS'" />
                    <MenuButton @click="toggleCollapse" :link="'welcome'" :text="'COMICS'" />
                    <MenuButton @click="toggleCollapse" :link="'welcome'" :text="'EVENTS'" />
                    <MenuButton @click="toggleCollapse" :link="'contact'" :text="'CONTACT'" />
                </ul>
            </div>
        </div>
    </div>
    <slot />
</template>
  

<script setup>
import { ref } from 'vue';
import MenuButton from '@/components/MenuButton.vue';




const isCollapsed = ref(false);
function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style>
/* Zerar as margens etc */
* {
    font-family: 'Roboto', sans-serif !important;
}

h1 {
    font-weight: 600 !important;
    color: #000000 !important;
    font-size: 48px !important;
}

h2 {
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 40px !important;
}

h3 {
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 26px !important;
}

h4 {
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 18px !important;
}

label,
small {
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #000000 !important;
}

span {
    font-weight: 400 !important;
    font-size: 16px !important;
    color: #000000 !important;
}
</style>

<style scoped>
.header {
    background-color: #EC1D24;
    height: 5rem;
}

.header img {
    width: 25%;
}

.divider {
    height: 1px;
    background-color: #9F0013;
    margin: 2em auto;
    width: 90%;
}


@media (min-width: 992px) {
    .header img {
        width: 139px;
        margin-left: 64px;
    }

}
</style>