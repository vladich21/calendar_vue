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
                maxlength="24"
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
          <div v-if="showModal" class="modal">
            <div class="modal-content">
              <p>A confirmation email has been sent to {{ email }}. Please check your email to confirm your account.</p>
              <span class="close" @click="closeModal">&times;</span>
            </div>
              </div>
        </div>
      </section>
    </div>
  </template>

  <script>
  import { validator } from '../js/utils';
  import eye from '@/assets/img/svg/eye.svg';
  import eyeClose from '@/assets/img/svg/eye_close.svg';
  import { mainApi, fetchPostRegistration } from '@/api/config.ts';

  export default {
    setup() {
      return { eyeClose, eye }
    },
    //Хранит данные 
    data() {
      return {
        email: '',
        password: '',
        First_name: '',
        Last_name: '',
        passworFieldFocus: false,
        passwordIsVisible: false,
        showModal: false,
        isLoading: false,
        error: ''
      }
    },
    computed: { //Вычисляемые свойства
      passwordRules() {
        const lowerCaseLetters = /[a-z]/
        const upperCaseLetters = /[A-Z]/
        const numbers = /[0-9]/
        const {
          include: [includeLowerCase, includeUpperCase, includeNumber],
          minLength
        } = validator(this.password).test({
          include: [lowerCaseLetters, upperCaseLetters, numbers],
          minLength: 8,
        })
        return [
          { text: 'minimum 8 characters', isValid: minLength },
          { text: 'capital letter', isValid: includeUpperCase },
          { text: 'numbers', isValid: includeNumber },
          { text: 'letters of the Latin alphabet only', isValid: includeLowerCase }
        ]
      },
      submitButtonIsDisabled() { //возвращает true, если кнопка отправки должна быть отключена
        return !this.passwordRules.every((el) => el.isValid) || this.isLoading
      },
      getEyeIcon() { //возвращает соответствующую иконку для отображения состояния видимости пароля.

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
      async handleSubmit() { // отправляет данные регистрации на сервер, обрабатывает ответ и возможные ошибки.
        this.error = null
        this.isLoading = true

        try {
          const response = await fetchPostRegistration({
            email:this.email,
            password:this.password,
            First_name:this.First_name,
            Last_name:this.Last_name
          })
          // console.log('Registration successful:', response.data);
          
          if(response.status === 200) {
            await this.sendConfirmationEmail()
            this.showModal = true
          }

          // Handle successful registration (e.g., redirect to login page)
        } catch (e) {
          this.error = e.response?.data?.message || 'Something went wrong...'
        } finally {
          this.isLoading = false
        }
      }, 
      async sendConfirmationEmail() {
      try {
        await mainApi.post('/send-confirmation-email', { email: this.email });
      } catch (e) {
        console.error('Ошибка при отправке письма для подтверждения:', e);
      }
    },

    closeModal() {
      this. showModal = false;
      this.$router.push('/sign-in');
    },
      async fetchRegistrationPage() { //выполняет GET-запрос для получения страницы регистрации
        try {
          const response = await mainApi.get('/registration');
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

  .modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transform: translateY(-50%);
  max-width: 400px;
  text-align: center;
}
.close {
  position: relative;
  bottom: 65px;
  left: 50%;
  font-size: 24px;
  cursor: pointer;
}
.close:hover{
  color: #999999;
}
  .error {
  color: red;
}

  </style>