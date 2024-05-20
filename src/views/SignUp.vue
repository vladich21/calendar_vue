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
        <form @submit.prevent="handleSubmit" class="form__form-box form-box">
          <div class="form-box__input-box input-box">
            <label class="input-box__info" for="email">Email</label>
            <label class="input-box__icon" for="email">
              <img src="@/assets/img/svg/email.svg" alt="email" />
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
              <img src="@/assets/img/svg/password.svg" alt="password" />
            </label>
            <input
              v-model="password"
              :type="passwordIsVisible ? 'text' : 'password'"
              @focus="handlePasswordFieldFocus"
              @blur="handlePasswordFieldBlur"
              name="password"
              id="password"
              placeholder="Enter your password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title=""
              required
            />
            <span @click="togglePasswordVisibility" class="input-box-eye">
              <img :src="getEyeIcon" class="password__eye" id="eyeicon" alt="eye icon" />
            </span>
            <div v-if="passworFieldFocus" id="message" class="message_psw">
              <h3 class="message_h3">The password must contain the following:</h3>
              <p
                v-for="item in passwordRules"
                :class="{ valid: item.isValid, invalid: !item.isValid }"
                :key="item.text"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
          <p v-if="error">{{ error }}</p>
          <div class="form-box__btn-box btn-box">
            <button :disabled="submitButtonIsDisabled" id="registerButton" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { validator } from '../js/utils'
import eye from '@/assets/img/svg/eye.svg'
import eyeClose from '@/assets/img/svg/eye_close.svg'

export default {
  setup() {
    return { eyeClose, eye }
  },
  data() {
    return {
      email: '',
      password: '',
      passworFieldFocus: false,
      passwordIsVisible: false,
      isLoading: false,
      error: null
    }
  },
  computed: {
    passwordRules() {
      const lowerCaseLetters = /[a-z]/
      const upperCaseLetters = /[A-Z]/
      const numbers = /[0-9]/
      const {
        include: [includeLowerCase, includeUpperCase, includeNumber],
        minLength
      } = validator(this.password).test({
        include: [lowerCaseLetters, upperCaseLetters, numbers],
        minLength: 8
      })
      return [
        { text: 'minimum 8 characters', isValid: minLength },
        { text: 'capital letter', isValid: includeUpperCase },
        { text: 'numbers', isValid: includeNumber },
        { text: 'letters of the Latin alphabet only', isValid: includeLowerCase }
      ]
    },
    submitButtonIsDisabled() {
      return !this.passwordRules.every((el) => el.isValid) || this.isLoading
    },
    getEyeIcon() {
      return this.passwordIsVisible ? this.eyeClose : this.eye
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordIsVisible = !this.passwordIsVisible
    },
    handlePasswordFieldFocus() {
      this.error = null
      this.passworFieldFocus = true
    },
    handlePasswordFieldBlur() {
      this.passworFieldFocus = false
    },
    async handleSubmit(e) {
      try {
        this.error = null
        this.isLoading = true
        const body = new FormData(e.target)
        const response = await fetch('api/registration', { method: 'POST', body })
        if (!response.ok) {
          throw new Error()
        }
      } catch (e) {
        this.error = 'Что-то пошло не так...'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
@import '@/assets/main.scss';
/* Дополнительные стили */
</style>
