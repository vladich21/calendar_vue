<script>
export default {

  computed: {
    getFoo() {
      return true
    }
  }
}
</script>


<template>
    <div :class="getFoo ? 'wrapper' : 'wrapper _allign-center'">
        <slot></slot>
    </div>
</template>

<style lang="scss">
  .wrapper {
    display: flex;
    
    &._allign-center {
      justify-content: center;
      align-items: center;
    }
  }
</style>