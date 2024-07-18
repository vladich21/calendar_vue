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
            <div class="form-box__input-box input-box">
              <label class="input-box__info" for="First_name">First Name</label>
              <label class="input-box__icon" for="First_name">
                <img src="@/assets/img/svg/user.svg" alt="First_name" />
              </label>
              <input
                v-model="First_name"
                type="text"
                name="First_name"
                id="First_name"
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div class="form-box__input-box input-box">
              <label class="input-box__info" for="Last_name">Last Name</label>
              <label class="input-box__icon" for="Last_name">
                <img src="@/assets/img/svg/user.svg" alt="Last_name" />
              </label>
              <input
                v-model="Last_name"
                type="text"
                name="Last_name"
                id="Last_name"
                placeholder="Enter your Last Name"
              />
            </div>
            <p v-if="error">{{ error }}</p>
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
  import axios from 'axios';
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
        First_name: '',
        Last_name: '',
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
        return this.passwordIsVisible ? this.eye : this.eyeClose
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
      async handleSubmit() {
        this.error = null
        this.isLoading = true
        const requestData = {
          email: this.email,
          password: this.password,
          First_name: this.First_name,
          Last_name: this.Last_name,
        }

        try {
          const response = await axios.post('http://127.0.0.1:5173/api/registration', requestData);
          console.log('Registration successful:', response.data);
          this.$router.push('/sign-in');

          // Handle successful registration (e.g., redirect to login page)
        } catch (e) {
          this.error = e.response?.data?.message || 'Something went wrong...'
        } finally {
          this.isLoading = false
        }
      },
      async fetchRegistrationPage() {
        try {
          const response = await axios.get('http://127.0.0.1:5173/api/registration');
          console.log('Registration successful:', response.data);
        } catch (e) {
          console.error('Error fetching registration page:', e);
        }
      }
    },
    created() {
      this.fetchRegistrationPage();
    }
  };
  </script>

  <style scoped>
  @import '@/assets/main.scss';
  </style>