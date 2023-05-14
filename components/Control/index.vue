<script setup>
  import { ref, watch, onMounted, computed } from "vue";
  const inputValue = ref("");
  const searchValue = ref("");
  const notes = ref([]);
  const typeOfSort = ref("defolt");
  const typeNoteValue = ref("HomeNote");
  const createNote = () => {
    if (!inputValue.value) return;
    const newNote = {
      id: Date.now(),
      title: inputValue.value,
      iscompleted: false,
      date: new Date().toLocaleString(),
      isDisable: true,
      typeNoteValue: typeNoteValue.value,
    };
    notes.value.push(newNote);
    inputValue.value = "";
  };

  const namesButton = [
    {
      value: "HomeNote",
      name: "Домашние заметки",
      group: "test",
    },
    {
      value: "WorkNote",
      name: "Рабочие заметки",
      group: "test",
    },
  ];
  const redactionNote = (id, actions) => {
    const element = notes.value.findIndex((el) => el.id === id);
    if (actions === "done") {
      notes.value[element].iscompleted = !notes.value[element].iscompleted;
    } else if (actions === "chenge") {
      notes.value[element].isDisable = !notes.value[element].isDisable;
    } else if (actions === "delete") {
      notes.value.splice(element, 1);
      return notes;
    }
  };

  watch(
    notes,
    async () => {
      localStorage.setItem("notes", JSON.stringify(notes.value));
    },
    { deep: true }
  );
  onMounted(() => {
    if (localStorage.getItem("notes") !== null) {
      const i = JSON.parse(localStorage.getItem("notes"));
      notes.value = i;
    }
  });
  const getIntrestingNote = async () => {
    let url = `https://www.boredapi.com/api/activity/`;
    const res = await fetch(url);
    const data = await res.json();
    const note = {
      id: Date.now(),
      title: data.activity,
      iscompleted: false,
      isDisable: true,
      date: new Date().toLocaleString(),
    };
    notes.value.push(note);
  };
  const deleteAllDoneNotes = () => {
    notes.value = notes.value.filter((note) => note.iscompleted === false);
  };

  const serchNotes = computed(() => {
    if (searchValue.value) {
      return notes.value.filter((note) =>
        note.title.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    } else if (typeOfSort.value === "defolt") {
      return notes.value;
    } else if (typeOfSort.value === "Work") {
      return notes.value.filter((note) => note.typeNoteValue === "WorkNote");
    } else if (typeOfSort.value === "Home") {
      return notes.value.filter((note) => note.typeNoteValue === "HomeNote");
    } else if (typeOfSort.value === "Date") {
      return notes.value.filter((note) => note.typeNoteValue === "HomeNote");
    } else {
      return notes.value;
    }
  });
  const test2 = sortType => typeOfSort.value = sortType;
</script>

<template>
  <div>
    <div class="flex-none">
      <div class="flex justify-between align-middle mt-3 mb-3 pr-4 pl-4">
        <UI-input
          @chenge="serchNotes"
          type="text"
          placeholder="Поиск"
          v-model="searchValue"
        />
        <UI-button
          @click="getIntrestingNote"
          text="Получить Интересное Задание"
          class="border-2 border-green-400 w-96 rounded-2xl text-center"
        />
      </div>
      <form
        @submit.prevent
        id="form"
      >
        <div class="flex justify-between align-middle mt-3 mb-3 pr-4 pl-4">
          <div class="flex justify-between align-middle">
            <UI-text-area
              type="textarea"
              @keydown.enter.prevent.exact="createNote"
              v-model="inputValue"
              placeholder="Добавить Новую Задачу"
            />
            <UI-button
              class="rounded-full border-2 w-8 h-8 border-green-400 flex justify-center items-center text-2xl pb-1 ml-5 text-green-400"
              @click="createNote"
              text="+"
            />
          </div>
          <UI-button
            @click="deleteAllDoneNotes"
            text=" Удалить выполненные задачи"
            class="border-2 border-green-400 w-96 rounded-2xl text-center"
          />
        </div>
      </form>
      <UI-radioButton
        v-model="typeNoteValue"
        :namesButton="namesButton"
      />
    </div>
    <Notes
      :notes="serchNotes"
      @sorting="test2"
      @redaction="redactionNote"
    />
  </div>
</template>
