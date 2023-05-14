<script setup>
const props = defineProps({
  modelValue: String,
  namesButton:Array,
});
const emit = defineEmits(['update:modelValue'])
const updateValue = () => {
    emit("update:modelValue", event.target.value)
}
const value = ref(props.modelValue)  
</script>

<template>
  <div
    class="flex items-center justify-start "
  >
    <div 
      v-for="button in namesButton"
      :key="namesButton"
      class="flex ml-3 mt-3"
    >
      <input 
        v-model="value"
        :name="button.group" 
        type="radio"
        @change="updateValue" 
        :id = "button.name" 
        :value="button.value"  
      />
      <label 
        class="pl-3" 
        :for="button.name">
        {{ button.name }}
      </label>
    </div>

  </div>
</template>



