<template>
    <div>
      <Header />
      <HeroSection />
      <Footer />
      <!-- <ContentSection /> -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import HeroSection from '@/components/HeroSection.vue';
  // import ContentSection from '@/components/ContentSection.vue';
  
  export default defineComponent({
    name: 'MainPage',
    components: {
      Header,
      HeroSection,
      Footer,
      // ContentSection,
    },
  });
  </script>
  
  <style lang="scss">

  </style>
  