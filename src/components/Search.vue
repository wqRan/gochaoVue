<template>
<div class="littleBody clear">
	<!--........... 头部 .........-->

	<div class="head">
		<!-- top部分 -->
		<div class="header-top clear">
			<form id="searchform" method="post" action="">
					<img src="../assets/images/search.png" height="21" width="24" class="submitBtn" @click="search">
		           <input type="text" class="keyword" name="searchData" value="" v-model="searchData">
		    </form>
		    <template v-if='msg==false'>
		    	<div class="tip">{{tip}}</div>
		    </template>
		    <template v-else>
		    	<button class="goout" @click="goout">退出登录</button>
		    	<div class="tip" >{{tip}}</div>
		    </template>
		    <div class="top-right">
		        <ul>
		        	<li class="shopNews">
		                   <router-link  to="/shopcar" title="查看购物袋并结算">
		                   	<img src="../assets/images/buybus.png">
		                   	<i id="num"><b>查看购物袋并结算</b></i>
		                   </router-link>
		            </li>
		            <li id="mb">
		            	<router-link to="/login"><img src="../assets/images/log.png"></router-link>
		            </li>
		        </ul>
		    </div>
		</div>
		<!-- logo部分 -->
		<div class="logo clear">
			<router-link to="/"><img src="../assets/images/title6.png" alt=""></router-link>
			<span></span>
		</div>
		<!-- 列表部分 -->
		<ul class="list">
			<router-link tag="li" to="/commondity/3">婴幼儿</router-link></li>
			<router-link tag="li" to="/commondity/4">男孩</router-link></li>
			<router-link tag="li" to="/commondity/5">女孩</router-link></li>
			<router-link tag="li" to="/commondity/0">冬季热销</router-link></li>
			<router-link tag="li" to="/commondity/1">春秋潮款</router-link></li>
			<router-link tag="li" to="/commondity/2">夏季新衣</router-link></li>
		</ul>
	</div>

	<!-- ...... 搜索列表 ....... -->
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
</template>

<script>
	
import Vue from 'vue'
import wsCache from 'web-storage-cache'
import axios from 'axios'

export default {
	
  	data:() => {
        return{
            data:[],
            searchData:'',
            tip:'亲，您还未登录！',
			msg:false
        }
    },
  	mounted(){
  		const data = JSON.parse(localStorage.getItem('username'))
		if (data) {
			this.msg = true
			this.tip = '欢迎您：' + data.v.replace(/\"([^\"]*)\"/,'$1')
		}

		var count = location.hash.split('/')
		var i = count.length;
		var text = count[i-1];

		axios({
	            url:'/api/newslist/search/'+text,
	            method:'POST'
	        })
	        .then((result) => {
	        	this.data = result.data.data
	        })
	},
	methods:{
		goout(){
		  var r=confirm("你确定要退出吗")
		  if (r==true)
		    {
			    Vue.prototype.$wsCache = new wsCache();  
				this.$wsCache.delete('username')
				this.$wsCache.delete('token')
				this.msg = false
				this.tip = '亲，您还未登录！'
		    }
		},
		search(){
			this.$router.push({
							path:'/search/'+this.searchData
						})
			axios({
	            url:'/api/newslist/search/'+this.searchData,
	            method:'POST'
	        })
	        .then((result) => {
	        	this.data = result.data.data
	        	this.searchData=""
	        })
	  	
		}
	}
}

</script>