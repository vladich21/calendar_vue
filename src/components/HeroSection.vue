<template>
    <section class="header">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>Simple and universal task planning for any of your tasks: manage your time and effectively achieve your goals.</p>
        <button 
        class="button" 
        ref="mainButton" 
       >Start for free!
    </button>
      </div>
      <img src="../assets/img/man_table3.jpg" alt="life_style" style="width: 35%" class="life_style_img">
    </section>
    <section class="hero">
      <div class="container">
        <h2>Join thousands highly effective individuals, families and teams</h2>
      </div>
    </section>
    <section class="company">
      <div class="container clients_logos">
        <img loading="lazy" src="../assets/img/svg/Spotify.svg" alt="netflix" height="100" width="80" decoding="async" class="logo">
        <img loading="lazy" src="../assets/img/svg/netflix.svg" alt="netflix" height="100" width="80" decoding="async" class="logo">
        <img loading="lazy" src="../assets/img/svg/google_hero.svg" alt="google" height="100" width="80" decoding="async" class="logo">
        <img loading="lazy" src="../assets/img/svg/wework.svg" alt="wework" height="100" width="180" decoding="async" class="logo">
        <img loading="lazy" src="../assets/img/svg/yandex_hero.svg" alt="yandex" height="100" width="180" decoding="async" class="logo">
      </div>
    </section>
    <section class="tasks">
      <div class="container to_do_list_container">
        <div class="to_do_list">
          <h3>To do list</h3>
          <p class="p_cross_out">Now you don't have to keep everything in your head. <br></p>
          <p>A to-do list easily helps you organize your time and achieve your goals.</p>
        </div>
        <div class="img-container_possibilities">
          <img src="../assets/img/my_day.png" alt="App" class="to_do_list_img" width="50%">
          <ul>
            <h2>Possibilities</h2>
            <li>Organize all your to-dos into lists and projects</li>
            <li>Color code them to help you prioritize.</li>
            <li>Setting deadlines will help you progress towards your goals.</li>
            <li>Collaborate as a team on one to-do list and share them with others</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="myDay">
      <div class="container myDay_container">
        <div class="Day">
          <h3>My day</h3>
          <p>My Day is a convenient tool for planning and organizing your work time and personal affairs.</p>
          <div class="img-container_myDay">
            <ul>
              <h2>Possibilities</h2>
              <li class="myDay_li">Organize all your to-dos into lists and projects</li>
              <li class="myDay_li">Color code them to help you prioritize.</li>
              <li class="myDay_li">Setting deadlines will help you progress towards your goals.</li>
              <li class="myDay_li">Collaborate as a team on one to-do list and share them with others</li>
            </ul>
            <img src="../assets/img/my_day.png" alt="App" class="myDay_img" width="50%">
          </div>
        </div>
      </div>
    </section>
    <section class="sevenDays">
      <div class="container sevenDays_container">
        <div class="sevenDay">
          <h3>7 days</h3>
          <p>My Day is a convenient tool for planning and organizing your work time and personal affairs.</p>
          <div class="img-container_sevenDays">
            <ul>
              <h2>Possibilities</h2>
              <li class="sevenDays_li">Organize all your to-dos into lists and projects</li>
              <li class="sevenDays_li">Color code them to help you prioritize.</li>
              <li class="sevenDays_li">Setting deadlines will help you progress towards your goals.</li>
              <li class="sevenDays_li">Collaborate as a team on one to-do list and share them with others</li>
            </ul>
            <img src="../assets/img/7 days.png" alt="App" class="sevenDays_img" width="50%">
          </div>
        </div>
      </div>
    </section>
    <section class="calendar">
      <div class="container calendar_container">
        <div class="calend">
          <h3>Calendar</h3>
          <p>My Day is a convenient tool for planning and organizing your work time and personal affairs.</p>
          <div class="img-container_calendar">
            <ul>
              <h2>Possibilities</h2>
              <li class="calendar_li">Organize all your to-dos into lists and projects</li>
              <li class="calendar_li">Color code them to help you prioritize.</li>
              <li class="calendar_li">Setting deadlines will help you progress towards your goals.</li>
              <li class="calendar_li">Collaborate as a team on one to-do list and share them with others</li>
            </ul>
            <img src="../assets/img/calendar.png" alt="App" class="calendar_img" width="50%">
          </div>
        </div>
      </div>
    </section>
    <button class="fixed-button" ref="fixedButton">Start for free!</button>
    <section class="reviews">
      <div class="container reviews_container">
        <h2>What our users say</h2>
        <div class="review_section">
          <div class="review">
            <p>"This app has transformed the way I organize my life. Highly recommend it!"</p>
            <p>- Sarah L.</p>
          </div>
        </div>
        <div class="review_section">
          <div class="review">
            <p>"Simple, intuitive, and effective. Exactly what I needed to stay on top of my tasks."</p>
            <p>- Mark R.</p>
          </div>
        </div>
        <div class="review_section">
          <div class="review">
            <p>"A fantastic tool for team collaboration and task management. Couldn't live without it."</p>
            <p>- Emily W.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  export default {
    name: 'HeroSection',
    setup() {
      const mainButton = ref<HTMLElement | null>(null);
      const fixedButton = ref<HTMLElement | null>(null);
      const title = "Organize your work and life.";
      
  
      const handleScroll = () => {
        if (mainButton.value && fixedButton.value) {
          const rect = mainButton.value.getBoundingClientRect();
          const isButtonVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
          if (isButtonVisible) {
            fixedButton.value.classList.remove('show');
            fixedButton.value.classList.add('hide');
          } else {
            fixedButton.value.classList.remove('hide');
            fixedButton.value.classList.add('show');
          }
        }
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        mainButton,
        fixedButton,
        title,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/scss/vars.scss';

  
  html {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  .header {
    display: flex;
    text-align: center;
    padding: 200px 0 100px 0;
    background-color: #fff;
  }
  
  .container {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
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
  
  h1 {
    padding: 0 30px;
    font-size: 60px;
    margin-bottom: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
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

.hero:nth-of-type(2){
    padding: 0 0;
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

.logo {
    opacity: 0.6;
}

.logo:hover{
    opacity: 1;
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
}

.p_cross_out {
    text-decoration: line-through;
    color: #b0b0b0;
    margin-bottom: 0;
    padding: 0;
}

.to_do_list p {
    padding: 0 30px;
    margin: 0;
}

.img-container_possibilities {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
}

.to_do_list_img {
    max-width: 100%;
    height: auto;
    box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
}

ul li {
    top: 0;
    width: 400px;
    line-height: 1.5;
    background: url('../assets/img/check_mark.png') center left no-repeat;
    padding: 20px 0 25px 30px;
    list-style-type: none;
}

.myDay_container {
    padding: 20px 0 120px 0;
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
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
}

.myDay_img {
    max-width: 100%;
    height: auto;
    box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
    margin-bottom: 30px;
}

.sevenDays{
    padding: 50px 0;
    text-align: center;
}
.sevenDays_container{
    padding: 20px 0 120px 0;
}
.sevenDays_img{
    max-width: 100%;
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
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
}

.calendar{
    padding: 50px 0;
    text-align: center;
}
.calendar_container{
    padding: 20px 0 120px 0;
}
.calendar_img{
    max-width: 100%;
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
    justify-content: space-between;
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

.footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
    text-align: center;
}

.footer_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.footer_section {
    max-width: 300px;
    margin: 20px;
}

.footer_section h4 {
    font-size: 20px;
    margin-bottom: 15px;
}

.footer_section p, .footer_section a {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 10px;
    text-decoration: none;
}

.footer_section a:hover {
    color: #fff;
}

@media (max-width: 1024px) {
.img-container_possibilities {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
}

.to_do_list_img{
    margin-bottom: 30px;
}

ul li{
    padding: 10px 0 10px 30px;
}

.img-container_myDay{
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
.sevenDays_img{
    margin-bottom: 30px;
}
.img-container_calendar{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
}
.calendar_img{
    margin-bottom: 30px;
}
.myDay_img{
    margin-bottom: 30px;
}
}

@media (max-width: 768px) {
    .header{
        // display: flex;
        // flex-direction: column;
        text-align: center;
        padding: 200px 0 100px 0;
        background-color: #fff;  
}

.life_style_img{
    display: none;
}
}
@media (max-width: 500px) {
.to_do_list h3 {
    font-size: 40px;
    width: 300px;
}
} 
</style>