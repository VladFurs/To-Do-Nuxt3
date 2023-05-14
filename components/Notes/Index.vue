<script setup>
const props = defineProps({
  notes: {
    type: Array,
    required: true,
  },
})
let sortType = ref('defolt')

</script>
<template>  
  <div
    class=" px-4"
    >
    <div>
      <select
        v-model="sortType"
        @change="$emit('sorting', sortType )"
        v-if="notes.length"
        name="Сортировать по ..."
        
        class=" block ml-auto w-80 h-10 lock rounded-2xl pl-4 w-80 h-8 border-4 border-green-400 "
      >
          <option  selected value="defolt">Сортировать по ....</option>
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
          alt="Empty" width="48" 
          class="mt-3" 
        />
        <div  
          class="empty-list__title">
          Список дел пуст
        </div>
      </div>
      <ul>
        <li
          class=" flex justify-between lock rounded-2xl pl-4 w-full justify-center items-center h-10 mt-4 text-sm border-green-400 border-4"
          :class="{disable:!note.isDisable}"
          v-for="note in notes"
          :key="note.id"
        >
       <div
       class="flex justify-center items-center "
       >
          <button
          @click="$emit('redaction', note.id,'chenge')"
          data-action="chenge"
          class=" me-3"
          >
            <img src="../../img/Bina-pencil-green.svg" width="25" height="25" alt="">
          </button>
          <ui-text-area
            v-model="note.title"
          />
          <p 
            class=" whitespace-pre"  
            :class="{done:note.iscompleted}"
          >
            {{ note.title }}
          </p>

       </div>
        
          <div
          class="flex justify-center items-center"
          >
            <p  v-if="note.typeNoteValue === 'HomeNote'"><Icon name="dashicons:admin-home" /></p>
            <p v-else-if="note.typeNoteValue === 'WorkNote'"> <Icon  name="dashicons:businessman" /></p>
            <span v-else></span>
            <span 
              :class="{done:note.iscompleted}"
              class="pr-5">
              {{note.date}}
            </span>
                <button
                  @click="$emit('redaction', note.id,'done')"
                  type="button"
                  data-action="done"
                  :class="{done:note.iscompleted}"
                >
                  <img 
                    src="../../img/tick.svg" 
                    alt="Done" 
                    width="18" 
                    height="18" 
                    class="mr-5 border w-8 h-8 p-1 border-4 border-green-400 rounded-full"
                  />
                </button>
                <button
                @click="$emit('redaction', note.id,'delete')"
                  type="button"
                  data-action="delete"
                  :class="{done:note.iscompleted}"
                >
                  <img 
                    src="../../img/cross.svg" 
                    alt="Done" 
                    width="18" 
                    height="18" 
                    class="mr-5 border w-8 h-8 p-1 border-4 border-red-600 rounded-full"
                  />
                </button> 
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.done{
  opacity: 0.5;
  text-decoration: line-through;
  
}
.disable{
  border-color: black;
}
</style>





