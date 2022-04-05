<template>
  <div>
    <Header v-show="$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    <!-- <Footer v-show="$route.path =='/home' || $route.path == '/search'"></Footer> -->
  </div>
  
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
     this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>