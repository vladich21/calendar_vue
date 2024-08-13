import axios from 'axios';
import { validator } from '../js/utils';
import eye from '@/assets/img/svg/eye.svg';
import eyeClose from '@/assets/img/svg/eye_close.svg';
export default (await import('vue')).defineComponent({
    setup() {
        return { eyeClose, eye };
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
        };
    },
    computed: {
        passwordRules() {
            const lowerCaseLetters = /[a-z]/;
            const upperCaseLetters = /[A-Z]/;
            const numbers = /[0-9]/;
            const { include: [includeLowerCase, includeUpperCase, includeNumber], minLength } = validator(this.password).test({
                include: [lowerCaseLetters, upperCaseLetters, numbers],
                minLength: 8,
            });
            return [
                { text: 'minimum 8 characters', isValid: minLength },
                { text: 'capital letter', isValid: includeUpperCase },
                { text: 'numbers', isValid: includeNumber },
                { text: 'letters of the Latin alphabet only', isValid: includeLowerCase }
            ];
        },
        submitButtonIsDisabled() {
            return !this.passwordRules.every((el) => el.isValid) || this.isLoading;
        },
        getEyeIcon() {
            return this.passwordIsVisible ? this.eye : this.eyeClose;
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordIsVisible = !this.passwordIsVisible;
        },
        handlePasswordFieldFocus() {
            this.error = null;
            this.passworFieldFocus = true;
        },
        handlePasswordFieldBlur() {
            this.passworFieldFocus = false;
        },
        async handleSubmit() {
            this.error = null;
            this.isLoading = true;
            const requestData = {
                email: this.email,
                password: this.password,
                First_name: this.First_name,
                Last_name: this.Last_name,
            };
            try {
                const response = await axios.post('http://127.0.0.1:5173/api/registration', requestData);
                console.log('Registration successful:', response.data);
                this.$router.push('/sign-in');
                // Handle successful registration (e.g., redirect to login page)
            }
            catch (e) {
                this.error = e.response?.data?.message || 'Something went wrong...';
            }
            finally {
                this.isLoading = false;
            }
        },
        async fetchRegistrationPage() {
            try {
                const response = await axios.get('http://127.0.0.1:5173/api/registration');
                console.log('Registration successful:', response.data);
            }
            catch (e) {
                console.error('Error fetching registration page:', e);
            }
        }
    },
    created() {
        this.fetchRegistrationPage();
    }
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("form__logo logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("form__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("form__subtitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("form__subtitle") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/sign-in"), ...{ class: ("form__link") }, }));
    const __VLS_2 = __VLS_1({ to: ("/sign-in"), ...{ class: ("form__link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/sign-in"), ...{ class: ("form__link") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("form__form-box form-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("email"), });
    // @ts-ignore
    [handleSubmit,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/email.svg"), alt: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), name: ("email"), id: ("email"), placeholder: ("Enter your email address"), required: (true), });
    (__VLS_ctx.email);
    // @ts-ignore
    [email,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/password.svg"), alt: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onFocus: (__VLS_ctx.handlePasswordFieldFocus) }, ...{ onBlur: (__VLS_ctx.handlePasswordFieldBlur) }, type: ((__VLS_ctx.passwordIsVisible ? 'text' : 'password')), name: ("password"), id: ("password"), placeholder: ("Enter your password"), pattern: ("\u0028\u003f\u003d\u002e\u002a\u005c\u0064\u0029\u0028\u003f\u003d\u002e\u002a\u005b\u0061\u002d\u007a\u005d\u0029\u0028\u003f\u003d\u002e\u002a\u005b\u0041\u002d\u005a\u005d\u0029\u002e\u007b\u0038\u002c\u007d"), title: (""), maxlength: ("24"), required: (true), });
    (__VLS_ctx.password);
    // @ts-ignore
    [handlePasswordFieldFocus, handlePasswordFieldBlur, passwordIsVisible, password,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.togglePasswordVisibility) }, ...{ class: ("input-box-eye") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.getEyeIcon)), ...{ class: ("password__eye") }, id: ("eyeicon"), alt: ("eye icon"), });
    // @ts-ignore
    [togglePasswordVisibility, getEyeIcon,];
    if (__VLS_ctx.passworFieldFocus) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("message"), ...{ class: ("message_psw") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("message_h3") }, });
        // @ts-ignore
        [passworFieldFocus,];
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.passwordRules))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: (({ valid: item.isValid, invalid: !item.isValid })) }, key: ((item.text)), });
            __VLS_styleScopedClasses = ({ valid: item.isValid, invalid: !item.isValid });
            (item.text);
            // @ts-ignore
            [passwordRules,];
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("First_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("First_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/user.svg"), alt: ("First_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.First_name)), type: ("text"), name: ("First_name"), id: ("First_name"), placeholder: ("Enter your First Name"), required: (true), });
    // @ts-ignore
    [First_name,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("Last_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("Last_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/user.svg"), alt: ("Last_name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.Last_name)), type: ("text"), name: ("Last_name"), id: ("Last_name"), placeholder: ("Enter your Last Name"), });
    // @ts-ignore
    [Last_name,];
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error);
        // @ts-ignore
        [error, error,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__btn-box btn-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ id: ("registerButton"), type: ("submit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("privacy-policy") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/terms-of-service"), ...{ class: ("privacy-link") }, }));
    const __VLS_8 = __VLS_7({ to: ("/terms-of-service"), ...{ class: ("privacy-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/terms-of-service"), ...{ class: ("privacy-link") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/privacy-policy"), ...{ class: ("privacy-link") }, }));
    const __VLS_14 = __VLS_13({ to: ("/privacy-policy"), ...{ class: ("privacy-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/privacy-policy"), ...{ class: ("privacy-link") }, }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__social") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("form-box__social-info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__social-items") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/github.svg"), alt: ("github"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/google.svg"), alt: ("google"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/apple.svg"), alt: ("apple"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['form'];
        __VLS_styleScopedClasses['form__logo'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['form__content'];
        __VLS_styleScopedClasses['form__title'];
        __VLS_styleScopedClasses['form__subtitle'];
        __VLS_styleScopedClasses['form__subtitle'];
        __VLS_styleScopedClasses['form__link'];
        __VLS_styleScopedClasses['form__form-box'];
        __VLS_styleScopedClasses['form-box'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['input-box-eye'];
        __VLS_styleScopedClasses['password__eye'];
        __VLS_styleScopedClasses['message_psw'];
        __VLS_styleScopedClasses['message_h3'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['form-box__btn-box'];
        __VLS_styleScopedClasses['btn-box'];
        __VLS_styleScopedClasses['privacy-policy'];
        __VLS_styleScopedClasses['privacy-link'];
        __VLS_styleScopedClasses['privacy-link'];
        __VLS_styleScopedClasses['form-box__social'];
        __VLS_styleScopedClasses['form-box__social-info'];
        __VLS_styleScopedClasses['form-box__social-items'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
