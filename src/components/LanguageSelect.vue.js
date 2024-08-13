export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedCountry: 'EN',
            countries: [
                { code: 'EN', name: 'English' },
                { code: 'ES', name: 'Spanish' },
                { code: 'FR', name: 'France' },
                { code: 'DE', name: 'Germany' },
                { code: 'CN', name: 'China' },
            ],
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("country-select") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.selectedCountry)), ...{ class: ("styled-select") }, });
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.countries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((country.code)), value: ((country.code)), });
        (country.name);
        // @ts-ignore
        [selectedCountry, countries,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['country-select'];
        __VLS_styleScopedClasses['styled-select'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
