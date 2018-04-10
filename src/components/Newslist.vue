<template>

<div class="news news3">
	<dl class="detailNews" v-for="(v,i) in data" 
    :key="i._id" 
    @click="routrTo(v._id,v.category)">
    <template v-if="v.comPic">
  		<dt>
  		  <img  :src="`http://localhost:8000/uploads/${v.comPic}`" alt="">
      </dt>
  		<dd>{{v.comName}}</dd>
  		<dd><span class="hsfh">¥</span> <span class="price">{{v.comPrice}}元</span></dd>
    </template>
    <template v-else-if="v.img">
      <dt>
        <img :src="`/static/static/${v.img}`" alt="">
      </dt>
      <dd>{{v.clothName}}</dd>
      <dd><span class="hsfh">¥</span> <span class="price">{{v.price}}元</span></dd>
    </template>
	</dl>
</div>

</template>
<script>

import axios from 'axios'

export default {
	props: {
    	URL: {
	      type: String,
	      required: true
	    }
  	},
	data:() => {
        return{
            data:[]
        }
    },
    mounted() {

        if (this.URL == '/api/newslist/list/0') {
          axios({
              url:this.URL
          })
          .then((result) => {
             let data = result.data.data.result;
             this.data = data;
          })
        }else{
           axios({
              url:this.URL
          })
          .then((result) => {
             let arr = result.data.slice(0,4)
             this.data = arr
          })
        }

    },
    methods:{
      routrTo(id,text){
        this.$router.push('/detail/'+id+'/'+text)
      }
    }


}	


</script>