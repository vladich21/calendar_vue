<template>
  <div class="container">
    <section class="form">
      <a href="#" class="form__logo logo">Your Logo</a>
      <div class="form__content">
        <h1 class="form__title">Sign up</h1>
        <p class="form__subtitle">If you already have an account register</p>
        <p class="form__subtitle">
          You can <router-link to="/sign-in" class="form__link">Login here!</router-link>
        </p>
        <form @submit.prevent="register" class="form__form-box form-box">
          <div class="form-box__input-box input-box">
            <label class="input-box__info" for="email">Email</label>
            <label class="input-box__icon" for="email">
              <img src="@/assets/img/svg/email.svg" alt="email"/>
            </label>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div class="form-box__input-box input-box">
            <label class="input-box__info" for="password">Password</label>
            <label class="input-box__icon" for="password">
              <img src="@/assets/img/svg/password.svg" alt="password"/>
            </label>
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title=""
              required
            />
            <span class="input-box-eye">
              <img src="../assets/img/svg/eye_close.svg" class="password__eye" id="eyeicon" alt="eye icon"/>
            </span>
            <div id="message" class="message_psw">
              <h3 class="message_h3">The password must contain the following:</h3>
              <p id="length" class="invalid">minimum <b> 8 characters</b></p>
              <p id="capital" class="invalid"><b>capital </b>letter</p>
              <p id="number" class="invalid"><b>number</b></p>
              <p id="letter" class="invalid"><b>letters of the Latin alphabet only</b></p>
            </div>
          </div>
          <div class="form-box__btn-box btn-box">
            <button id="registerButton" type="submit">Register</button>
            <p class="privacy-policy">
          By using Calendar you accept our
          <router-link to="/terms-of-service" class="privacy-link">Terms of Service</router-link> and
          <router-link to="/privacy-policy" class="privacy-link">Privacy Policy</router-link>.
        </p>
          </div>
          <div class="form-box__social">
            <span class="form-box__social-info">or continue with</span>
            <div class="form-box__social-items">
              <a href="#"><img src="../assets/img/svg/github.svg" alt="github" /></a>
              <a href="#"><img src="../assets/img/svg/google.svg" alt="google" /></a>
              <a href="#"><img src="../assets/img/svg/apple.svg" alt="apple" /></a>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>

import { validator } from '../js/utils';
import eyeOpenIcon from '@/assets/img/svg/eye.svg';
import eyeCloseIcon from '@/assets/img/svg/eye_close.svg';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {

    handleInput(event) {
      const value = event.target.value;
      const lowerCaseLetters = /[a-z]/;
      const upperCaseLetters = /[A-Z]/;
      const numbers = /[0-9]/;

      const { include: [includeLowerCase, includeUpperCase, includeNumber], minLength } = validator(value).test({
        include: [lowerCaseLetters, upperCaseLetters, numbers],
        minLength: 8
      });

      this.updateValidationState(minLength, 'length');
      this.updateValidationState(includeLowerCase, 'letter');
      this.updateValidationState(includeUpperCase, 'capital');
      this.updateValidationState(includeNumber, 'number');
    },
    updateValidationState(isValid, elementId) {
      const element = document.getElementById(elementId);
      if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
      } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
      }
    },
   
    togglePasswordVisibility() {
    const password = document.getElementById('password');
    const eyeicon = document.getElementById('eyeicon');
    if (password.type === 'password') {
      password.type = 'text';
      eyeicon.src = eyeOpenIcon;
    } else {
      password.type = 'password';
      eyeicon.src = eyeCloseIcon;
    }
  }


  },
  mounted() {
    const input = document.querySelector('#password');
    input.addEventListener('input', this.handleInput);
    
    const eyeicon = document.getElementById('eyeicon');
    eyeicon.addEventListener('click', this.togglePasswordVisibility);

    const message = document.getElementById('message');
    input.addEventListener('focus', () => message.style.display = 'block');
    input.addEventListener('blur', () => message.style.display = 'none');
  }
};
</script>

<style scoped>
@import '@/assets/main.scss';
</style>
