<template>
<div>
	<div class="littleBody clear">
	<div class="title pictitle">
		<router-link to="/"><img :src="titleImg" alt=""></router-link>
	</div>
	<div class="news11" id="list">
		<dl class="detailNews" v-for="(v,i) in data" 
			:key="i._id" 
			@click="routrTo(v._id,v.category)">
	    <template v-if="v.comPic">
	  		<dt>
	  		  <img :src="`http://localhost:8000/uploads/${v.comPic}`" alt="">
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
</div>	

</div>
</template>
<script>

import axios from 'axios'
import img1 from "../assets/images/baby.png"
import img2 from "../assets/images/boys.png"
import img3 from "../assets/images/girl.png"
import img4 from "../assets/images/winter.png"
import img5 from "../assets/images/spring and autumn.png"
import img6 from "../assets/images/summer.png"


export default {

	data:() => {
        return{
            data:[],
            save:'',
            havepic:false,
            titleImg:img1
        }
    },
  	mounted(){
		let count = location.hash.split('/')
		let i = count.length;
		let id = count[i-1];

		if (id == 3) {
			URL = '/api/newslist/find'
		}else if(id == 0) {
			URL = "../../static/winter.json"
			this.titleImg = img4
		}else if (id == 1) {
			URL = "../../static/spring.json"
			this.titleImg = img5
		}else if (id == 2) {
			URL = "../../static/summer.json"
			this.titleImg = img6
		}else if (id == 4) {
			URL = "../../static/boys.json"
			this.titleImg = img2
		}else if (id == 5) {
			URL = "../../static/girls.json"
			this.titleImg = img3
		}

	axios({
            url:URL
        })
        .then((result) => {
        	if (result.data.data) {
	           let data = result.data.data
	           if (data.comPic) {
	           	this.havepic = true
	           }
	           this.data = data
        	}else {
        		let data = result.data
	           if (data.img) {
	           	this.havepic = true
	           }
	           this.data = data
        	}
        })

	},
	methods:{
      routrTo(id,text){
        this.$router.push('/detail/'+id+'/'+text)
      }
    }
}

</script>