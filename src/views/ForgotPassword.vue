<template>
    <div class="container">
      <section class="form">
        <a href="#" class="form__logo logo">Your Logo</a>
        <div class="form__content">
          <h1 class="form__title">Forgot Password</h1>
          <form @submit.prevent="requestReset" class="form__form-box form-box">
            <div class="form-box__input-box input-box">
              <label class="input-box__info" for="email">Email</label>
              <label class="input-box__icon" for="email">
                <img src="../assets/img/svg/email.svg" alt="email" />
              </label>
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <span v-if="emailError" class="error">{{ emailError }}</span>
            </div>
            <div class="form-box__btn-box btn-box">
              <button type="submit">Request Reset</button>
            </div>
            <p v-if="message" class="message">{{ message }}</p>
        </form>
        <router-link to="/sign-in" class="forgot-password">Sign In</router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
        emailError: ''
      };
    },
    methods: {
      async requestReset() {
        try {
          const response = await fetch('http://localhost:5173/api/request-reset', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.email })
          });
          const data = await response.json();
          this.message = data.message;
        } catch (error) {
          this.message = 'An error occurred. Please try again.';
        }
      }
    }
  };
  </script>

<style lang="scss">
  @import '/src/assets/main.scss';
  </style>
  