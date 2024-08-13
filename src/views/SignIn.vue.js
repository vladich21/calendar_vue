import axios from 'axios';
import eyeOpenIcon from '@/assets/img/svg/eye.svg';
import eyeCloseIcon from '@/assets/img/svg/eye_close.svg';
export default (await import('vue')).defineComponent({
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
            }
            catch (e) {
                this.error = e.response?.data?.message || 'Something went wrong...';
            }
            finally {
                this.isLoading = false;
            }
        },
        getRoute(route) {
            return this.$router.resolve({ name: route }).href;
        }
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/sign-up"), ...{ class: ("form__link") }, }));
    const __VLS_2 = __VLS_1({ to: ("/sign-up"), ...{ class: ("form__link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/sign-up"), ...{ class: ("form__link") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleLogin) }, ...{ class: ("form__form-box form-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("email"), });
    // @ts-ignore
    [handleLogin,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/email.svg"), alt: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), name: ("email"), id: ("email"), placeholder: ("Enter your email address"), required: (true), });
    (__VLS_ctx.email);
    // @ts-ignore
    [email,];
    if (__VLS_ctx.emailError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("error") }, });
        (__VLS_ctx.emailError);
        // @ts-ignore
        [emailError, emailError,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__icon") }, for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/password.svg"), alt: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ((__VLS_ctx.passwordIsVisible ? 'text' : 'password')), name: ("password"), id: ("password"), placeholder: ("Enter your password"), required: (true), });
    (__VLS_ctx.password);
    // @ts-ignore
    [passwordIsVisible, password,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.togglePasswordVisibility) }, ...{ class: ("input-box-eye") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.getEyeIcon)), ...{ class: ("password__eye") }, alt: ("eye icon"), });
    // @ts-ignore
    [togglePasswordVisibility, getEyeIcon,];
    if (__VLS_ctx.passwordError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("error") }, });
        (__VLS_ctx.passwordError);
        // @ts-ignore
        [passwordError, passwordError,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__btn-box btn-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), disabled: ((__VLS_ctx.submitButtonIsDisabled)), });
    // @ts-ignore
    [submitButtonIsDisabled,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.getRoute('forgot-password'))), ...{ class: ("forgot-password") }, });
    // @ts-ignore
    [getRoute,];
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
        __VLS_styleScopedClasses['error'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['input-box-eye'];
        __VLS_styleScopedClasses['password__eye'];
        __VLS_styleScopedClasses['error'];
        __VLS_styleScopedClasses['form-box__btn-box'];
        __VLS_styleScopedClasses['btn-box'];
        __VLS_styleScopedClasses['forgot-password'];
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
