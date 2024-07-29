<script lang="ts">
import { ref } from 'vue';
import Settings from '../assets/icons/SettingsOutline.vue';
import PinIcon from '../assets/icons/PinSolid.vue';
import CalendarOutline from '../assets/icons/CalendarOutline.vue';
import CalendarV2Outline from '../assets/icons/CalendarV2Outline.vue';

export default {
  components: {
    PinIcon,
    Settings,
    CalendarOutline,
    CalendarV2Outline,
  },
  setup() {
    const isUserMenuOpen = ref(false);

    const toggleUserMenu = () => {
      isUserMenuOpen.value = !isUserMenuOpen.value;
    };

    return {
      isUserMenuOpen,
      toggleUserMenu,
    };
  },
};
</script>

<template>
  <section class="said-bar">
    <span role="button" class="said-bar__pin-button"><PinIcon /></span>
    <div class="said-bar__section">
      <div class="said-bar__user-info" @click="toggleUserMenu">
        <div class="said-bar__user-info-photo"></div>
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
        <span>
          <Settings />
          My day
        </span>
      </button>
      <button>
        <span>
          <CalendarOutline />
          Next 7 days
        </span>
      </button>
      <button>
        <span>
          <CalendarV2Outline />
          My Calendar
        </span>
      </button>
    </div>
    <div class="said-bar__actions">
      <button><span>+ new list</span></button>
      <button><span>+ add group</span></button>
    </div>
  </section>
</template>


<style lang="scss">
@import '../assets/scss/vars.scss';

.said-bar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  background-color: $white;
  position: relative;

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
    cursor: pointer;
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
    top: 5px;
    right: 0;
  }

  & button {
    cursor: pointer;
    height: 40px;

    & svg {
      position: relative;
      top: 3px;
      left: -3px;
    }

    &:hover {
      background-color: $grey2;
    transition: background 0.3s;

    }

    & span {
      margin-left: 30px;
      cursor: pointer;
    }
  }
}

.user-menu {
  position: absolute;
  top: 75px;
  left: 20px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;

  &__header {
    display: flex;
    align-items: center;
    padding: 15px;
    // border-bottom: 1px solid #eee;
    // &::after {
    //   content: '';
    //   position: absolute;
    //   bottom: -1.5px; // смещение для правильного размещения тени
    //   left: 0;
    //   right: 0;
    //   height: 1.5px;
    //   background-color: #eee; // цвет линии
    //   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // тень для линии
    // }
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
    // &::after {
    //   content: '';
    //   position: absolute;
    //   bottom: -10px;  // смещение вниз для перекрытия родительского padding
    //   left: -125px;   // смещение влево для перекрытия родительского padding
    //   right: -105px;  // смещение вправо для перекрытия родительского padding
    //   // border-bottom: 1.5px solid #eee;
    // }
  }

  &__button {
    z-index: 2;
    display: flex;
    align-items: center;
    // padding: 10px;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    // cursor: pointer;
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
</style>

