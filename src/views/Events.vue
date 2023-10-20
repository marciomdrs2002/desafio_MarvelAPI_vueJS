<template>
    <div class="container">
        <NavIcon :name="'Events'" />
        <div class="main row mx-auto" v-if="events">
                <div v-for="(event, index) in events" :key="index" class="col-12 col-lg-6 card-group">
                    <EventCard :image="`${event.thumbnail.path}.${event.thumbnail.extension}`" :title="event.title" :desc="event.description"
                    :date="formatDate(event.start)" />
                </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import NavIcon from '../components/NavIcon.vue'
import EventCard from '../components/EventCard.vue'

const events = ref(null);

function getEvents() {
    axios.get('https://gateway.marvel.com/v1/public/events', {
        params: {
            ts: 45,
            apikey: '70f42db33e1dbbe0c79e2276acc59ba7',
            hash: 'c62ec8a9043cc90134e8466335e7e664'
        }
    })
        .then((response) => {
            events.value = response.data.data.results;
        })
        .catch((error) => {
            console.error('Erro ao chamar a API da Marvel:', error);
        })
}

function formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('pt-BR');
      return formattedDate;
    }

onMounted(() => {
    getEvents()
})
</script>

<style scoped></style>