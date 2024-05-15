<script>
const pages = ['sign-up', 'sign-in']

export default {

  computed: {
    alignCenter() {
      return pages.includes(this.$route.name)
    }
  }
}
</script>


<template>
    <div :class="{ wrapper: true, '_align-center': alignCenter}">
        <slot></slot>
    </div>
</template>

<style lang="scss">
  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    
    &._align-center {
      justify-content: center;
      align-items: center;
    }
  }
</style>