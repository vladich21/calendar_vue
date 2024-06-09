<template>
    <div v-if="isDropdownOpen" class="background" data-id="bg" @click="toggleDropdown"></div>
    <div class="app">
      <header class="header">
        <div class="container">
          <img src="../assets/img/svg/calendar.svg" alt="Calendar" class="logo" />
          <nav>
            <ul :class="{ open: isBurgerOpen }">
              <li :class="{ dropdown: true, open: isDropdownOpen }" @click="toggleDropdown" ref="dropdownRef">
                <a href="#">
                  Possibilities
                  <img src="../assets/img/svg/down-arrow.svg" alt="dropdown" class="dropdown_img" />
                </a>
                <ul class="dropdown-content" v-if="isDropdownOpen">
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
            <div class="burger" @click="toggleBurger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </div>
  </template>
  
  <script setup lang="ts">

  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const isDropdownOpen = ref(false)
  const isBurgerOpen = ref(false)
  
  const dropdownRef = ref<HTMLElement | null>(null)
  
  const toggleDropdown = (e: MouseEvent) => {
    if (e.target && (e.target as HTMLElement).getAttribute('data-id') === 'bg') {
      isDropdownOpen.value = false
      return
    }
    isDropdownOpen.value = !isDropdownOpen.value
  }
  
  const toggleBurger = () => {
    isBurgerOpen.value = !isBurgerOpen.value
  }
  
  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
      isDropdownOpen.value = false
    }
  }
  
  const onClick = (e: MouseEvent) => {
    handleOutsideClick(e)
  }
  
  onMounted(() => {
    document.addEventListener('click', onClick)
  })
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', onClick)
  })
  </script>
  
  <style lang="scss" scoped>
  .app {
    width: 100%;
    position: fixed;
      z-index: 1000;
  
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
        justify-content: flex-end;
        align-items: center;
        display: flex;
        position: relative;
  
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
              z-index: 1;
              
              &::before {
              content: '';
              width: 0;
              height: 0;
              border-width: 0 9.5px 10px 9.5px;
              border-style: solid;
              border-color: transparent transparent #f9f9f9 transparent;
              top: -10px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
             
            }
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
  
            &.open .dropdown-content {
              display: block;
            }
            &.open::before {
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
  
    .background {
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: 0;
    }
  
    @media (max-width: 1000px) {
  .header nav ul {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 50px;
    background-color: #fff;
    align-items: center;
  }

  .header nav ul.open {
    display: flex;
  }

  .header nav ul .dropdown .dropdown-content {
           margin-top: 30px; 
  }

  .burger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 9990;
    
    span {
      width: 100%;
      height: 3px;
      background-color: #000;
    }
  }

  .home_btn {
    display: none;
  }
}
}
  </style>