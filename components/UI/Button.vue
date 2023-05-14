<script setup>
defineProps({
  text: {
    type:String,
    required: true,
  }
})
</script>

<template>
  <div>
    <button>
        {{text}}
        </button>
  </div>
</template>