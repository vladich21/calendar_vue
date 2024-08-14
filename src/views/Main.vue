<template>
  <div>
    <Preloader height="30px" width="30px" class="preloader" v-if="authorizationStore.isLoading" />
    <slot v-else>
      <Sidebar />
    </slot>
  </div>
  <section class="main-content">
    <div class="search">
      <input
        class="search_tasks"
        type="text"
        placeholder="Search..."
      />
    </div>
    <div class="calendar">
      <div class="calendar__date">
        <div class="date">
          <p class="date-p_Week">{{ dayOfWeek }}</p>
          <p class="date-p_Day">{{ day }}</p>
          <p class="date-p_Month">{{ month }}</p>
        </div>
     </div>
      <div class="calendar__actions">
        <button class="task_button" @click="toggleTooltip(null, 'printer')">
          <Printer />
          <div class="tooltiptext">Printer</div>
        </button>
        <button class="task_button" :class="{ active: viewMode === 'grid' }" @click="setViewMode('grid')">
          <Grid />
          <div class="tooltiptext">Grid</div>
        </button>
        <button class="task_button" :class="{ active: viewMode === 'list' }" @click="setViewMode('list')">
          <img src="@/assets/img/svg/list.svg" alt="list">
          <div class="tooltiptext">List</div>
        </button>
        <div class="sorting">
          <button class="task_button" @click="toggleDropdown">
            <img src="@/assets/img/svg/Sorting.svg" alt="">
            <div class="tooltiptext">Sorting</div>
          </button>
          <ul class="dropdown-content opacity" v-if="isDropdownOpen">
            <li @click="sortBy('priority')">Priority</li>
            <li @click="sortBy('dateCompleted')">Date Completed</li>
            <li @click="sortBy('alphabet')">Alphabet</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tasks">
      <input
        class="add-task"
        type="text"
        placeholder="+ Add task"
        v-model="taskName"
        @keyup.enter="addTask"
      />
      <button @click="addTask" class="add-task_button">+</button>
    </div>
    <div class="tasks_new" :class="viewMode">
      <div
        class="task"
        v-for="task in tasks"
        :key="task._id"
         :class="[ 'task-item', getPriorityClass(task.priority), viewMode]"
      >
        <div class="task_left" :class="{ completed: task.isCompleted }">
          <div
            class="round"
            :class="{ completed: task.isCompleted }"
            @click="toggleTaskCompletion(task._id)"
          ></div>
          <span
            v-if="!task.isEditing"
            @dblclick="editTask(task)"
          >{{ task.name }}</span>
          <input
            v-else
            v-model="task.name"
            @blur="saveTask(task)"
            @keyup.enter="saveTask(task)"
            class="edit-input"
          />
        </div>
        <div class="task_options">
          <button class="task_button" @click="editTask(task)">
            <img src="@/assets/img/svg/edit.svg" alt="edit">
          </button>
          <button class="task_button "  @click="togglePriorityDropdown(task._id)">
            <img src="@/assets/img/svg/pri.svg" alt="priority">
          </button>
          <ul class="dropdown-content" v-if="isPriorityDropdownOpen(task._id)">
            <li @click="setTaskPriority(task._id,'hard')" class="priority-important">Important</li>
            <li @click="setTaskPriority(task._id,'medium')" class="priority-medium">Medium</li>
            <li @click="setTaskPriority(task._id,'easy')" 
            class="priority-easy">Easy</li>
          </ul>
          <button class="task_button" @click="closeTask(task._id)">
            <img src="@/assets/img/svg/eee.svg" alt="exit">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, onMounted, onBeforeUnmount } from 'vue';
import type { Task } from '@/types/types';  // Обновленный путь импорта
import { useRouter } from 'vue-router';
import type { AxiosError } from 'axios';
import { authMe } from '@/api/authMe';
import { useAuthorizationStore } from '../store/useAuthorizationStore';
import Preloader from '@/assets/icons/Preloader.vue';
import Sidebar from '../components/Sidebar.vue';
import Grid from '@/assets/icons/Grid.vue';
import Printer from '@/assets/icons/Printer.vue';

const authorizationStore = useAuthorizationStore();
const router = useRouter();

const taskName = ref('');
const tasks = ref<Task[]>([]);
const viewMode = ref('list');
const isDropdownOpen = ref(false);
const priorityDropdownTaskId = ref<string | null>(null);

const dayOfWeek = ref('')
const day = ref('')
const month = ref('')

onBeforeMount(async () => {
  await validateAuthorization();
  updateDate();
});
onMounted(() => {
  document.addEventListener('mousedown', handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleOutsideClick);
});

async function validateAuthorization() {
  if (authorizationStore.isSuccess) {
    return;
  }

  authorizationStore.setIsLoading(true);
  try {
    const response = await authMe();
    if (response.status === 200) {
      authorizationStore.setIsSuccess(true);
    }
  } catch (e) {
    handleAuthError(e);
  } finally {
    authorizationStore.setIsLoading(false);
  }
}

function handleAuthError(error: unknown) {
  const axiosError = error as AxiosError;
  if (axiosError.response?.status === 401) {
    router.replace('/preview');
  }
}

function toggleTooltip(task: Task | null, type: string) {
  if (task) {
    console.log(`Toggling ${type} tooltip for task: ${task.name}`);
  } else {
    console.log(`Toggling ${type} tooltip`);
  }
}

function addTask() {
  if (taskName.value.trim()) {
    tasks.value.push({
      _id: Date.now().toString(),
      name: taskName.value,
      isCompleted: false,
      type: 'business',
      isEditing: false,
      priority: ' ', // Добавляем тип приоритета по умолчанию
      dateCompleted: new Date(), // Добавляем дату завершения по умолчанию
    } as Task);
    taskName.value = '';
  }
}

function toggleTaskCompletion(taskId: string) {
  const task = tasks.value.find(t => t._id === taskId);
  if (task) {
    task.isCompleted = !task.isCompleted; // Переключение состояния выполнения
  }
}

function closeTask(taskId: string) {
  tasks.value = tasks.value.filter(t => t._id !== taskId);
}

function editTask(task: Task) {
  task.isEditing = true;
}

function saveTask(task: Task) {
  task.isEditing = false;
}

function setViewMode(mode: 'list' | 'grid') {
  viewMode.value = mode;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function handleOutsideClick(e: MouseEvent) {
  const dropdown = document.querySelector('.dropdown-content');
  if (dropdown && !dropdown.contains(e.target as Node)) {
    isDropdownOpen.value = false;
  }
}

function sortBy(criteria: string) {
  console.log(`Sorting by: ${criteria}`);
  switch (criteria) {
    case 'priority':
      tasks.value.sort((a, b) => { 
        const priorityOrder: { [key: string]: number } = { hard: 3, medium: 2, easy: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      break;
    case 'dateCompleted':
      tasks.value.sort((a, b) => (a.dateCompleted < b.dateCompleted ? 1 : -1));
      break;
    case 'alphabet':
      tasks.value.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  isDropdownOpen.value = false;
}

function togglePriorityDropdown(taskId: string) {
  if (priorityDropdownTaskId.value === taskId) {
    priorityDropdownTaskId.value = null;
  } else {
    priorityDropdownTaskId.value = taskId;
  }
}

function isPriorityDropdownOpen(taskId: string) {
  return priorityDropdownTaskId.value === taskId;
}

function getPriorityClass(priority: string) {
  switch (priority) {
    case 'hard':
      return 'task-important';
    case 'medium':
      return 'task-medium';
    case 'easy':
      return 'task-easy';
    default:
      return '';
  }
}

function setTaskPriority(taskId: string, priority: string) {
  const task = tasks.value.find(task => task._id === taskId);
  if (task) {
    task.priority = priority;
  }
  priorityDropdownTaskId.value = null;
}
function updateDate() {
const date = new Date();

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

dayOfWeek.value = daysOfWeek[date.getDay()];
day.value = date.getDate().toString();
month.value = months[date.getMonth()];
}
</script>




<style lang="scss">
@import '../assets/scss/vars.scss';
@import '../assets/scss/settings.scss';

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: $blue2;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
width: 100vw;
height: 100vh;
  background-color: $grey3;
  box-sizing: border-box;
}
.search {
  padding: 30px;
  margin-left: auto;
}

.search_tasks {
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  width: 370px;
  height: 40px;
  border: 1px solid $grey;
}
.search_tasks::placeholder {
  color: $grey;
}
.search_tasks:hover{
  border: 1px solid $blue2
}
.calendar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
}

.calendar__date {
  display: flex;
  align-items: center;
}
.date {
  font-size: 30px;
}

.calendar__actions {
  display: flex;
  width: 80%;
  height: 60px;
  gap: 50px;
  border-bottom: 1px solid $grey;
  border-top: 1px solid $grey;
 
}
.calendar__actions button {
  font-size: 20px;
}
.img-button-three_dots {
  margin-top: 22px;
  width: 35px;
  height: 20px;
  background-image: url('/src/assets/img/svg/three_dots.svg');
  background-size: cover;
  border: none;
}

.sorting{
  display: flex;
  margin-left: auto;
}
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #fff;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 10px;
  // padding: 5px 0;
  margin-top: 50px;
  right: 100px;
}

.dropdown-content li {
  color: black;
  padding: 10px 15px;
  font-size: 14px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  
}

.dropdown-content li:hover {
  background-color: $grey3;
}
.tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  padding: 40px;
}

.tasks_new {
  &.grid {
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(1fr));
    grid-auto-flow: row;
    .task {
  margin: 1px auto;
  border-radius: 1px;
  width: 80%;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.1);
    }
  }
}

.tasks_new {
  width: 100%;
  padding: 40px;
}

.add-task {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73%;
  height: 50px;
  padding: 10px;
  padding-left: 20px;
  border: 1px solid $grey;
  margin: 0;
  border-radius: 20px;
  background-color: #fff;
}

.add-task::placeholder{
  color: $grey;
}
.add-task:hover{
  border: 1px solid $blue2
}
.add-task_button{
  background-color: $blue;
  font-size: 24px;
  color: #ffffff;
  border-radius: 50%;
  margin-left: 20px;
  padding: 25px;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-task_button:hover{
  opacity: 0.8;
}
.round {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
}

.round:after {
  border: 2px solid #ffffff;
  border-top: none;
  border-right: none;
  content: "";
  height: 8px;
  left: 5px;
  opacity: 0;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
  width: 15px;
}

.task{
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 80%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 15px;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.1);
}
.task_left > span{
  padding-left: 25px;
  display: flex;
  align-items: center;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.task_left .edit-input {
  padding-left: 25px;
  width: 90%;
  border: none;
  border-bottom: 1px solid $grey;
}
.task_button button {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.task_options {
  display: flex;
  gap: 20px;
  margin-left: 10px;
}

.task_left {
  display: flex;
  align-items: center;
  width: 90%; /* чтобы span и input занимали всю ширину контейнера */
}

.task.completed {
  text-decoration: line-through;
}

.round.completed {
  border-color: transparent;
  background-color: #0AC304;
}

.round.completed:after {
  opacity: 1;
}

.task_button {
  position: relative; /* Необходимо для правильного позиционирования подсказки */
  display: inline-block;
  border: none;
  background: none;
  cursor: pointer;
}

.task_button img {
  width: 20px;
  height: 20px;
}
/* Стили для подсказки */
.task_button .tooltiptext {
  visibility: hidden; 
  background-color: #fff;
  color: #494949;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  padding: 4px;
  position: absolute;
  z-index: 1;
  bottom: 90%; 
  left: 50%;
  font-size: 15px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0px 8px 48px 0px rgba(0, 0, 0, 0.21);
}

.task_button::before{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #333;
  transition: 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
}
.task_button:hover:before {
  width: 100%;
}
/* Стрелка подсказки */
.tooltiptext::after {
  content: "";
  position: absolute;
  top: 99%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}
/* Показываем подсказку при наведении */
.task_button:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.task_left.completed  {
  width: 90%;
}

.task_left.completed span {
  text-decoration: line-through;
  color: $grey;
}
.task-important {
  background-color: #c12424;
}

.task-medium {
  background-color: #EDFF21;
}

.task-easy {
  background-color: #32CD32;
}

.priority-important, .priority-medium, .priority-easy {
  cursor: pointer;
  display: inline-block;
  padding: 3px 10px;
  margin: 5px;
  border-radius: 3px;
  border: none;
  transition: background-color 0.3s ease;
}
.priority-important {
  background-color: #c12424;
}
.priority-medium {
  background-color: #EDFF21;
}
.priority-easy {
  background-color: #32CD32;
}
.priority-important:hover, .priority-medium:hover, .priority-easy:hover {
  opacity: 1;
}
</style>
