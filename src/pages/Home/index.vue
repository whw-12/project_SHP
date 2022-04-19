<template>
   <div>
       <TypeNav></TypeNav>
       <ListContainer></ListContainer>
       <Recom></Recom>
       <Love></Love>
       <Floor v-for="floor in floorList" :key="floor.id" :list=floor></Floor>
    
   </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recom from '@/pages/Home/Recom'
import Love from '@/pages/Home/Love'
import Floor from '@/pages/Home/Floor'
import {mapState} from 'vuex'

export default {
  name: 'Home-1',
  components: {
      ListContainer,
      Recom,
      Love,
      Floor
  },
  mounted() {
    this.$store.dispatch('getFloorList')
    
  },
  computed: {
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }

}
</script>

<style lang='less' scoped>
  
</style>