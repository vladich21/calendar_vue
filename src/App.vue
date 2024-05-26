<template>
  <div id="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  components: {
    Layout
  }
}
</script>
