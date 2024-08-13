import { ref, onMounted, onBeforeUnmount } from 'vue';
import Settings from '../assets/icons/SettingsOutline.vue';
import CalendarOutline from '../assets/icons/CalendarOutline.vue';
import CalendarV2Outline from '../assets/icons/CalendarV2Outline.vue';
export default (await import('vue')).defineComponent({
    components: {
        Settings,
        CalendarOutline,
        CalendarV2Outline,
    },
    setup() {
        const isUserMenuOpen = ref(false);
        const isSideBarVisible = ref(true);
        const toggleUserMenu = () => {
            isUserMenuOpen.value = !isUserMenuOpen.value;
        };
        const toggleSideBar = () => {
            isSideBarVisible.value = !isSideBarVisible.value;
        };
        const handleOutsideClick = (e) => {
            const userMenu = document.querySelector('.user-menu');
            const userInfoPhoto = document.querySelector('.side-bar__user-info-photo');
            if (userMenu &&
                !userMenu.contains(e.target) &&
                userInfoPhoto &&
                !userInfoPhoto.contains(e.target)) {
                isUserMenuOpen.value = false;
            }
        };
        onMounted(() => {
            document.addEventListener('mousedown', handleOutsideClick);
        });
        onBeforeUnmount(() => {
            document.removeEventListener('mousedown', handleOutsideClick);
        });
        return {
            isUserMenuOpen,
            toggleUserMenu,
            isSideBarVisible,
            toggleSideBar,
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
    if (__VLS_ctx.isSideBarVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ((['side-bar', { hidden: !__VLS_ctx.isSideBarVisible }])) }, });
        __VLS_styleScopedClasses = (['side-bar', { hidden: !isSideBarVisible }]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.toggleSideBar) }, role: ("button"), ...{ class: ("side-bar__pin-button") }, });
        // @ts-ignore
        [isSideBarVisible, isSideBarVisible, toggleSideBar,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side-bar__section") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side-bar__user-info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleUserMenu) }, ...{ class: ("side-bar__user-info-photo") }, });
        // @ts-ignore
        [toggleUserMenu,];
        if (__VLS_ctx.isUserMenuOpen) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-menu") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-menu__header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user-menu__name") }, });
            // @ts-ignore
            [isUserMenuOpen,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-menu__section") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user-menu__title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("user-menu__button") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/svg/Group.svg"), alt: ("group"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("user-menu__button") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/svg/archive.svg"), alt: ("archive"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-menu__section") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("user-menu__title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("user-menu__button") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/svg/theme.svg"), alt: ("theme"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("user-menu__button") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/svg/bgc.svg"), alt: ("bgc"), });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_0 = {}
            .Settings;
        ({}.Settings);
        __VLS_components.Settings;
        // @ts-ignore
        [Settings,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({}));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_6 = {}
            .CalendarOutline;
        ({}.CalendarOutline);
        __VLS_components.CalendarOutline;
        // @ts-ignore
        [CalendarOutline,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_12 = {}
            .CalendarV2Outline;
        ({}.CalendarV2Outline);
        __VLS_components.CalendarV2Outline;
        // @ts-ignore
        [CalendarV2Outline,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side-bar__actions") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    if (!__VLS_ctx.isSideBarVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleSideBar) }, ...{ class: ("side-bar-toggle") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        [isSideBarVisible, toggleSideBar,];
    }
    if (__VLS_ctx.isUserMenuOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleUserMenu) }, ...{ class: ("overlay") }, });
        // @ts-ignore
        [toggleUserMenu, isUserMenuOpen,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['side-bar__pin-button'];
        __VLS_styleScopedClasses['side-bar__section'];
        __VLS_styleScopedClasses['side-bar__user-info'];
        __VLS_styleScopedClasses['side-bar__user-info-photo'];
        __VLS_styleScopedClasses['user-menu'];
        __VLS_styleScopedClasses['user-menu__header'];
        __VLS_styleScopedClasses['user-menu__name'];
        __VLS_styleScopedClasses['user-menu__section'];
        __VLS_styleScopedClasses['user-menu__title'];
        __VLS_styleScopedClasses['user-menu__button'];
        __VLS_styleScopedClasses['user-menu__button'];
        __VLS_styleScopedClasses['user-menu__section'];
        __VLS_styleScopedClasses['user-menu__title'];
        __VLS_styleScopedClasses['user-menu__button'];
        __VLS_styleScopedClasses['user-menu__button'];
        __VLS_styleScopedClasses['side-bar__actions'];
        __VLS_styleScopedClasses['side-bar-toggle'];
        __VLS_styleScopedClasses['overlay'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        Settings,
        CalendarOutline,
        CalendarV2Outline,
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
