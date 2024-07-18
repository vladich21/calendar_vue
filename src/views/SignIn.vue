<template>
  <div class="container">
    <section class="form">
      <a href="#" class="form__logo logo">Your Logo</a>
      <div class="form__content">
        <h1 class="form__title">Sign in</h1>
        <p class="form__subtitle">If you don’t have an account register</p>
        <p class="form__subtitle">
          You can <router-link to="/sign-up" class="form__link">Register here!</router-link>
        </p>
        <form @submit.prevent="handleLogin" class="form__form-box form-box">
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
          <div class="form-box__input-box input-box">
            <label class="input-box__info" for="password">Password</label>
            <label class="input-box__icon" for="password">
              <img src="../assets/img/svg/password.svg" alt="password" />
            </label>
            <input
              v-model="password"
              :type="passwordIsVisible ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <span @click="togglePasswordVisibility" class="input-box-eye">
              <img :src="getEyeIcon" class="password__eye" alt="eye icon" />
            </span>
            <span v-if="passwordError" class="error">{{ passwordError }}</span>
          </div>
          <div class="form-box__btn-box btn-box">
            <button type="submit" :disabled="submitButtonIsDisabled">Login</button>
            <a :href="getRoute('forgot-password')" class="forgot-password">Forgot Password?</a>
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
import axios from 'axios';
import eyeOpenIcon from '@/assets/img/svg/eye.svg';
import eyeCloseIcon from '@/assets/img/svg/eye_close.svg';

export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      passwordIsVisible: false,
      isLoading: false,
      error: null
    };
  },
  computed: {
    getEyeIcon() {
      return this.passwordIsVisible ? eyeOpenIcon : eyeCloseIcon;
    },
    submitButtonIsDisabled() {
      return this.isLoading;
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordIsVisible = !this.passwordIsVisible;
    },
    async handleLogin() {
      this.error = null;
      this.isLoading = true;
      const requestData = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await axios.post('http://127.0.0.1:5173/api/login', requestData);
        console.log('Login successful:', response.data);
        this.$router.push('/preview');
      } catch (e) {
        this.error = e.response?.data?.message || 'Something went wrong...';
      } finally {
        this.isLoading = false;
      }
    },
    getRoute(route) {
      return this.$router.resolve({ name: route }).href;
    }
  }
};
</script>

<style lang="scss">
@import '/src/assets/main.scss';
</style>
