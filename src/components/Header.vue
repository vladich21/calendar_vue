<template>
    <div class="app">
      <header class="header">
        <div class="container">
          <img src="../assets/img/svg/calendar.svg" alt="Calendar" class="logo">
          <nav>
            <ul>
              <li :class="{dropdown: true, open: isDropdownOpen }" @click="toggleDropdown">
                <a href="#">Possibilities
                  <img src="../assets/img/svg/down-arrow.svg" alt="dropdown" class="dropdown_img">
                </a>
                <ul 
                  class="dropdown-content"
                  v-if="isDropdownOpen"
                  v-click-outside="handleOutsideClick">
                  <li><a href="#">To-do list</a></li>
                  <li><a href="#">My day</a></li>
                  <li><a href="#">7 days</a></li>
                  <li><a href="#">Calendar</a></li>
                </ul>
              </li>
              <li><a href="#">Personal</a></li>
              <li><a href="#">For teams</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <router-link to="/" class="home_btn">Login</router-link>
          </nav>
        </div>
      </header>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onBeforeUnmount } from 'vue';
  
  const isDropdownOpen = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const handleOutsideClick = (e: MouseEvent) => {
    if (!(dropdownRef.value as HTMLElement).contains(e.target as Node)) {
      isDropdownOpen.value = false;
    }
  };
  
  const dropdownRef = ref<HTMLElement | null>(null);
  
  const onClick = (e: MouseEvent) => {
    handleOutsideClick(e);
  };
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', onClick);
  });
  </script>
  
<style lang="scss" scoped>
.app {
  width: 100%;

  .header {
    background-color: #fff;
    padding: 30px 30px;
    border-bottom: 1px solid #ddd;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      height: 40px;
      margin-right: 30px;
    }

    nav {
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
      display: flex;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 40px;

        .dropdown_img {
          height: 13px;
          width: 14px;
          display: inline-block;
          cursor: pointer;
        }

        .dropdown {
          position: relative;
          cursor: pointer;

          .dropdown-content {
            margin-top: 10px;
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            padding: 25px 18px;
            width: 120px;
            height: 100px;
            box-shadow: 0px 8px 38px 0px rgba(0, 0, 0, 0.21);
            border-radius: 32px;
            left: 50%;
            transform: translateX(-50%);

            li {
              a {
                white-space: nowrap;
                height: 28px;
                line-height: 28px;
                font-weight: normal;
                text-decoration: none;
                color: black;
                font-size: 16px;
                display: block;
                position: relative;
                &:hover {
                  background-color: #f1f1f1;
                }
              }
            }
          }
          &::before {
            content: "";
            width: 0;
            height: 0;
            border-width: 0 9.5px 10px 9.5px;
            border-color: transparent transparent #f9f9f9 transparent;
            top: -10px;
            position: absolute;
            left: 50%;
            margin-left: -10px;
            
          }

          &.open .dropdown-content {
            display: block;
            
          }
        }
      }
    }

    a {
      text-decoration: none;
      color: #000;
    }

    .home_btn {
      margin-left: auto;
      justify-content: end;
      padding: 10px 25px;
      border-radius: 30px;
      background: none;
      border: 2px solid #0c21c1;
    }
  }
}
</style>
