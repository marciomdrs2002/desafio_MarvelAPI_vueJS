<template>
    <div class="container">
        <NavIcon :name="'Contact'" />

        <div class="main">
            <form @submit.prevent="submit" ref="formContact">
                <LabelInput v-model="form.name" :label-title="'Name'" :type-name="'name'"
                    :placeholder="'Ex: Your full name'" />
                <LabelInput v-model="form.email" :label-title="'Email'" :type-name="'email'"
                    :placeholder="'Ex.: myemail@email.com'" />
                <LabelInput v-model="form.phone" :label-title="'Phone'" :type-name="'text'"
                    :placeholder="'Ex.: (99) 9 9999-9999'" />
                <!--                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                <LabelInput v-model="form.message" :label-title="'Message'" :text-area="true"
                    :placeholder="'Ex.: Contact message for Marvel'" />

                <button :disabled="!isFormValid" :class="{ 'submit-btn': true, 'active-btn': isFormValid }"
                    type="submit">Send</button>

            </form>
        </div>

        <div v-if="showModal" class="modal-overlay d-flex align-items-center">
            <div class="modal mt-5" tabindex="-1" role="dialog" style="display: block; margin: auto;">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <small>
                                Message sent successfully
                            </small>
                            <button type="button" class="btn-close" @click="resetForm"></button>
                        </div>
                        <div class="modal-body p-4">
                            <span>
                                Thank you, we'll reach you as soon as <br>
                                possible
                            </span>
                        </div>
                        <div class="modal-footer">
                            <router-link style="text-decoration: none;" class="w-100 d-flex justify-content-end" to="/">
                                <button type="button" class="submit-btn active-btn">Close</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavIcon from '@/components/NavIcon.Vue';
import LabelInput from '@/components/LabelInput.vue';

import axios from 'axios'
import { reactive, watch, ref } from 'vue'

const form = reactive({
    name: null,
    email: null,
    phone: null,
    message: null
})
const showModal = ref(false);
const isFormValid = ref(false); //variavel de controle, botão de submit só fica ativo quando o form estiver todo preenchido

const formContact = ref(null)

watch(
    [() => form.name, () => form.email, () => form.phone, () => form.message],
    ([name, email, phone, message]) => {
        if (name && email && phone && message) {
            isFormValid.value = true;
        } else {
            isFormValid.value = false;
        }
    }
);

function submit() { //simução de requisição
    showModal.value = true // Optei por fazer o controle por uma variavel, e nao pelo boostrap direto, pois em uma situação real, esperamos a response da requisição para mostrar ou nao mostrar algo

    /*  axios.post('#', form)
         .then(function (response) {
             if(response.data == 'success'{
                showModal.value = true   <-----
             })
         })
         .catch(function (error) {
             console.error(error);
         }); */
}

function resetForm() {
    form.name = null;
    form.email = null;
    form.phone = null;
    form.message = null;

    showModal.value = false
    /*     formContact.value.reset(); */ /* não zera o form */
}


</script>

<style scoped>
.active-btn {
    background-color: #EC1D24 !important;
    color: #ffffff !important;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.submit-btn {
    background-color: #CCCCCC;
    border: none;
    height: 2.5em;
    border-radius: 4px;
    width: 100%;
    color: #767676;
}

@media (min-width: 1200px) {
    .submit-btn {
        width: 96px;
    }

}
</style>