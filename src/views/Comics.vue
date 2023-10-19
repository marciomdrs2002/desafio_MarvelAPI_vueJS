<template>
    <div class="container">
        <NavIcon :name="'Comics'" />
        <div class="main"  v-if="comics">
            <div class="row mx-auto">
                <div v-for="(comic, index) in comics" :key="index" class="col-6 col-lg-2 card-group">
                    <Card :comic="true" :title="comic?.title" :pages="comic?.pageCount"
                        :image="`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NavIcon from '@/components/NavIcon.vue'
import Card from '@/components/Card.vue';

const comics = ref(null);

function getComics() {
    axios.get('http://gateway.marvel.com/v1/public/comics', {
        params: {
            ts: 45,
            apikey: '70f42db33e1dbbe0c79e2276acc59ba7',
            hash: 'c62ec8a9043cc90134e8466335e7e664'
        }
    })
        .then((response) => {
            comics.value = response.data.data.results;
        })
        .catch((error) => {
            console.error('Erro ao chamar a API da Marvel:', error);
        })
}

onMounted(() => {
    getComics()
})
</script>

<style scoped>
</style>