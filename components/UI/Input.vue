<script setup>

const input = ref('');
const props = defineProps({
  modelValue: String,
  placeholder: String,
});

watch(
  () => props.modelValue,
  () => {
    input.value = props.modelValue;
  },
  { deep: true },
);

defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <input
      :placeholder="placeholder"
      @input="$emit('update:modelValue',input)"
      class=" w-96 h-5 "
      v-model="input"
    >
  </div>
</template>
