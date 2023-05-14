<script setup>
const { textarea, input } = useTextareaAutosize();

</script>
<template>  
  <div
    class=" px-4"
    >
    <div>
      <ul>
        <li>
          <button
                @click="$emit('redaction', note.id,'chenge')"
                data-action="chenge"
                class=" me-3"
                >
                  <img src="../img/Bina-pencil-green.svg" width="25" height="25" alt="">
            </button>
          <textarea
          ref="textarea"
          v-model="input"
          class="resize-none w-full"
          >
            <slot name="title"></slot> 
          </textarea>
          <p  
            v-if="note.typeNoteValue === 'HomeNote'">
            <Icon name="dashicons:admin-home" />
          </p>
          <p 
            v-else-if="note.typeNoteValue === 'WorkNote'"> 
            <Icon  name="dashicons:businessman" />
          </p>
          <span 
            :class="{done:note.iscompleted}"
            class="pr-5">
            <slot name="date"></slot>
          </span>
          <button
            @click="$emit('redaction', note.id,'done')"
            type="button"
            data-action="done"
            :class="{done:note.iscompleted}"
          >
            <img 
              src="../img/tick.svg" 
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
              src="../img/cross.svg" 
              alt="Done" 
              width="18" 
              height="18" 
              class="mr-5 border w-8 h-8 p-1 border-4 border-red-600 rounded-full"
            />
          </button> 
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



