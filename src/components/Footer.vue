<template>
  <footer class="footer">
    <div class="container">
      <nav class="nav_disp_flex">
          <div class="social-media">
              <div class="img_calendar">
                  <img src="../assets/img/svg/calendar.svg" alt="Calendar" class="logo" />
                  <p class="img_calendar_p">Calendar</p>
              </div>
              <a href="mailto:calendar@gmail.com?subject=Inquiry&body=Hello%20there,%0A%0AI%20would%20like%20to%20ask%20about...">calendar@gmail.com</a>
              <div class="social">
                  <a href="#"><img src="../assets/img/svg/facebook.svg" alt="Facebook" /></a>
                  <a href="#"><img src="../assets/img/svg/telegram.svg" alt="Telegram" /></a>
                  <a href="#"><img src="../assets/img/svg/linkedin.svg" alt="Linkedin" /></a>
                  <a href="#"><img src="../assets/img/svg/instagram.svg" alt="Instagram" /></a>
              </div>
      </div>
          <ul class="footer-nav">
          <h1>Calendar</h1>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">About Calendar</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Contact us</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Pricing</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Blog</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Post a review</a></li>
        </ul>
        <ul class="footer-nav">
          <h1>Posibilities</h1>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">To do list</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">My day</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">7 days</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Calendar</a></li>
        </ul>
        <ul class="footer-nav">
          <h1>Use cases</h1>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">Personal</a></li>
          <li><a rel="nofollow noreferrer" target="_blank" href="#">For teams</a></li>
        </ul>
        <ul class="footer-nav">
        <h1>Privacy Policy</h1>
        <li><a rel="nofollow noreferrer" target="_blank" href="#">Privacy Policy</a></li>
        <li><a rel="nofollow noreferrer" target="_blank" href="#">Terms of Service</a></li>
        <li><a rel="nofollow noreferrer" target="_blank" href="#">Cookie Policy</a></li>
      </ul>
         <ul class="footer-nav">
          <h1>Language</h1>
          <LanguageSelect />
          <h1>Get the app</h1>
          <img src="https://dwva1q0fl4kiz.cloudfront.net/googleplay_f16ac3d970.svg" width="135" height="41" loading="lazy" alt="google play">
          <img src="https://dwva1q0fl4kiz.cloudfront.net/appstore_2fa5df5c22.svg" width="135" height="41" loading="lazy" alt="app store">
        </ul>
      </nav>
  </div>
  <p class="copyright_p">© 2024 Copyright: Calendar. All rights reserved. Rus Patent 11,144,854</p>
</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelect from '../components/LanguageSelect.vue';

export default defineComponent({
  name: 'Footer',
  components: {
      LanguageSelect
  }
});
</script>

<style scoped>
.footer {
  padding: 70px 30px 0 30px;
  background-color: #333;
  color: #fff;
}

.footer .container {
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.nav_disp_flex {
  display: flex;
  gap: 80px;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-nav {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
h1{
  font-size: 20px;
  border-bottom: 2px solid #fff; 
}

.footer-nav li a:link {
  color: #fff;
  text-decoration: none;
  margin: 0;
  line-height: 25px;
}
.footer-nav li a:visited {
  color: #a7a7a7;
}

.footer-nav li a:hover {
  color: #fff;
  text-decoration: underline;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-media img {
  width: 35px;
  height: 35px;
}
.social-media a {
  margin-bottom: 10px;
}
.social{
  display: flex;
  gap: 10px;
}
ul img{
cursor: pointer;
}
.img_calendar{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;
  cursor: pointer;
}
.img_calendar_p{
margin: 0;
}
.copyright_p {
  padding: 25px 0 15px 0;
  text-align: center;
  background-color: #333;
 color: #ffffff;;
}
@media (max-width: 425px) {
.nav_disp_flex{
gap: 0;
justify-content: space-around;
}
}
</style>
