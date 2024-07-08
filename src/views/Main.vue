<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import type { AxiosError } from 'axios';
import { authMe } from '@/api/authMe';
import { useAuthorizationStore } from '@/store/useAuthorizationStore';
import Preloader from '@/assets/icons/Preloader.vue';
import Sidebar from '../components/Sidebar.vue'

const authorizationStore = useAuthorizationStore()
const router = useRouter()

onBeforeMount(async () => {
  try {
    if(authorizationStore.isSuccess) {
      return
    }
    authorizationStore.setIsLoading(true)
    const response = await authMe()

    if(response.status === 200) {
      authorizationStore.setIsSuccess(true)
    }
  } catch(e) {
    const error = e as AxiosError
    
    if(error.response?.status === 401) {
      router.replace('/preview')
    }
  } finally {
    authorizationStore.setIsLoading(false)
  }
})
</script>

<template>

  <Preloader height="30px" width="30px" class="preloader" v-if="authorizationStore.isLoading" />
  <slot v-else>
    <Sidebar />
<section>
  
</section>
  </slot>

</template>

<style lang="scss">
@import '../assets/scss/vars.scss';

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: $blue2;
}
</style>
