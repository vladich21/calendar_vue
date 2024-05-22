<script lang="ts">
import Settings from '../assets/icons/SettingsOutline.vue'
import PinIcon from '../assets/icons/PinSolid.vue'
import CalendarOutline from '../assets/icons/CalendarOutline.vue'
import CalendarV2Outline from '../assets/icons/CalendarV2Outline.vue'

export default {
  components: {
    PinIcon,
    Settings,
    CalendarOutline,
    CalendarV2Outline,

  }
}
</script>

<template>
  <section class="said-bar">
    <span role="button" class="said-bar__pin-button"><PinIcon /></span>
    <div class="said-bar__section">
      <div class="said-bar__user-info">
        <div class="said-bar__user-info-photo"></div>
        <span>Name</span>
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

    &-photo {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      background-color: $grey2;
      margin: 0 20px 0 24px;
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
      top: -3px;
      left: -3px;
    }

    &:hover {
      background-color: $grey2;
      color: $blue2;
    }
    
    & span {
      margin-left: 30px;
    }
  }
}
</style>
