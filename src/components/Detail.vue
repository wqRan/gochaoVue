<template>
<div>
	<!--........... 头部 .........-->
	<Headmsg></Headmsg>

<!-- ......... 商品详情 ........... -->
<div class="main bor">
	
	<!-- 图片信息 -->
	 <div class="main-l">

	 	<div class="small">
		<div class="wrap"></div>
		<template v-if="havepic">
			<img v-if="havepic" :src="`http://localhost:8000/uploads/${data.comPic}`" id="pbigimg" class="small_img">				
		</template>
		<template v-else>
			<img :src="`/static/static/${data.img}`" alt="">
		</template>
		<span class="grayBox"></span>
		</div>
		<div class="big">
		<img src="" title="" data-id="" id="pbigimgBig" class="big_img">
		</div>

	</div>
	<!-- 右边详情 -->
		<div class="main-r">
			<!-- 题目 -->
		<div class="clearfloat clear">
			<template v-if="havepic" >
				<h1 class="fl">{{data.comName}}</h1>
			</template>
			<template v-else>
				<h1 class="fl">{{data.clothName}}</h1>
			</template>
			<div class="fl">
			<span class="red">
			[现货售卖中<em class="s-pos" id="JsPos">]</em>
			</span>				
			</div>
		</div>
		<!-- 第一部分 -->
		<ul class="pro-info">
			<li><label>海量新品，给孩子最好的</label></li><br>
			<li class="clearfix"><label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</label>
			<template v-if="havepic">
				<a href="javascript:;" class="fl" target="_blank">{{data.comPrice}}元</a>
			</template>
			<template v-else>
				<a href="javascript:;" class="fl" target="_blank">{{data.price}}元</a>
			</template>
			
			</li>
			<li class="pro-infob clearfloat">
			<label>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持：</label>
			<div class="pro-own">
			<s class="s-inte"></s><a href="javascript:;" >返积分</a>
			<s class="s-ltk"></s><a href="javascript:;">乐通卡</a>
			<s class="s-money"></s><a href="javascript:;">电子钱包</a>
			<s class="s-pxwy"></s><a href="javascript:;">票享无忧退票保险</a>
			</div>
			</li>
		</ul>
		<!-- 第二部分 -->

		<div class="favor">
			<ul>
				<li>【超值优惠】600元店铺优惠券，满10000元可用<br>
				 	【超值优惠】280元店铺优惠券，满5000元可用<br> 
				 	【超值优惠】50元店铺优惠券，满1000元可用<br> 
				</li>
			</ul>
		</div>
		<!-- 第三部分 -->
		<span id="wenhuiLogin" class="clear">
			<div class="price-line"></div>
			<div class="discount-container clear">
			<label class="discount-label">
			优惠券：
			</label>
			<div class="discount-content clear">
				<span class="content-left"></span>
				<a href="javascript:;"><span class="content-center">登录查看优惠信息</span></a>
				<span class="content-right"></span>
			</div>
			</div>
		</span>
		<div class="price-line"></div>
		<!-- 第五部分 -->
		<div class="price clear">
			<label>选择尺码：</label>
			<ul class="date-ul" id="money">
				<li>40cm</li>
				<li>50cm</li>
				<li>60cm</li>
				<li>70cm</li>
				<li>80cm</li>
				<li>90cm</li>
				<li>100cm</li>
				<li>110cm</li>
				<li>120cm</li>
				<li>其他</li>		
			</ul>
		</div>
		<!-- 选择数量 -->
		<div class="choicedate mt30" id="JchoosePrice">
			<label class="mno">您已选择：</label>
			<div class="relt-list" id="JreltList">
			<ul class="relt clear">						
				<li>
					<dl><a href="javascript:void(0);" n="6" class="relt-prev" ></a>
						<input type="text" class="yl-order" maxlength="2" value="1" n="6" >
						<a href="javascript:void(0);" class="relt-next" ></a></dl>
				</li>
				<li class="relt-1"></li>
				<li class="relt-2"></li>
				<li class="ok">请选择时尺码和件数</li>
			</ul>
			</div>
		</div>
		<!-- 购买按钮 -->
		<div class="buyBtn">
			<router-link to="/shopcar"><div class="buy">加入购物车</div></router-link>
		</div>
	</div>
</div>
</div>
</template>

<script>

import axios from 'axios'
import Headmsg from './Head.vue'

export default {
	components:{
		Headmsg
	},
	data:() => {
        return{
            data:[],
            save:'',
            havepic:false,
            URL:''
        }
    },
  	mounted(){
		let count = location.hash.split('/')
		let i = count.length;
		let id = count[i-2];
		let text = count[i-1];

		if (text == 'undefined') {
			this.URL = '/api/newslist/item/'+id
		}else if(text == '%E5%86%AC%E5%AD%A3%E7%83%AD%E9%94%80') {
			this.URL = '../../static/winter.json'
		}else if (text == '%E6%98%A5%E7%A7%8B%E6%BD%AE%E6%AC%BE') {
			this.URL = "../../static/spring.json"
		}else if (text == '%E5%A4%8F%E5%AD%A3%E6%96%B0%E8%A1%A3') {
			this.URL = "../../static/summer.json"
		}else if (text == '%E7%94%B7%E7%AB%A5') {
			this.URL = "../../static/boys.json"
		}else if (text == '%E5%A5%B3%E7%AB%A5') {
			this.URL = "../../static/girls.json"
		}

		axios({
	            url:this.URL
	        })
	        .then((result) => {
	        	if (result.data.data) {
		           let data = result.data.data
		           if (data.comPic) {
		           	this.havepic = true
		           }
		           this.data = data
	        	}else {

	        		this.data = result.data[id]
	        	}

	        })

	}


}
	

</script>