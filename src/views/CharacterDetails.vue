<template>
    <div v-if="personagem && comics" class="container">
        <NavIcon :name="'Characters'" :subName="personagem?.name" />
        <div class="main row">
            <div class="img col-lg-4">
                <img class="img-fluid rounded pb-3 "
                    :src="`${personagem?.thumbnail.path}.${personagem?.thumbnail.extension}`"
                    :alt="`Foto do personagem ${personagem?.name}`">
            </div>
            <div class="col-lg-8">
                <h3>{{ personagem?.name }}</h3>
                <small style="line-height: 25px;" class="text-uppercase pt-3">{{ personagem?.description }}</small>
                <div class="comics mt-4">
                    <div>
                        <h3 class="mb-4">COMICS</h3>
                        <div class="row mx-auto">
                            <div v-for="(comic, index) in comics" :key="index" class="col-6 col-lg-3 card-group">
                                <Card :comic="true" :title="comic?.title" :pages="comic?.pageCount"
                                    :image="`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import NavIcon from '../components/NavIcon.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted, } from 'vue'
import axios from 'axios'
import Card from '../components/Card.vue';

const idCharacter = useRoute().params.id;
const personagem = ref();
const comics = ref();


function getCharacter() {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${idCharacter}`, {
        params: {
            ts: 45,
            apikey: '70f42db33e1dbbe0c79e2276acc59ba7',
            hash: 'c62ec8a9043cc90134e8466335e7e664'
        }
    })
        .then((response) => {
            personagem.value = response.data.data.results[0];
        })
        .catch((error) => {
            console.error('Erro ao chamar a API da Marvel:', error);
        });
}

function getComics() {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${idCharacter}/comics`, {
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
    getCharacter()
    getComics()
})




</script>

<style scoped></style>