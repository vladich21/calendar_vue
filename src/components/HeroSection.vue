<template>
   <section class="hero">
    <div class="container">
        <h1>Organize your work and life.</h1>
        <P>The application is the best in the world.</P>
        <button class="button">Start for free!</button>
    </div>
</section>
<section class="hero">
    <div class="image-container">
        <img src="../assets/img/my_day.png" alt="App" class="my_day_img" width="80%">
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
    padding: 100px 0;
    background-color: #fff;  
    }
    h1{
       font-size: 60px;
        margin-bottom: 20px;
    }
    p{
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

</style>