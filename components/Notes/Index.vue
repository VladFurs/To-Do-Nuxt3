<script setup>
  const props = defineProps({
    notes: {
      type: Array,
      required: true,
    },
  });
  const emit = defineEmits("name", id, actions);
  const redaction = (id, actions) => {
    emit("redaction", id, actions);
  };
  let sortType = ref("defolt");
</script>
<template>
  <div class="px-4">
    <div>
      <select
        v-model="sortType"
        @change="$emit('sorting', sortType)"
        v-if="notes.length"
        name="Сортировать по ..."
        class="block ml-auto  lock rounded-2xl pl-4 w-80 h-8 border-4 border-green-400"
      >
        <option
          selected
          value="defolt"
        >
          Сортировать по ....
        </option>
        <option value="Date">Датe создания</option>
        <option value="Work">Рабочие заметки</option>
        <option value="Home">Домашние заметки</option>
      </select>
      <div
        v-if="!notes.length"
        id="emptyList"
        class="flex flex-col justify-center items-center"
      >
        <img
          src="../../img/leaf.svg"
          alt="Empty"
          width="48"
          class="mt-3"
        />
        <div class="empty-list__title">Список дел пуст</div>
      </div>
      <ul>
        <notes-note
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @redaction="redaction"
        />
      </ul>
    </div>
  </div>
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
