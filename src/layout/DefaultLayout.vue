<template>
    <div>
        <div class="header d-flex justify-content-between align-items-center p-2">
            <img src="../assets/images/marvel.svg" />

            <div class="menu d-none d-lg-block">
                <ul class="d-flex m-0" style="gap: 2em;">
                    <div v-for="item in menuItems">
                        <router-link :to="{ name: item.link }">
                            <MenuButton @click="toggleCollapse" :text="item.text" />
                        </router-link>
                    </div>
                </ul>
            </div>
            <!-- Mobile -->
            <button class="btn d-lg-none" type="button" @click="toggleCollapse">
                <ion-icon :name="isCollapsed ? 'close-outline' : 'menu-outline'"
                    style="color: white; font-size: 48px;"></ion-icon>
            </button>
        </div>
        <!-- Mobile -->
        <div v-if="isCollapsed" class="d-lg-none position-absolute w-100 h-100" :class="{ show: isCollapsed }"
            style="z-index: 9999; background-color: #EC1D24;">
            <div class="divider mb-3 m-auto"></div>

            <div class="menu">
                <ul class="d-flex flex-column" style="gap: 2em;">
                    <li class="list-unstyled" v-for="item in menuItems">
                        <router-link :to="{ name: item.link }">
                            <MenuButton @click="toggleCollapse" :text="item.text" />
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <slot />
</template>
  

<script setup>
import MenuButton from '../components/MenuButton.vue';
import { ref } from 'vue';


const menuItems = [
    { link: 'Home', text: 'home' },
    { link: 'Characters', text: 'characters' },
    { link: 'Comics', text: 'comics' },
    { link: 'Events', text: 'events' },
    { link: 'Contact', text: 'contact' },
];
const isCollapsed = ref(false);

function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style>
.router-link-exact-active {
    border-bottom: 2px solid white;
    font-weight: 700;
    text-decoration: none;
}
</style>


<style scoped>
.header {
    background-color: #EC1D24;
}

.header img {
    width: 25%;
}

.divider {
    height: 1px;
    background-color: #9F0013;
    width: 90%;
}
@media (min-width: 992px) {

    .header {
        padding-left: 80px !important;
        padding-right: 80px !important;
    }

    .header img {
        width: 139px;
    }

}
</style>