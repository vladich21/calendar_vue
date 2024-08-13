export default (await import('vue')).defineComponent({
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
            }
            catch (error) {
                this.message = 'An error occurred. Please try again.';
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.requestReset) }, ...{ class: ("form__form-box form-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__input-box input-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("input-box__info") }, for: ("email"), });
    // @ts-ignore
    [requestReset,];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-box__btn-box btn-box") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    if (__VLS_ctx.message) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("message") }, });
        (__VLS_ctx.message);
        // @ts-ignore
        [message, message,];
    }
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/sign-in"), ...{ class: ("forgot-password") }, }));
    const __VLS_2 = __VLS_1({ to: ("/sign-in"), ...{ class: ("forgot-password") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/sign-in"), ...{ class: ("forgot-password") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['form'];
        __VLS_styleScopedClasses['form__logo'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['form__content'];
        __VLS_styleScopedClasses['form__title'];
        __VLS_styleScopedClasses['form__form-box'];
        __VLS_styleScopedClasses['form-box'];
        __VLS_styleScopedClasses['form-box__input-box'];
        __VLS_styleScopedClasses['input-box'];
        __VLS_styleScopedClasses['input-box__info'];
        __VLS_styleScopedClasses['input-box__icon'];
        __VLS_styleScopedClasses['error'];
        __VLS_styleScopedClasses['form-box__btn-box'];
        __VLS_styleScopedClasses['btn-box'];
        __VLS_styleScopedClasses['message'];
        __VLS_styleScopedClasses['forgot-password'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
