import { onBeforeMount, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { authMe } from '@/api/authMe';
import { useAuthorizationStore } from '../store/useAuthorizationStore';
import Preloader from '@/assets/icons/Preloader.vue';
import Sidebar from '../components/Sidebar.vue';
import Grid from '@/assets/icons/Grid.vue';
import Printer from '@/assets/icons/Printer.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const authorizationStore = useAuthorizationStore();
const router = useRouter();
const taskName = ref('');
const tasks = ref([]);
const viewMode = ref('list');
const isDropdownOpen = ref(false);
const priorityDropdownTaskId = ref(null);
onBeforeMount(async () => {
    await validateAuthorization();
});
onMounted(() => {
    document.addEventListener('mousedown', handleOutsideClick);
});
onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleOutsideClick);
});
async function validateAuthorization() {
    if (authorizationStore.isSuccess) {
        return;
    }
    authorizationStore.setIsLoading(true);
    try {
        const response = await authMe();
        if (response.status === 200) {
            authorizationStore.setIsSuccess(true);
        }
    }
    catch (e) {
        handleAuthError(e);
    }
    finally {
        authorizationStore.setIsLoading(false);
    }
}
function handleAuthError(error) {
    const axiosError = error;
    if (axiosError.response?.status === 401) {
        router.replace('/preview');
    }
}
function toggleTooltip(task, type) {
    if (task) {
        console.log(`Toggling ${type} tooltip for task: ${task.name}`);
    }
    else {
        console.log(`Toggling ${type} tooltip`);
    }
}
function addTask() {
    if (taskName.value.trim()) {
        tasks.value.push({
            _id: Date.now().toString(),
            name: taskName.value,
            isCompleted: false,
            type: 'business', // Логика определения типа задачи может быть добавлена позже
            isEditing: false,
            priority: 'medium', // Добавляем тип приоритета по умолчанию
            dateCompleted: new Date(), // Добавляем дату завершения по умолчанию
        });
        taskName.value = '';
    }
}
function toggleTaskCompletion(taskId) {
    const task = tasks.value.find(t => t._id === taskId);
    if (task) {
        task.isCompleted = !task.isCompleted; // Переключение состояния выполнения
    }
}
function closeTask(taskId) {
    tasks.value = tasks.value.filter(t => t._id !== taskId);
}
function editTask(task) {
    task.isEditing = true;
}
function saveTask(task) {
    task.isEditing = false;
}
function setViewMode(mode) {
    viewMode.value = mode;
}
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
function handleOutsideClick(e) {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown && !dropdown.contains(e.target)) {
        isDropdownOpen.value = false;
    }
}
function sortBy(criteria) {
    console.log(`Sorting by: ${criteria}`);
    switch (criteria) {
        case 'priority':
            tasks.value.sort((a, b) => {
                const priorityOrder = { hard: 3, medium: 2, easy: 1 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            });
            break;
        case 'dateCompleted':
            tasks.value.sort((a, b) => (a.dateCompleted < b.dateCompleted ? 1 : -1));
            break;
        case 'alphabet':
            tasks.value.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    isDropdownOpen.value = false;
}
function togglePriorityDropdown(taskId) {
    if (priorityDropdownTaskId.value === taskId) {
        priorityDropdownTaskId.value = null;
    }
    else {
        priorityDropdownTaskId.value = taskId;
    }
}
function isPriorityDropdownOpen(taskId) {
    return priorityDropdownTaskId.value === taskId;
}
function getPriorityClass(priority) {
    switch (priority) {
        case 'hard':
            return 'task-important';
        case 'medium':
            return 'task-medium';
        case 'easy':
            return 'task-easy';
        default:
            return '';
    }
}
function setTaskPriority(taskId, priority) {
    const task = tasks.value.find(task => task._id === taskId);
    if (task) {
        task.priority = priority;
    }
    priorityDropdownTaskId.value = null;
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.authorizationStore.isLoading) {
        // @ts-ignore
        [Preloader,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Preloader, new Preloader({ height: ("30px"), width: ("30px"), ...{ class: ("preloader") }, }));
        const __VLS_1 = __VLS_0({ height: ("30px"), width: ("30px"), ...{ class: ("preloader") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ height: ("30px"), width: ("30px"), ...{ class: ("preloader") }, }));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Preloader, __VLS_1));
        // @ts-ignore
        [authorizationStore,];
    }
    else {
        var __VLS_5 = {};
        // @ts-ignore
        [Sidebar,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({}));
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({}));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Sidebar, __VLS_7));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("main-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("search_tasks") }, type: ("text"), placeholder: ("Search..."), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar__date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date-p_Week") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date-p_Day") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date-p_Month") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar__actions") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleTooltip(null, 'printer');
                // @ts-ignore
                [toggleTooltip,];
            } }, ...{ class: ("task_button") }, });
    // @ts-ignore
    [Printer,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Printer, new Printer({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Printer, __VLS_12));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tooltiptext") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setViewMode('grid');
                // @ts-ignore
                [setViewMode,];
            } }, ...{ class: ("task_button") }, ...{ class: (({ active: __VLS_ctx.viewMode === 'grid' })) }, });
    __VLS_styleScopedClasses = ({ active: viewMode === 'grid' });
    // @ts-ignore
    [Grid,];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(Grid, new Grid({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({}));
    const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Grid, __VLS_17));
    // @ts-ignore
    [viewMode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tooltiptext") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setViewMode('list');
                // @ts-ignore
                [setViewMode,];
            } }, ...{ class: ("task_button") }, ...{ class: (({ active: __VLS_ctx.viewMode === 'list' })) }, });
    __VLS_styleScopedClasses = ({ active: viewMode === 'list' });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/list.svg"), alt: ("list"), });
    // @ts-ignore
    [viewMode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tooltiptext") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sorting") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDropdown) }, ...{ class: ("task_button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/Sorting.svg"), alt: (""), });
    // @ts-ignore
    [toggleDropdown,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tooltiptext") }, });
    if (__VLS_ctx.isDropdownOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown-content opacity") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isDropdownOpen)))
                        return;
                    __VLS_ctx.sortBy('priority');
                    // @ts-ignore
                    [isDropdownOpen, sortBy,];
                } }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isDropdownOpen)))
                        return;
                    __VLS_ctx.sortBy('dateCompleted');
                    // @ts-ignore
                    [sortBy,];
                } }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isDropdownOpen)))
                        return;
                    __VLS_ctx.sortBy('alphabet');
                    // @ts-ignore
                    [sortBy,];
                } }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tasks") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.addTask) }, ...{ class: ("add-task") }, type: ("text"), placeholder: ("+ Add task"), value: ((__VLS_ctx.taskName)), });
    // @ts-ignore
    [addTask, taskName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addTask) }, ...{ class: ("add-task_button") }, });
    // @ts-ignore
    [addTask,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tasks_new") }, ...{ class: ((__VLS_ctx.viewMode)) }, });
    __VLS_styleScopedClasses = (viewMode);
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task") }, key: ((task._id)), ...{ class: ((['task-item', __VLS_ctx.getPriorityClass(task.priority), __VLS_ctx.viewMode])) }, });
        __VLS_styleScopedClasses = (['task-item', getPriorityClass(task.priority), viewMode]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task_left") }, ...{ class: (({ completed: task.isCompleted })) }, });
        __VLS_styleScopedClasses = ({ completed: task.isCompleted });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.toggleTaskCompletion(task._id);
                    // @ts-ignore
                    [viewMode, viewMode, tasks, getPriorityClass, toggleTaskCompletion,];
                } }, ...{ class: ("round") }, ...{ class: (({ completed: task.isCompleted })) }, });
        __VLS_styleScopedClasses = ({ completed: task.isCompleted });
        if (!task.isEditing) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onDblclick: (...[$event]) => {
                        if (!((!task.isEditing)))
                            return;
                        __VLS_ctx.editTask(task);
                        // @ts-ignore
                        [editTask,];
                    } }, });
            (task.name);
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (...[$event]) => {
                        if (!(!((!task.isEditing))))
                            return;
                        __VLS_ctx.saveTask(task);
                        // @ts-ignore
                        [saveTask,];
                    } }, ...{ onKeyup: (...[$event]) => {
                        if (!(!((!task.isEditing))))
                            return;
                        __VLS_ctx.saveTask(task);
                        // @ts-ignore
                        [saveTask,];
                    } }, ...{ class: ("edit-input") }, });
            (task.name);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("task_options") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.editTask(task);
                    // @ts-ignore
                    [editTask,];
                } }, ...{ class: ("task_button") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/edit.svg"), alt: ("edit"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.togglePriorityDropdown(task._id);
                    // @ts-ignore
                    [togglePriorityDropdown,];
                } }, ...{ class: ("task_button ") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/pri.svg"), alt: ("priority"), });
        if (__VLS_ctx.isPriorityDropdownOpen(task._id)) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isPriorityDropdownOpen(task._id))))
                            return;
                        __VLS_ctx.setTaskPriority(task._id, 'hard');
                        // @ts-ignore
                        [isPriorityDropdownOpen, setTaskPriority,];
                    } }, ...{ class: ("priority-important") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isPriorityDropdownOpen(task._id))))
                            return;
                        __VLS_ctx.setTaskPriority(task._id, 'medium');
                        // @ts-ignore
                        [setTaskPriority,];
                    } }, ...{ class: ("priority-medium") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isPriorityDropdownOpen(task._id))))
                            return;
                        __VLS_ctx.setTaskPriority(task._id, 'easy');
                        // @ts-ignore
                        [setTaskPriority,];
                    } }, ...{ class: ("priority-easy") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.closeTask(task._id);
                    // @ts-ignore
                    [closeTask,];
                } }, ...{ class: ("task_button") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/img/svg/eee.svg"), alt: ("exit"), });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['preloader'];
        __VLS_styleScopedClasses['main-content'];
        __VLS_styleScopedClasses['search'];
        __VLS_styleScopedClasses['search_tasks'];
        __VLS_styleScopedClasses['calendar'];
        __VLS_styleScopedClasses['calendar__date'];
        __VLS_styleScopedClasses['date'];
        __VLS_styleScopedClasses['date-p_Week'];
        __VLS_styleScopedClasses['date-p_Day'];
        __VLS_styleScopedClasses['date-p_Month'];
        __VLS_styleScopedClasses['calendar__actions'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['tooltiptext'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['tooltiptext'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['tooltiptext'];
        __VLS_styleScopedClasses['sorting'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['tooltiptext'];
        __VLS_styleScopedClasses['dropdown-content'];
        __VLS_styleScopedClasses['opacity'];
        __VLS_styleScopedClasses['tasks'];
        __VLS_styleScopedClasses['add-task'];
        __VLS_styleScopedClasses['add-task_button'];
        __VLS_styleScopedClasses['tasks_new'];
        __VLS_styleScopedClasses['task'];
        __VLS_styleScopedClasses['task_left'];
        __VLS_styleScopedClasses['round'];
        __VLS_styleScopedClasses['edit-input'];
        __VLS_styleScopedClasses['task_options'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['task_button'];
        __VLS_styleScopedClasses['dropdown-content'];
        __VLS_styleScopedClasses['priority-important'];
        __VLS_styleScopedClasses['priority-medium'];
        __VLS_styleScopedClasses['priority-easy'];
        __VLS_styleScopedClasses['task_button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Preloader: Preloader,
                Sidebar: Sidebar,
                Grid: Grid,
                Printer: Printer,
                authorizationStore: authorizationStore,
                taskName: taskName,
                tasks: tasks,
                viewMode: viewMode,
                isDropdownOpen: isDropdownOpen,
                toggleTooltip: toggleTooltip,
                addTask: addTask,
                toggleTaskCompletion: toggleTaskCompletion,
                closeTask: closeTask,
                editTask: editTask,
                saveTask: saveTask,
                setViewMode: setViewMode,
                toggleDropdown: toggleDropdown,
                sortBy: sortBy,
                togglePriorityDropdown: togglePriorityDropdown,
                isPriorityDropdownOpen: isPriorityDropdownOpen,
                getPriorityClass: getPriorityClass,
                setTaskPriority: setTaskPriority,
            };
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default {};
;
