<template>
   <section class="hero">
    <div class="container">
        <h1>Organize your work and life.</h1>
        <P>Simple and universal task planning for any of your tasks: manage your time and effectively achieve your goals.</P>
        <button class="button">Start for free!</button>
    </div>
</section>
<section class="hero">
    <div class="img-container_hero">
        <img src="../assets/img/my_day.png" alt="App" class="my_day_img" width="90%">
        <h2>Join thousands highly effective individuals, families and teams</h2>
    </div>
</section>
<section class="company">
        <div class="clients_logos">
            <img loading="lazy" src="../assets/img/svg/Spotify.svg" alt="netflix" height="100" width="80" decoding="async" class="logo">
            <img loading="lazy" src="../assets/img/svg/netflix.svg" alt="netflix" height="100" width="80" decoding="async" class="logo">
            <img loading="lazy" src="../assets/img/svg/google_hero.svg" alt="google" height="100" width="80" decoding="async" class="logo">
            <img loading="lazy" src="../assets/img/svg/wework.svg" alt="wework" height="100" width="180" decoding="async" class="logo">
            <img loading="lazy" src="../assets/img/svg/yandex_hero.svg" alt="yandex" height="100" width="180" decoding="async" class="logo">
        </div>
</section>
<section class="tasks">
    <div class="to_do_list_container">
        <div class="to_do_list">
            <h3>To do list</h3>
            <p class="p_cross_out">Now you don't have to keep everything in your head. <br> </p>
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
    <div class="myDay_container">
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
</template>
<script lang="ts">
    export default {
        name: 'HeroSection',
    };
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';
.hero{
    text-align: center;
    padding: 200px 0 100px 0;
    background-color: #fff;  
}

h1{
    font-size: 60px;
    margin-bottom: 20px;
}

h2{
    margin-bottom: 20px;
    line-height: 1.4;
    font-size: 1.333em;
    font-weight: 700;
    
}

p{
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

.hero:nth-of-type(2){
    padding: 0 0;
}

.my_day_img{
    margin-bottom: 40px;
    box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
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

.myDay_img{
    margin-bottom: 30px;
}
}
@media (max-width: 500px) {
.to_do_list h3 {
    font-size: 40px;
    width: 300px;
}
} 
</style>