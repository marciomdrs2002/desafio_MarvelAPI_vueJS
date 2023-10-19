<template>
    <div class="mb-3 principal">
        <label class="mb-2" :for="labelTitle">{{ labelTitle }}</label>

        <textarea v-if="textArea" rows="4" class="form-control" :id="labelTitle" :value="modelValue" @blur="$emit('update:blur')"
            :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)"></textarea>

        <input v-else class="form-control" :class="{ 'error-style': error }" :id="labelTitle" :type="typeName" :placeholder="placeholder" :value="modelValue" @blur="$emit('update:blur')"
            @input="$emit('update:modelValue', $event.target.value)">

        <small v-if="error" id="emailHelp" style="color: #EC1D24 !important;" class="form-text">{{ error }}</small>

    </div>
</template>
  
<script setup>

const props = defineProps({
    typeName: String,
    placeholder: String,
    labelTitle: String,
    textArea: Boolean,
    modelValue: String,
    error: String,
});

const emit = defineEmits(['update:modelValue', 'update:blur']);
</script>
  
<style scoped>

.error-style{
    border: 1px solid #EC1D24;
}
.principal input:focus,
.principal textarea:focus {
    border: 1px solid #767676;
    box-shadow: none;
}

@media (min-width: 992px) {

    .principal textarea,
    input {
        width: 620px;
    }
}
</style>
  