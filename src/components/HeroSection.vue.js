import { ref, onMounted, onBeforeUnmount } from 'vue';
import spotify from '@/assets/img/svg/Spotify.svg';
import netflix from '@/assets/img/svg/netflix.svg';
import google from '@/assets/img/svg/google_hero.svg';
import wework from '@/assets/img/svg/wework.svg';
import yandex from '@/assets/img/svg/yandex_hero.svg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const mainButton = ref(null);
const fixedButton = ref(null);
const reviewsContainerRef = ref(null);
const isVisibleReviewSection = ref(false);
const showButton = ref(false);
const throttle = ref(false);
const title = "Organize your work and life";
const subtitle = "Simple and universal task planning for any of your tasks: manage your time and effectively achieve your goals.";
const textUser = "Join thousands highly effective individuals, families and teams";
const todolistTextFirst = "Now you don't have to keep everything in your head.";
const todolistTextSecond = "A to-do list easily helps you organize your time and achieve your goals.";
const myDayText = "My Day is a convenient tool for planning and organizing your work time and personal affairs.";
const sevenDaysText = "Planning 7 days ahead allows you to effectively distribute tasks, providing a structured approach to achieving your weekly goals.";
const calendarText = "My Day is a convenient tool for planning and organizing your work time and personal affairs.";
const reviewOne = "This app has transformed the way I organize my life. Highly recommend it!";
const reviewTwo = "Simple, intuitive, and effective. Exactly what I needed to stay on top of my tasks.";
const reviewThree = "A fantastic tool for team collaboration and task management. Couldn't live without it.";
const possibilities = [
    "Organize all your to-dos into lists and projects.",
    "Color code to help you prioritize.",
    "Setting deadlines will help you progress towards your goals.",
    "Collaborate as a team on one to-do list and share them with others."
];
const possibilities_Day = [
    "Ability to easily edit, add and delete tasks.",
    "Convenient interface for solving your problems.",
    "Having a clear understanding of your daily tasks and priorities increases productivity.",
    "Wide variety of sorting types."
];
const possibilities_sevenDays = [
    "Reviewing tasks for the week ahead helps in more effective planning.",
    "Easily changing the task between days of the week allows you to adapt to changing circumstances and new priorities.",
    "A clean and simple design makes the app enjoyable to use and reduces visual clutter.",
];
const possibilities_calendar = [
    "It's easy to mark important events so you don't miss important things.",
    "The small calendar allows you to quickly navigate through the months and select a specific month, week or day for easy navigation.",
    "A clear division of days and weeks helps to quickly assess the amount of work."
];
const logos = [
    { src: spotify, alt: "spotify", height: 100, width: 80, class: "logo" },
    { src: netflix, alt: "netflix", height: 100, width: 80, class: "logo" },
    { src: google, alt: "google", height: 100, width: 80, class: "logo" },
    { src: wework, alt: "wework", height: 100, width: 180, class: "logoL" },
    { src: yandex, alt: "yandex", height: 100, width: 180, class: "logoL" }
];
let animItems;
const handleScroll = () => {
    if (mainButton.value && fixedButton.value) {
        const rect = mainButton.value.getBoundingClientRect();
        showButton.value = rect.top <= 0;
    }
};
const animOnScroll = () => {
    if (animItems.length > 0) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if (window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add('_active');
            }
            else {
                animItem.classList.remove('_active');
            }
        }
    }
};
const offset = (el) => {
    const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop, left: rect.left + scrollLeft
    };
};
onMounted(() => {
    animItems = document.querySelectorAll('._anim-items');
    window.addEventListener('scroll', animOnScroll);
    window.addEventListener('scroll', handleScroll);
    animOnScroll();
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', animOnScroll);
    window.removeEventListener('scroll', handleScroll);
});
onMounted(() => {
    const cb = (entries) => {
        if (throttle.value) {
            return;
        }
        throttle.value = true;
        setTimeout(() => (throttle.value = false), 100);
        entries.forEach((entry) => {
            isVisibleReviewSection.value = entry.isIntersecting;
        });
    };
    const observer = new IntersectionObserver(cb, { root: null, rootMargin: '0px', threshold: 0 });
    if (reviewsContainerRef.value) {
        observer.observe(reviewsContainerRef.value);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header_element") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("anim_h1 _anim-items") }, });
    (__VLS_ctx.title);
    // @ts-ignore
    [title,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("anim_p _anim-items") }, });
    (__VLS_ctx.subtitle);
    // @ts-ignore
    [subtitle,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button") }, ref: ("mainButton"), });
    // @ts-ignore
    (__VLS_ctx.mainButton);
    // @ts-ignore
    [mainButton,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/man_table3.jpg"), alt: ("life_style"), ...{ style: ({}) }, ...{ class: ("life_style_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("hero") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.textUser);
    // @ts-ignore
    [textUser,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("company") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user clients_logos") }, });
    for (const [logo] of __VLS_getVForSourceType((__VLS_ctx.logos))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ key: ((logo.alt)), loading: ("lazy"), src: ((logo.src)), alt: ((logo.alt)), height: ((logo.height)), width: ((logo.width)), decoding: ("async"), ...{ class: ((logo.class)) }, });
        __VLS_styleScopedClasses = (logo.class);
        // @ts-ignore
        [logos,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("to_do_list_container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("to_do_list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ id: ("todolist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p_first") }, });
    (__VLS_ctx.todolistTextFirst);
    // @ts-ignore
    [todolistTextFirst,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p_second") }, });
    (__VLS_ctx.todolistTextSecond);
    // @ts-ignore
    [todolistTextSecond,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-container_possibilities") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table__checkMark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("animated-list _anim-items") }, });
    for (const [possibility] of __VLS_getVForSourceType((__VLS_ctx.possibilities))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((possibility)), });
        (possibility);
        // @ts-ignore
        [possibilities,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/my_day.png"), alt: ("App"), ...{ class: ("to_do_list_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("myDay_container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("Day") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ id: ("MyDay"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.myDayText);
    // @ts-ignore
    [myDayText,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-container_myDay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table__checkMark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("animated-list _anim-items") }, });
    for (const [possibility] of __VLS_getVForSourceType((__VLS_ctx.possibilities_Day))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((possibility)), });
        (possibility);
        // @ts-ignore
        [possibilities_Day,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/my_day.png"), alt: ("App"), ...{ class: ("myDay_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sevenDays_container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sevenDay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ id: ("7Days"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.sevenDaysText);
    // @ts-ignore
    [sevenDaysText,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-container_sevenDays") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table__checkMark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("animated-list _anim-items") }, });
    for (const [possibility] of __VLS_getVForSourceType((__VLS_ctx.possibilities_sevenDays))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((possibility)), });
        (possibility);
        // @ts-ignore
        [possibilities_sevenDays,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/7 days.png"), alt: ("App"), ...{ class: ("sevenDays_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar_container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calend") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ id: ("Calendar"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.calendarText);
    // @ts-ignore
    [calendarText,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-container_calendar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table__checkMark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("animated-list _anim-items") }, });
    for (const [possibility] of __VLS_getVForSourceType((__VLS_ctx.possibilities_calendar))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((possibility)), });
        (possibility);
        // @ts-ignore
        [possibilities_calendar,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/img/calendar.png"), alt: ("App"), ...{ class: ("calendar_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ height: '69px' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("fixed-button") }, ...{ class: (({ static: __VLS_ctx.isVisibleReviewSection, show: __VLS_ctx.showButton })) }, ref: ("fixedButton"), });
    // @ts-ignore
    (__VLS_ctx.fixedButton);
    __VLS_styleScopedClasses = ({ static: isVisibleReviewSection, show: showButton });
    // @ts-ignore
    [isVisibleReviewSection, showButton, fixedButton,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ref: ("reviewsContainerRef"), ...{ class: ("reviews") }, });
    // @ts-ignore
    (__VLS_ctx.reviewsContainerRef);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("reviews_container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    [reviewsContainerRef,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review_section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.reviewOne);
    // @ts-ignore
    [reviewOne,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review_section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.reviewTwo);
    // @ts-ignore
    [reviewTwo,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review_section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("review") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.reviewThree);
    // @ts-ignore
    [reviewThree,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['header_element'];
        __VLS_styleScopedClasses['anim_h1'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['anim_p'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['button'];
        __VLS_styleScopedClasses['life_style_img'];
        __VLS_styleScopedClasses['hero'];
        __VLS_styleScopedClasses['user'];
        __VLS_styleScopedClasses['company'];
        __VLS_styleScopedClasses['user'];
        __VLS_styleScopedClasses['clients_logos'];
        __VLS_styleScopedClasses['to_do_list_container'];
        __VLS_styleScopedClasses['to_do_list'];
        __VLS_styleScopedClasses['p_first'];
        __VLS_styleScopedClasses['p_second'];
        __VLS_styleScopedClasses['img-container_possibilities'];
        __VLS_styleScopedClasses['table__checkMark'];
        __VLS_styleScopedClasses['animated-list'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['to_do_list_img'];
        __VLS_styleScopedClasses['myDay_container'];
        __VLS_styleScopedClasses['Day'];
        __VLS_styleScopedClasses['img-container_myDay'];
        __VLS_styleScopedClasses['table__checkMark'];
        __VLS_styleScopedClasses['animated-list'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['myDay_img'];
        __VLS_styleScopedClasses['sevenDays_container'];
        __VLS_styleScopedClasses['sevenDay'];
        __VLS_styleScopedClasses['img-container_sevenDays'];
        __VLS_styleScopedClasses['table__checkMark'];
        __VLS_styleScopedClasses['animated-list'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['sevenDays_img'];
        __VLS_styleScopedClasses['calendar_container'];
        __VLS_styleScopedClasses['calend'];
        __VLS_styleScopedClasses['img-container_calendar'];
        __VLS_styleScopedClasses['table__checkMark'];
        __VLS_styleScopedClasses['animated-list'];
        __VLS_styleScopedClasses['_anim-items'];
        __VLS_styleScopedClasses['calendar_img'];
        __VLS_styleScopedClasses['fixed-button'];
        __VLS_styleScopedClasses['reviews'];
        __VLS_styleScopedClasses['reviews_container'];
        __VLS_styleScopedClasses['review_section'];
        __VLS_styleScopedClasses['review'];
        __VLS_styleScopedClasses['review_section'];
        __VLS_styleScopedClasses['review'];
        __VLS_styleScopedClasses['review_section'];
        __VLS_styleScopedClasses['review'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                mainButton: mainButton,
                fixedButton: fixedButton,
                reviewsContainerRef: reviewsContainerRef,
                isVisibleReviewSection: isVisibleReviewSection,
                showButton: showButton,
                title: title,
                subtitle: subtitle,
                textUser: textUser,
                todolistTextFirst: todolistTextFirst,
                todolistTextSecond: todolistTextSecond,
                myDayText: myDayText,
                sevenDaysText: sevenDaysText,
                calendarText: calendarText,
                reviewOne: reviewOne,
                reviewTwo: reviewTwo,
                reviewThree: reviewThree,
                possibilities: possibilities,
                possibilities_Day: possibilities_Day,
                possibilities_sevenDays: possibilities_sevenDays,
                possibilities_calendar: possibilities_calendar,
                logos: logos,
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
