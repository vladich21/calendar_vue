<template>
    <div>
        <Header />
        <HeroSection />
        <ContentSection />
    </div>
</template>
<script lang="ts">
import Header from '@/components/Header.vue';
// import ContentSection from '@/components/ContentSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import { components } from 'vuetify/dist/vuetify-labs.js';

export default {
    components: {
        Header,
        HeroSection,
        // ContentSection,
    },
};
</script>
<style lang="scss"></style>