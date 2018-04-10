<template>
	<div id="container">
		<mt-swipe class="pic" style="width:100%;">
			<mt-swipe-item><img src="../assets/images/banner1.png" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner3.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner4.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner2.png" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner5.png" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner6.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../assets/images/banner7.png" alt=""></mt-swipe-item>
		</mt-swipe>
		<div class="wrap">
			<div class="preBtn"></div>
			<div class="nextBtn"></div>		
		</div>
	</div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'


 export default {
	 components: {
	  'mt-swipe': Swipe,
	  'mt-swipe-item': SwipeItem
	 }
	}
</script>

<style scoped>
	img{
		width:100%;
		height:100%;
	}
</style>