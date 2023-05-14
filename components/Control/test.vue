<script setup>
const { textarea, input } = useTextareaAutosize()
const value = ref(modelValue)
const { modelValue } = defineProps({
  
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue","chenge"]);
const updateValue = (event) => {
  emit("update:modelValue", event.target.value)
  emit("chenge")
  value.value=''
}
const log = (e) => {
  let caret = e.target.selectionStart;
      e.target.setRangeText("\n", caret, caret, "end");
      modelValue = e.target.value;
  
}
</script>

<template>
  <div> 
    <textarea 
      @keydown.ctrl.enter.prevent.exact="log"
      @keydown.enter.prevent.exact="updateValue "
      wrap="soft"
      ref="textarea"
      v-model="value"
      class="resize-none lock rounded-2xl  pl-4 w-80 h-8 text-sm border-2 border-green-400 py-2 overflow-hidden"
      @change='updateValue'
      :placeholder="placeholder"
  >
    {{ value }}  
    </textarea>

  </div>
</template>


