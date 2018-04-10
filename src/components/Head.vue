<template>
	<div class="head">
		<!-- top部分 -->
		<div class="header-top clear">
			<form id="searchform" method="post" action="">
					<img src="../assets/images/search.png" height="21" width="24" class="submitBtn">
		           <input type="text" class="keyword" value="">
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
		                   <a href="" title="查看购物袋并结算">
		                   	<img src="../assets/images/buybus.png">
		                   	<i id="num"><b>查看购物袋并结算</b></i>
		                   </a>
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
</template>

<script>
	
import Vue from 'vue'
import wsCache from 'web-storage-cache'

export default {
  	data: ()=>{
		return{
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
		}
	}
}

</script>