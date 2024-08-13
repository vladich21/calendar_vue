import { ref, onMounted, onBeforeUnmount } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isDropdownOpen = ref(false);
const isBurgerOpen = ref(false);
const dropdownRef = ref(null);
const toggleDropdown = (e) => {
    if (e.target && e.target.getAttribute('data-id') === 'bg') {
        isDropdownOpen.value = false;
        return;
    }
    isDropdownOpen.value = !isDropdownOpen.value;
};
const toggleBurger = () => {
    isBurgerOpen.value = !isBurgerOpen.value;
};
const handleOutsideClick = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        isDropdownOpen.value = false;
    }
};
const onClick = (e) => {
    handleOutsideClick(e);
};
const handleMenuClick = () => {
    isBurgerOpen.value = false;
    isDropdownOpen.value = true;
};
onMounted(() => {
    document.addEventListener('click', onClick);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', onClick);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    if (__VLS_ctx.isDropdownOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleDropdown) }, ...{ class: ("background") }, "data-id": ("bg"), });
        // @ts-ignore
        [isDropdownOpen, toggleDropdown,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/calendar.svg"), alt: ("Calendar"), ...{ class: ("logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: (({ open: __VLS_ctx.isBurgerOpen })) }, });
    __VLS_styleScopedClasses = ({ open: isBurgerOpen });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (__VLS_ctx.toggleDropdown) }, ...{ class: (({ dropdown: true, open: __VLS_ctx.isDropdownOpen })) }, ref: ("dropdownRef"), });
    // @ts-ignore
    (__VLS_ctx.dropdownRef);
    __VLS_styleScopedClasses = ({ dropdown: true, open: isDropdownOpen });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/img/svg/down-arrow.svg"), alt: ("dropdown"), ...{ class: ("dropdown_img") }, });
    // @ts-ignore
    [isDropdownOpen, toggleDropdown, isBurgerOpen, dropdownRef,];
    if (__VLS_ctx.isDropdownOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.handleMenuClick) }, href: ("#todolist"), });
        // @ts-ignore
        [isDropdownOpen, handleMenuClick,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.handleMenuClick) }, href: ("#MyDay"), });
        // @ts-ignore
        [handleMenuClick,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.handleMenuClick) }, href: ("#7Days"), });
        // @ts-ignore
        [handleMenuClick,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.handleMenuClick) }, href: ("#Calendar"), });
        // @ts-ignore
        [handleMenuClick,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("home_btn") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("home_btn") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), ...{ class: ("home_btn") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleBurger) }, ...{ class: ("burger") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    [toggleBurger,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['background'];
        __VLS_styleScopedClasses['app'];
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['dropdown_img'];
        __VLS_styleScopedClasses['dropdown-content'];
        __VLS_styleScopedClasses['home_btn'];
        __VLS_styleScopedClasses['burger'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                isDropdownOpen: isDropdownOpen,
                isBurgerOpen: isBurgerOpen,
                dropdownRef: dropdownRef,
                toggleDropdown: toggleDropdown,
                toggleBurger: toggleBurger,
                handleMenuClick: handleMenuClick,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
