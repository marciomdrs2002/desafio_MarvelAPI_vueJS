<template>
    <div class="card mb-5">
        <div class="row">
            <div class="image col-lg-4 img-">
                <img class="card-img-top rounded img-fluid" :src="image ? image : '/src/assets/images/card_padrao.svg'">
            </div>
            <div class="col-lg-8">
                <div class="body pt-3 pb-3 ">
                    <h3 class="card-title text-uppercase">{{ title }}</h3>
                    <small class="card-text mt-1 text-uppercase">{{ desc }}</small>
                    <div>
                        <small class="card-text text-uppercase fw-bold">Date of the event: </small>
                        <small class="card-text text-uppercase">{{ date }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    image: String,
    title: String,
    desc: String,
    date: String,
});
</script>

<style>
.card {
    /* border: none; */
    /* Desabilitar para melhor visualização */
}

@media (min-width: 992px) {
    .card-img-top{
        min-height: 223px;
    }
}
</style>