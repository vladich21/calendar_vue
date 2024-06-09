<template>
    <div class="country-select">
      <select v-model="selectedCountry" class="styled-select">
        <option v-for="country in countries" :key="country.code" :value="country.code">
          {{ country.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
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
  };
  </script>
  
  <style scoped>
  .country-select {
    display: inline-block;
    position: relative;
  }
  
  .styled-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #2c2f33;
    color: #ffffff;
    padding: 10px 40px 10px 16px;
    font-size: 16px;
    border: 2px solid #3a3f45;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }
  
  .styled-select:focus {
    border-color: #5294e2;
  }
  
  .styled-select::after {
    content: '▼';
    position: absolute;
    right: 10px;
    pointer-events: none;
    font-size: 14px;
    color: #ffffff;
  }
  
  .country-select::before {
    content: '▼';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #9e9e9e;
  }
  </style>
  