<script setup>
import { useNotesStore } from '~/store'
const notesStore = useNotesStore()
console.log(notesStore(a));
  const { note } = defineProps({
    note: {
      type: Object,
      required: true,
    },
  });
 const emits = defineEmits('redaction')
</script>
<template>
  <li
    class="flex justify-between lock rounded-2xl pl-4 w-full items-center min-h-10 mt-4 text-sm border-green-400 border-4"
    :class="{ disable: !note.isDisable }"
  >
    <div class="flex justify-center items-center">
      <button
        @click="$emit('redaction', note.id, 'chenge')"
        data-action="chenge"
        class="me-3"
      >
        <img
          src="../../img/Bina-pencil-green.svg"
          width="25"
          height="25"
          alt=""
        />
      </button>
      <UI-text-area
        v-model="note.title"
        :class="{ done: note.iscompleted }"
        class="whitespace-pre"
        :isDisable="note.isDisable"
        :outlineNone="true"
      />
    </div>

    <div class="flex justify-center items-center">
      <p v-if="note.typeNoteValue === 'HomeNote'">
        <Icon name="dashicons:admin-home" />
      </p>
      <p v-else-if="note.typeNoteValue === 'WorkNote'">
        <Icon name="dashicons:businessman" />
      </p>
      <span v-else></span>
      <span
        :class="{ done: note.iscompleted }"
        class="pr-5"
      >
        {{ note.date }}
      </span>
      <button
        @click="$emit('redaction', note.id, 'done')"
        type="button"
        data-action="done"
        :class="{ done: note.iscompleted }"
      >
        <img
          src="../../img/tick.svg"
          alt="Done"
          width="18"
          height="18"
          class="mr-5 w-8 h-8 p-1 border-4 border-green-400 rounded-full"
        />
      </button>
      <button
        @click="$emit('redaction', note.id, 'delete')"
        type="button"
        data-action="delete"
        :class="{ done: note.iscompleted }"
      >
        <img
          src="../../img/cross.svg"
          alt="Done"
          width="18"
          height="18"
          class="mr-5 w-8 h-8 p-1 border-4 border-red-600 rounded-full"
        />
      </button>
    </div>
  </li>
</template>

<style>
  .done {
    opacity: 0.5;
    text-decoration: line-through;
  }
  .disable {
    border-color: black;
  }
</style>
