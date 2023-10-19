<template>
  <div class="container">
    <NavIcon :name="'Characters'" />
    <div class="row m-auto">
      <div v-for="(character, index) in characters" :key="index" class="col-6 col-lg-2 card-group mb-2">
        <Card :title="character.name" :image="`${character.thumbnail.path}.${character.thumbnail.extension}`"
          @click="redirect(character.id)" />
      </div>
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
const characters = ref(null);

async function fetchData() {
  const hash = '927b6946a62a46434906486fd1ac1ed2';
  try {
    const response = await axios.get('http://gateway.marvel.com/v1/public/characters', {
      params: {
        ts: 12,
        apikey: '70f42db33e1dbbe0c79e2276acc59ba7',
        hash: hash
      }
    });
    const data = response.data.data.results;
    characters.value = data;
  } catch (error) {
    console.error('Erro ao chamar a API da Marvel:', error);
  }
}

function redirect(characterId) {
  router.push({ name: 'CharacterDetails', params: { id: characterId } });
}



onMounted(() => {
  fetchData();
});

</script>

<style scoped></style>