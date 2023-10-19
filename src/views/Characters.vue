<template>
    <div class="container">
        <NavIcon :name="'Characters'" />
        <div class="row">
            <div v-for="(character, index) in characters" :key="index" class="col-6">
                <Card :title="character.name" :image="`${character.thumbnail.path}.${character.thumbnail.extension}`"
                    @click="redirect(character.id)" />
            </div>
            <!-- Adicione mais itens conforme necessário -->
        </div>
    </div>
</template>

<script setup>
import NavIcon from '@/components/NavIcon.Vue';
import Card from '@/components/Card.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();

function redirect(characterId) {
    router.push({ name: 'characterDetails', params: { id: characterId } });
}

const characters = ref(null);

onMounted(() => {
    const hash = '927b6946a62a46434906486fd1ac1ed2'

    axios.get('http://gateway.marvel.com/v1/public/characters', {
        params: {
            ts: 12,
            apikey: '70f42db33e1dbbe0c79e2276acc59ba7',
            hash: hash
        }
    })
        .then(response => {
            const data = response.data.data.results
            return characters.value = data;
        })
        .catch(error => {
            console.error('Erro ao chamar a API da Marvel:', error);
        });
})







</script>

<style scoped></style>