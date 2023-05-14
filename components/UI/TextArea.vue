<script setup>
const { textarea, input } = useTextareaAutosize();

const props = defineProps({
  modelValue: String,
  placeholder: String,
});

input.value = props.modelValue;

watch(
  () => props.modelValue,
  () => {
    input.value = props.modelValue;
  },
  { deep: true }
);

defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <textarea
      ref="textarea"
      v-model="input"
      class="resize-none"
      :placeholder="placeholder"
      @keyup.shift.enter.exact="input += '\n'"
      @input="$emit('update:modelValue', input)"
    >
    {{ input }}
    </textarea>
  </div>
</template>
