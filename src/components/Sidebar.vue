<template>
  <Transition name="slide">
    <section v-if="isSideBarVisible" class="side-bar">
      <span role="button" class="side-bar__pin-button" @click="toggleSideBar">→</span>
      <div class="side-bar__section">
        <div class="side-bar__user-info">
          <div class="side-bar__user-info-photo" @click="toggleUserMenu"></div>
          <div v-if="isUserMenuOpen" class="user-menu">
            <div class="user-menu__header">
              <span class="user-menu__name">Name</span>
            </div>
            <div class="user-menu__section">
              <span class="user-menu__title">ACCOUNT</span>
              <button class="user-menu__button">
                <img src="../assets/img/svg/Group.svg" alt="group">
                My Profile
              </button>
              <button class="user-menu__button">
                <img src="../assets/img/svg/archive.svg" alt="archive">
                Archived Tasks
              </button>
            </div>
            <div class="user-menu__section">
              <span class="user-menu__title">PREFERENCE</span>
              <button class="user-menu__button">
                <img src="../assets/img/svg/theme.svg" alt="theme">
                Theme
              </button>
              <button class="user-menu__button">
                <img src="../assets/img/svg/bgc.svg" alt="bgc">
                Background
              </button>
            </div>
          </div>
        </div>
        <button>
          <span><Settings /> My day</span>
        </button>
        <button>
          <span><CalendarOutline /> Next 7 days</span>
        </button>
        <button>
          <span><CalendarV2Outline /> My Calendar</span>
        </button>
      </div>
      <div class="side-bar__actions">
        <button><span>+ new list</span></button>
        <button><span>+ add group</span></button>
      </div>
    </section>
  </Transition>
  <Transition name="fade">
    <div v-show="!isSideBarVisible" class="side-bar-toggle" @click="toggleSideBar">
      <span>→</span>
    </div>
  </Transition>
    <div v-if="isUserMenuOpen" class="overlay" @click="toggleUserMenu"></div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Settings from '../assets/icons/SettingsOutline.vue';
import CalendarOutline from '../assets/icons/CalendarOutline.vue';
import CalendarV2Outline from '../assets/icons/CalendarV2Outline.vue';

export default {
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
const handleOutsideClick = (e: MouseEvent) => {
const userMenu = document.querySelector('.user-menu');
const userInfoPhoto = document.querySelector('.side-bar__user-info-photo');
if (
userMenu &&
!userMenu.contains(e.target as Node) &&
userInfoPhoto &&
!userInfoPhoto.contains(e.target as Node)
) {
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
};
</script>

<style lang="scss">
@import '../assets/scss/vars.scss';

.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.side-bar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  background-color: $white;
  position: relative;
  transition: transform 0.4s ease;
  
  &__section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    height: 80px;
    margin-bottom: 25px;
  }

  &__user-info {
    display: flex;
    height: 115px;
    align-items: center;
  }

  &__user-info-photo {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: $grey2;
    border: 1.5px solid transparent;
    margin: 0 20px 0 24px;
    cursor: pointer;

    &:hover {
      border-color: $blue;
    }
  }

  &__pin-button {
    position: absolute;
    cursor: pointer;
    right: -38px;
    background-color: $white;
    padding: 10px;
    border: 1px solid $grey2;
    cursor: pointer;
  }

  & button {
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    transition: background 0.3s;
    &:hover {
      background-color: $grey2;
    }

    & svg {
      margin-right: 10px;
    }

    & span {
      margin-left: 10px;
    }
  }
}

.user-menu {
  position: absolute;
  top: 85px;
  left: 5px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.21);
  border-radius: 5px;
  overflow: hidden;
  z-index: 9999999;

  &__header {
    display: flex;
    align-items: center;
    padding: 15px;
  }

  &__photo {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 10px;
  }

  &__name {
    font-size: 16px;
    font-weight: bold;
  }

  &__section {
    padding: 15px;
  }

  &__title {
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
    display: block;
    border-bottom: 1.5px solid #eee;
  }

  &__button {
    z-index: 2;
    display: flex;
    align-items: center;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    color: #000;
    font-size: 14px;
    transition: background 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    & img {
      margin-right: 10px;
    }
  }
}

.side-bar-toggle {
position: fixed;
left: 0;
background-color: $white;
padding: 10px;
border: 1px solid $grey2;
cursor: pointer;
z-index: 1001;
transition: opacity 0.4s ease;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>