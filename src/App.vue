<template>
  <div id="app">
    <!-- <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <button @click="reducer()">Reduce Price</button> -->
    <baseVue/>
  </div>
</template>

<script>
// import productOne from './components/productOne.vue'
// import productTwo from './components/productTwo.vue'
import baseVue from './components/baseVue.vue'
export default {
  name: 'App',
  components: {
    // 'product-list-one': productOne,
    // 'product-list-two': productTwo
    baseVue
  },
  methods: {
    reducer: function () {
      this.$store.dispatch('actionReducer', 3000)
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
