<template>
<div>
	<!--........... 头部 .........-->

	<headmsg></headmsg>
	<!--......... 轮播图 .........-->
	<banner></banner>

<!-- 	....... 分类 .......... -->
	<!-- 婴幼儿 -->
	<div class="littleBody" data="3">
		<div class="title">
			<img src="../assets/images/baby.png" alt="">
		</div>

		<news-list URL="/api/newslist/list/0"></news-list>

	</div>
	<!-- 男孩 -->
	<div class="littleBoy" data="4">
		<div class="title">
			<img src="../assets/images/boys.png" alt="">
		</div>
		<news-list URL="../../static/boys.json"></news-list>
	</div>
	<!-- 女孩 -->
	<div class="littleGril" data="5">
		<div class="title">
			<img src="../assets/images/girl.png" alt="">
		</div>
		<news-list URL="../../static/girls.json"></news-list>
	</div>
	<!-- 冬季热销 -->
	<div class="littleWinter" data="0">
		<div class="title">
			<img src="../assets/images/winter.png" alt="">
		</div>
		<news-list URL="../../static/winter.json"></news-list>
	</div>
	<!-- 春秋热销 -->
	<div class="littleSpring" data="1">
		<div class="title">
			<img src="../assets/images/spring and autumn.png" alt="">
		</div>
		<news-list URL="../../static/spring.json"></news-list>
	</div>
	<!-- 夏季热销 -->
	<div class="littleSummer" data="2">
		<div class="title">
			<img src="../assets/images/summer.png" alt="">
		</div>
		<news-list URL="../../static/summer.json"></news-list>
	</div>
	<!-- ....... 底部........ -->
	<div class="foot">
		<h1>关注go潮</h1>
		<div class="link clear">
			<img src="../assets/images/foot.png" alt="">
			<span></span>
		</div>
		<ul>
			<li>关于我们</li>
			<li>会员礼遇</li>
			<li>在线购物</li>
			<li>帮助我们</li>
		</ul>

	</div>
</div>
</template>


<script>
	
import Vue from 'vue'
import Banner from './Banner.vue'
import NewsList from './Newslist.vue'
import Headmsg from './Head.vue'

import wsCache from 'web-storage-cache'

export default {
	components:{
	  	Banner,
	  	NewsList,
	  	Headmsg
  	}
}

</script>