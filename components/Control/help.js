
const deleteNote = (id) => {
  const element = notes.value.findIndex((note) => note.id === id);
  notes.value.splice(element, 1);
  return notes;
}
const doneNote = (id) => {
  const element = notes.value.findIndex((el) => el.id === id)
  notes.value[element].iscompleted = !notes.value[element].iscompleted
}
const getIntrestingNote = async () => {
let url = `https://www.boredapi.com/api/activity/`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  const note = {
    id: Date.now(),
    title: data.activity,
    iscompleted: false,
    date:new Date().toLocaleString()
  }
  notes.value.push(note)
}
const deleteAllDoneNotes = () => {
  notes.value = notes.value.filter((note) => note.iscompleted === false)
}

watch(notes, async () => {
  localStorage.setItem('notes', JSON.stringify(notes));
},
  { deep: true });
const serchNotes = computed(() => {
  // let p = notes.value
  if (searchValue.value) {
  //   p = p.filter((note) => note.title.indexOf((searchValue.value) !== -1))
  // return p
  // p = p.filter((note) => note.title.includes(searchValue.value)),
  // return p
    notes.value = notes.value.filter(note => note.title.toLowerCase().includes(searchValue.value.toLowerCase()))  
  return notes.value
  }

  // return p
})
onMounted(() => {
  if (localStorage.getItem('notes') !== null) {
  let i = JSON.parse(localStorage.getItem("notes"))
  notes.value = i.value
    
  }
//   if (notes.length !== 0) {
  // let i = JSON.parse(localStorage.getItem("notes"))
  // notes.value = i.value
//   }
})

// const value = ref(modelValue);
//   watch(value, () => {
//     emits("update:modelValue", value.value.trim());
//   },
//     { deep: true });
  
//     <div
//     class="flex ml-3 mt-3"
// >
//   <input
//     name="RadioButton"
//     @change="updateValue"
//     type="radio"
//     id="WorkNote"
//     value="WorkNote"  />
//   <label class="pl-3" for="WorkNote">Заметка по работе! </label>
// </div>
// @keydown.ctrl.enter.prevent.exact="log"
// @keydown.enter.prevent.exact="updateValue "
// const { textarea, input } = useTextareaAutosize()
// const value = ref(modelValue)
// const { modelValue } = defineProps({
//   modelValue: String,
//   placeholder: String,
// });

// const emit = defineEmits(["update:modelValue","chenge"]);
// const updateValue = (event) => {
//   emit("update:modelValue", event.target.value)
//   emit("chenge")
//   value.value=''
// }
// const log = (e) => {
//   let caret = e.target.selectionStart;
//       e.target.setRangeText("\n", caret, caret, "end");
//       modelValue = e.target.value;
  
// }
///////////////////////        Функция для фильрации с помощью map          //////////////////////
const filter = (array, argument) => { 
  return array.filter(el => el.argument === argument)
}
const sort = (array, argument) => {
  return array.sort(a, b =>  a.argument - b.argument)
}