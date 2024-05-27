<script lang="ts" setup>
import { useAppStore } from '@/store/useAppStore'
import Sidebar from '../components/Sidebar.vue'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const appStore = useAppStore()
const router = useRouter()

onBeforeMount(() => {
  console.log(appStore.isFirstVisit)
  if (appStore.isFirstVisit) {
    router.replace('/preview')
    appStore.setIsFirstVisit(false)
  }
})
</script>

<template>
  <Sidebar />
</template>

<style lang="scss"></style>
