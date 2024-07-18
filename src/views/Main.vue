<template>
  <div>
    <Preloader height="30px" width="30px" class="preloader" v-if="authorizationStore.isLoading" />
    <slot v-else>
      <Sidebar />
    </slot>
  </div>
  <section class="main-content">
    <div class="search">
      <input class="search_tasks" type="text" placeholder="Search..." />
    </div>
    <div class="calendar">
      <div class="calendar__date">
        <div class="date">Mon <br> 6 <br> May</div> 
      </div>
      <div class="calendar__actions">
        <button>
          <span>
            <Printer />
            Print
          </span>
        </button>
        <button>
          <span>
            <Grid />
            Grid
          </span>
        </button>
        <button>
          <span>
            <img src="@/assets/img/svg/list.svg" alt="list">
            List
          </span>
        </button>
        <div class="sorting">
          <button>
            <span>
              <img src="@/assets/img/svg/Sorting.svg" alt="">
              Sorting
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="tasks">
      <input class="add-task" type="text" placeholder="+ Add task" value="{{ taskName }}" 
      v-model="taskName"
      />
      <button @click="addTask" class="add-task_button">+</button>
    </div>
    <div class="tasks_new">
      <div 
      class="task" v-for="task in tasks" 
      :key="task._id" 
      :class="{ completed: task.isCompleted }"
      @click="() => completedHandler(task._id)">
        <div class="task_left">
          <div class="round"
          :class="{
            business:task.type === 'business',
            personal:task.type === 'personal',
          }"
           ></div>
          <span>{{ task.name }}</span>
        </div>
        <div class="task_options">
          <button class="task_button" @click="() => toggleTooltip(task)">
            <img src="@/assets/img/svg/edit.svg" alt="edit">
            <div class="tooltiptext">Edit</div>
          </button>
          <button class="task_button" @click="() => toggleTooltip(task)">
            <img src="@/assets/img/svg/pri.svg" alt="priority">
            <div class="tooltiptext">Priority</div>
          </button>
          <button class="task_button" @click="() => toggleTooltip(task)">
            <img src="@/assets/img/svg/eee.svg" alt="exit">
            <div class="tooltiptext">Exit</div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import type { AxiosError } from 'axios';
import { authMe } from '@/api/authMe';
import { useAuthorizationStore } from '@/store/useAuthorizationStore';
import Preloader from '@/assets/icons/Preloader.vue';
import Sidebar from '../components/Sidebar.vue';
import Grid from '@/assets/icons/Grid.vue';
import Printer from '@/assets/icons/Printer.vue';

const authorizationStore = useAuthorizationStore();
const router = useRouter();

// Задачи, определенные в data функции
const taskName = ref ('');
const tasks = ref([{
  _id: 'wewewe2123',
  name: 'Create to do ',
  isCompleted: false,
  type: 'bussines',
}]);

onBeforeMount(async () => {
  try {
    if (authorizationStore.isSuccess) {
      return;
    }
    authorizationStore.setIsLoading(true);
    const response = await authMe();

    if (response.status === 200) {
      authorizationStore.setIsSuccess(true);
    }
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status === 401) {
      router.replace('/preview');
    }
  } finally {
    authorizationStore.setIsLoading(false);
  }
});

// Пример функции для toggle tooltip
function toggleTooltip(task) {
  console.log(`Toggling tooltip for task: ${task.name}`);
}

function completedHandler(taskId) {
  const currentTask = tasks.value.find((t) => t._id === taskId);
  if(currentTask) {
    currentTask.isCompleted = !currentTask.isCompleted;
  }
}

function addTask() {
  tasks.value.push({
    _id:Math.random(). toString(36).substring(2, 7),
    name:taskName.value,
    isCompleted: false,
    type: 'personal',
  })
  taskName.value = '';
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
  width: 100%;
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
  border: 1px solid $blue2;
}
.search_tasks::placeholder {
  color: $grey;
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
.tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  padding: 40px;
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
  border: 1px solid $blue2;
  margin: 0;
  border-radius: 20px;

  background-color: #fff;
}
.add-task::placeholder{
  color: $grey;
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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
.round .bussines {
  border-color: $blue;
}
.round .personal {
  border-color: #974613;
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
  // cursor: pointer;
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
}
.task_button button{
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.task_options{
  display: flex;
  gap: 30px;
}
.task_options img{
  cursor: pointer;
}
.task_left{
display: flex;
align-items: center;
}

.task.completed{
  text-decoration: line-through;
}

.task.completed .round{
  border-color: transparent;
  background-color: #0AC304;
}

// .task.completed.round {
//   border-color: transparent;
//   background-color: rgba(255, 255, 255, .5);
// }
// .task.checked .round:after {
//   opacity: 1;
// }

.task.completed .round:after {
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
  width: 24px;
  height: 24px;
}

/* Стили для подсказки */
.tooltiptext {
  visibility: hidden; /* Подсказка невидима по умолчанию */
  background-color: $blue;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  padding: 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Расположение над кнопкой */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
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
  border-color: $blue transparent transparent transparent;
}

/* Показываем подсказку при наведении */
.task_button:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
