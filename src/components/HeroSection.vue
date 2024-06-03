<template>
   <section class="hero">
    <div class="container">
        <h1>Organize your work and life.</h1>
        <P>Simple and universal task planning for any of your tasks: manage your time and effectively achieve your goals.</P>
        <button class="button">Start for free!</button>
    </div>
</section>
<section class="hero">
    <div class="image-container">
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
</style>