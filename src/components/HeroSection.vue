<template>
    <section class="header">
      <div class="container">
        <div class="header_element">
          <h1 class="anim_h1 _anim-items">{{ title }}</h1>
          <p class="anim_p _anim-items">{{ subtitle }}</p>
          <button 
          class="button" 
          ref="mainButton" 
         >Start for free!
      </button>
        </div>
      </div>
      <img src="../assets/img/man_table3.jpg" alt="life_style" style="width: 30%" class="life_style_img">
    </section>
    <section class="hero">
      <div class="user">
        <h2>{{ textUser }}</h2>
      </div>
    </section>
    <section class="company">
      <div class="user clients_logos">
        <img
        v-for="logo in logos"
        :key="logo.alt"
        loading="lazy"
        :src="logo.src"
        :alt="logo.alt"
        :height="logo.height"
        :width="logo.width"
        decoding="async"
        :class="logo.class"
      >
      </div>
    </section>
    <section class="tasks">
      <div class="to_do_list_container">
        <div class="to_do_list">
          <h3 id="todolist">To do list</h3>
          <p class="p_first">{{ todolistTextFirst }} </p>
          <p class="p_second">{{ todolistTextSecond }}</p>
        </div>
        <p style="color: red;">Заменить изображение, добавить больше задач</p>
        <div class="img-container_possibilities">
        <div class="table__checkMark">
            <h2>Possibilities</h2>
            <ul class="animated-list _anim-items">
              <li 
              v-for="possibility in possibilities" 
              :key="possibility">{{ possibility }}
            </li>
            </ul>
          </div>
          <img src="../assets/img/my_day.png" alt="App" class="to_do_list_img">
        </div>
      </div>
    </section>
    <section class="myDay">
      <div class="myDay_container">
        <div class="Day">
          <h3 id="MyDay">My day</h3>
          <p>{{  myDayText }}</p>
          <div class="img-container_myDay">
            <div class="table__checkMark">
              <h2>Possibilities</h2>
              <ul class="animated-list _anim-items">
                <li 
                v-for="possibility in possibilities_Day" 
                :key="possibility">{{ possibility }}
              </li>
            </ul>
            </div>
            <img src="../assets/img/my_day.png" alt="App" class="myDay_img">
          </div>
        </div>
      </div>
    </section>
    <section class="sevenDays">
      <div class="sevenDays_container">
        <div class="sevenDay">
          <h3 id="7Days">7 days</h3>
          <p>{{ sevenDaysText }}</p>
          <div class="img-container_sevenDays">
            <div class="table__checkMark">
              <h2 >Possibilities</h2>
              <ul class="animated-list _anim-items">
                <li 
                v-for="possibility in possibilities_sevenDays" 
                :key="possibility">{{ possibility }}
              </li>
              </ul>
            </div>
            <img src="../assets/img/7 days.png" alt="App" class="sevenDays_img">
          </div>
        </div>
      </div>
    </section>
    <section class="calendar">
      <div class="calendar_container">
        <div class="calend">
          <h3 id="Calendar">Calendar</h3>
          <p>{{ calendarText }}</p>
          <div class="img-container_calendar">
            <div class="table__checkMark">
              <h2>Possibilities</h2>
              <ul class="animated-list _anim-items">
                <li 
                v-for="possibility in possibilities_calendar" 
                :key="possibility">{{ possibility }}</li>
              </ul>
            </div>
            <img src="../assets/img/calendar.png" alt="App" class="calendar_img">
          </div>
        </div>
      </div>
    </section>
    <div :style="{ height: '69px' }">
      <button class="fixed-button" 
      :class="{ static: isVisibleReviewSection, show: showButton }" 
      ref="fixedButton">Start for free!
    </button>
    </div>
    <section ref="reviewsContainerRef" class="reviews">
      <div class="reviews_container">
        <h2>What our users say</h2>
        <div class="review_section">
          <div class="review">
            <p>{{ reviewOne }}</p>
            <p>- Sarah L.</p>
          </div>
        </div>
        <div class="review_section">
          <div class="review">
            <p>{{ reviewTwo }}</p>
            <p>- Mark R.</p>
          </div>
        </div>
        <div class="review_section">
          <div class="review">
            <p>{{ reviewThree }}</p>
            <p>- Emily W.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import spotify from '@/assets/img/svg/Spotify.svg';
import netflix from '@/assets/img/svg/netflix.svg';
import google from '@/assets/img/svg/google_hero.svg';
import wework from '@/assets/img/svg/wework.svg';
import yandex from '@/assets/img/svg/yandex_hero.svg';


const mainButton = ref<HTMLElement | null>(null);
const fixedButton = ref<HTMLElement | null>(null);
const reviewsContainerRef = ref<HTMLDivElement | null>(null)
const isVisibleReviewSection = ref<boolean>(false)
const showButton = ref<boolean>(false)
const throttle = ref<boolean>(false)

const title = "Organize your work and life";
const subtitle = "Simple and universal task planning for any of your tasks: manage your time and effectively achieve your goals.";
const textUser = "Join thousands highly effective individuals, families and teams";
const todolistTextFirst = "Now you don't have to keep everything in your head.";
const todolistTextSecond = "A to-do list easily helps you organize your time and achieve your goals.";
const myDayText = "My Day is a convenient tool for planning and organizing your work time and personal affairs.";
const sevenDaysText = "Planning 7 days ahead allows you to effectively distribute tasks, providing a structured approach to achieving your weekly goals.";
const calendarText = "My Day is a convenient tool for planning and organizing your work time and personal affairs.";
const reviewOne = "This app has transformed the way I organize my life. Highly recommend it!";
const reviewTwo = "Simple, intuitive, and effective. Exactly what I needed to stay on top of my tasks.";
const reviewThree = "A fantastic tool for team collaboration and task management. Couldn't live without it.";


const possibilities = [
  "Organize all your to-dos into lists and projects.",
  "Color code to help you prioritize.",
  "Setting deadlines will help you progress towards your goals.",
  "Collaborate as a team on one to-do list and share them with others."
];
const possibilities_Day = [
  "Ability to easily edit, add and delete tasks.",
  "Convenient interface for solving your problems.",
  "Having a clear understanding of your daily tasks and priorities increases productivity.",
  "Wide variety of sorting types."
];
const possibilities_sevenDays = [
  "Reviewing tasks for the week ahead helps in more effective planning.",
  "Easily changing the task between days of the week allows you to adapt to changing circumstances and new priorities.",
  "A clean and simple design makes the app enjoyable to use and reduces visual clutter.",
];
const possibilities_calendar = [
  "It's easy to mark important events so you don't miss important things.",
  "The small calendar allows you to quickly navigate through the months and select a specific month, week or day for easy navigation.",
  "A clear division of days and weeks helps to quickly assess the amount of work."
];

const logos = [
{ src: spotify, alt: "spotify", height: 100, width: 80, class: "logo" },
  { src: netflix, alt: "netflix", height: 100, width: 80, class: "logo" },
  { src: google, alt: "google", height: 100, width: 80, class: "logo" },
  { src: wework, alt: "wework", height: 100, width: 180, class: "logoL" },
  { src: yandex, alt: "yandex", height: 100, width: 180, class: "logoL" }
];

let animItems: NodeListOf<Element>;

const handleScroll = () => {
  if (mainButton.value && fixedButton.value) {
    const rect = mainButton.value.getBoundingClientRect();
    showButton.value = rect.top <= 0
  }
};

const animOnScroll = () => {
  if(animItems.length > 0){
    for(let i = 0; i < animItems.length; i++){
      const animItem = animItems[i] as HTMLElement;
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if(
        window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight
      ){
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
};

const offset = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop, left: rect.left + scrollLeft
  };
};

onMounted(() => {
  animItems = document.querySelectorAll('._anim-items');
  window.addEventListener('scroll', animOnScroll); 
  window.addEventListener('scroll', handleScroll);
  animOnScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', animOnScroll);
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  const cb = (entries: IntersectionObserverEntry[]) => {
  if(throttle.value) {
    return
  }
  throttle.value = true;
  setTimeout(() => (throttle.value = false), 100);
  entries.forEach((entry: IntersectionObserverEntry) => {
    isVisibleReviewSection.value = entry.isIntersecting
  })
}

const observer = new IntersectionObserver(cb, { root: null, rootMargin: '0px', threshold: 0 })
if(reviewsContainerRef.value) {
  observer.observe(reviewsContainerRef.value)
}
})

  </script>
  
  <style lang="scss" scoped>
  @import '../assets/scss/vars.scss';

  .header {
    display: flex;
    text-align: center;
    padding: 200px 0 100px 0;
    background-color: #fff;
    width: 100vw;
  }
  
  .container {
    width: 100vw;
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

  }
 .header_element{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .hero {
  text-align: center;
  padding: 200px 0 100px 0;
  background-color: #fff;
}

.life_style_img {
  background-size: cover;
  background-position: center;
  margin: 0 auto;
}

.anim_h1{
  padding: 0 30px;
  font-size: 60px;
  margin-bottom: 20px;

  transform: translate(0px,100%);
  opacity: 0;
  transition: all 1.5s ease 0s;
}
.anim_h1._active {
  transform: translate(0px, 0px);
  opacity: 1;
}

  .anim_p {
  padding: 0 30px;
  text-align: center;
  color: #737373;
  font-size: 24px;
  margin-bottom: 30px;
  transform: translate(0px,100%);
  opacity: 0;
  transition: all 0.8s ease 0s;
}

.anim_p._active {
  transform: translate(0px, 0px);
  opacity: 1;
}

h2 {
  margin-bottom: 5px;
  line-height: 1.4;
  font-size: 1.5em;
  font-weight: 700;
}

p{
  padding: 0 30px;
  text-align: center;
  color: #737373;
  font-size: 24px;
  margin-bottom: 30px;
}

.button{
  padding: 20px 30px;
  border-radius: 35px;
  background-color: $blue;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.fixed-button {
  padding: 20px 30px;
  border-radius: 35px;
  font-size: 24px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $blue;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: opacity 2s ease-in-out, visibility 0s 2s;
  visibility: hidden;
}

.fixed-button.show {
  transition: opacity 2s ease-in-out, visibility 0s 0s;
  visibility: visible;
  opacity: 1;
}

.fixed-button.hide{
  transition: opacity 2s ease-in-out, visibility 0s 2s;
  opacity: 0;
  visibility: hidden;
}
.fixed-button.static {
  position: relative;
}

.hero:nth-of-type(2){
  padding: 0 0;
}
.company{
  justify-content: center;
}
.clients_logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  gap: 30px;
  padding: 20px;
}

.to_do_list_container {
  padding: 120px 0 80px 0;
}
.to_do_list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h3 {
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  color: #000000;
  border-bottom: 4px solid $blue; 
  line-height: 70px;
  width: 400px;
  height: 70px;
  margin-bottom: 40px;
  position: relative;
  padding-top: 100px; /* Высота фиксированного меню */
  margin-top: -100px; /* Высота фиксированного меню */
}

.p_first {
  text-decoration: line-through;
  color: #b0b0b0;
  margin-bottom: 0;
  padding: 0;
}

.p_second {
  padding: 0 30px;
  margin-bottom: 30px;
}

.img-container_possibilities {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 50px;
  position: relative;
 
}


.to_do_list_img {
  max-width: 100%;
  width: 65%;
  height: auto;
  margin-left: 30px;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
}
.table__checkMark{
  position: relative;
}

.animated-list li {
  position: relative;
  list-style-type: none;
  padding-left: 0;
  transform: translate(-130%, 0px);
  transition: all 0.3s ease 0s;
}
.animated-list._active li{
  transform: translate(0px, 0px);
}

.animated-list {
  &._active {
    li {
      @for $var from 1 to 6 {
        $delay: $var * 0.2;
        &:nth-child(#{$var}) {
          @if $var==1 {
            transition: transform 0.8s ease 0s;
          } @else {
            transition: transform 0.8s ease #{$delay + s};
          }
        }
      }
    }
  }
}

.table__checkMark::before {
  content: '';
  position: absolute;
  left: 50%; 
  top: 50%;
  transform: translate(-50%, -50%); 
  width: 420px; 
  height: 365px;
  background: url('../assets/img/sticker2.png') no-repeat;
  background-size: contain;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.21);
  z-index: -1;
  clip-path: inset(-8px -11px -10px -8px);
}

.animated-list h2 {
  margin: 0 0 10px 0;
}

.animated-list li {
  position: relative;
  top: 0;
  width: 350px;
  line-height: 1.5;
  background: url('../assets/img/check_mark.png') center left no-repeat;
  padding: 15px 0 20px 30px;
  list-style-type: none;
}
.myDay_container {
  padding: 40px 0 80px 0;
}

.Day{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.Day p{
  padding: 0 30px;
}

.img-container_myDay {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 50px;
}

.myDay_img {
  max-width: 100%;
  width: 65%;
  margin-left: 30px;
  height: auto;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
}


.sevenDays_container{
  padding: 40px 0 80px 0;
}
.sevenDays_img{
  max-width: 100%;
  width: 65%;
  margin-left: 30px;
  height: auto;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
}
.sevenDay{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.img-container_sevenDays{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 50px;
}

.calendar_container{
  padding: 40px 0 80px 0;
}
.calendar_img{
  max-width: 100%;
  width: 65%;
  margin-left: 30px;
  height: auto;
  box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
}
.calend{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.img-container_calendar{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 50px;
}
.reviews {
  padding: 50px 0;
  text-align: center;
  background-color: #f9f9f9;
}

.reviews_container {
  max-width: 800px;
  margin: 0 auto;
}
.reviews_container h2 {
  text-align: center;
  margin-bottom: 20px;
}
.review_section {
  margin-bottom: 20px;
}
.review {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.review p {
  margin: 0;
  font-size: 18px;
  color: #333;
}
.review p:last-child {
  text-align: right;
  font-weight: bold;
}

@media (max-width: 1400px) {

  .img-container_possibilities{
  flex-direction: column-reverse;
}
ul::before{
 top: 50%;
}

.to_do_list_img{
  width: 90%;
  margin: 0;
  margin-bottom: 80px;
}
.animated-list li {
  transform: translate(-235%, 0px);
}
.img-container_myDay{
  flex-direction: column-reverse;
}
.myDay_img{
  width: 90%;
  margin: 0;
  margin-bottom: 80px;
}
.img-container_sevenDays{
  flex-direction: column-reverse;
}
.sevenDays_img{
  width: 90%;
  margin: 0;
  margin-bottom: 80px;
}
.img-container_calendar{
  flex-direction: column-reverse;
}
.calendar_img{
  width: 90%;
  margin: 0;
  margin-bottom: 80px;
}
}

@media (max-width: 1024px) {

ul li{
  padding: 10px 0 10px 30px;
}

ul::before{
 top: 60%;
}

ul::before{
 top: 60%;
}

ul::before{
 top: 60%;
}

ul::before{
 top: 60%;
}
.img-container_myDay{
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
}

.img-container_sevenDays{
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
}

.img-container_calendar{
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
}
}

@media (max-width: 768px) {
  
.header{
  text-align: center;
  padding: 150px 0 60px 0;
  background-color: #fff;  
}

.clients_logos{
  gap: 0;
}

.logo{
  width: 60px;
  height: 60px;
}

.logoL{
  width: 100px;
  height: 80px;
}

.life_style_img{
  width: 40%;
}

.anim_h1{
  font-size: 40px;
}

.anim_p {
  font-size: 14px;
}

.animated-list li {
  transform: translate(-150%, 0px);
}

.button{
  font-size: 16px;
  padding: 15px 25px;
}

.fixed-button{
  font-size: 16px;
  padding: 15px 25px;
}

.to_do_list_container{
  padding: 50px 0 30px 0;
}

h3 {
  font-size: 40px;
  line-height: 40px;
  width: 300px;
  height: 50px;
}

.p_first{
  font-size: 14px;
}

.p_second{
  font-size: 14px;
}

.img-container_possibilities {
  padding: 20px;
}

.myDay_container{
    padding-bottom: 30px;
  }

.img-container_myDay{
  padding: 20px;
}

p{
  font-size: 14px;
}
.sevenDays_container{
  padding-bottom: 30px;
}
.img-container_sevenDays{
  padding: 20px;
}

.img-container_calendar{
  padding: 20px;
}

h2{
    font-size: 16px;
  }
ul {
  height: 278px;
}
  ul::before {
  width: 341px;
  height: 296px;
  top: 50%;
  clip-path: inset(-1px -11px -10px -8px);
  }

  ul li {
    font-size: 14px;
    width: 250px;
    padding: 8px 0 8px 30px;
  }
  .to_do_list_img{
    width: 100%;
  }
  .myDay_img{
  width: 100%;
  }
  .sevenDays_img{
    width: 100%;
  }
  .calendar_img{
    width: 100%;
  }
}
@media (max-width: 480px) {
  .anim_h1{
    font-size: 30px;
  }

  .life_style_img{
    width: 50%;
  }

  h2{
    padding-left: 10px;
  }

  .table__checkMark{
    width: 320px;
    height: 260px;
  }

  .table__checkMark::before {
  width: 335px; 
  height: 291px;
  background: url('../assets/img/sticker2.png') no-repeat;
  background-size: contain;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.21);
  z-index: -1;
  clip-path: inset(-8px -11px -10px -8px);
  }

  h3 {
  font-size: 35px;
  line-height: 40px;
  border-bottom: 3px solid $blue; 
  width: 300px;
  height: 50px;
  }

ul {
  height: 278px;
}

  ul::before {
  width: 341px;
  height: 296px;
  top: 50%;
  clip-path: inset(-1px -11px -10px -8px);
  }

  .animated-list li {
  position: relative;
  font-size: 14px;
  width: 280px;
  line-height: 1.5;
  background: url('../assets/img/check_mark.png') center left no-repeat;
  padding: 8px 0 13px 30px;
  list-style-type: none;
}
} 
</style>