<template>
  <router-view> 
    <index-cmpt></index-cmpt>    
  </router-view>
</template>

<script>

import IndexCmpt from './components/Index.vue'

export default {
  name: 'App',
  components:{
    IndexCmpt
  }
}
</script>


