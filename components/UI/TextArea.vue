<script setup>
const { textarea, input } = useTextareaAutosize();

const props = defineProps({
  modelValue: String,
  placeholder: String,
  isDisable: Boolean,
  outlineNone:Boolean,
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
      :readonly="isDisable"
      ref="textarea"
      v-model="input"
      :class="{ onlyText: outlineNone }"
      class="resize-none"
      :placeholder="placeholder"
      @keyup.shift.enter.exact="input += '\n'"
      @input="$emit('update:modelValue', input)"
    >
    {{ input  }}
    </textarea>
  </div>
</template>
<style scoped>
.onlyText{
  outline: none;
}
</style>