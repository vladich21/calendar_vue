const pages = ['sign-up', 'sign-in', 'header'];
export default (await import('vue')).defineComponent({
    computed: {
        alignCenter() {
            return pages.includes(this.$route.name);
        },
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ wrapper: true, '_align-center': __VLS_ctx.alignCenter })) }, });
    __VLS_styleScopedClasses = ({ wrapper: true, '_align-center': alignCenter });
    var __VLS_0 = {};
    // @ts-ignore
    [alignCenter,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
