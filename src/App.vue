<script>
import Layout from './components/Layout.vue';
import SignUp from './views/SignUp.vue';

  export default {
    components: {
      Layout
    }
  }
</script>

<template>
  <div id="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

