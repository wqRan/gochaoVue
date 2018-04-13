<template>
<div>
		<!--  head  -->
		<headmsg></headmsg>
	<div class="orderSure clear">
		<div class="buyCar">
			<img src="../../static/images/buyProcess-1.jpg">
		</div>
		<p class="orderSure-title clear">
			<span>确认购买信息</span>
			<div class="commoditylisy">
				<table class="buyCar-table">
					<tbody id="itemList">
					<tr class="first">
						<th style="width:150px">商品图片</th>
						<th style="width:300px">商品名称</th>
						<th style="width:80px">尺寸</th>
						<th style="width:80px">单价</th>
						<th style="width:80px">数量</th>
						<th style="width:100px">小计(元)</th>
						<th style="width:100px">操作</th>
					</tr>
					<tr v-for="(p,i) in this.data" :key="i._id">
					<td><span class="buyCarImg" >
						<template v-if="p.img.slice(0,2) == 'co'">
							<img :src="`http://localhost:8000/uploads/${p.img}`">
						</template>
						<template v-if="p.img.slice(0,2) == '..'">
							<img :src="`/static/static/${p.img}`">
						</template>
					</span>
					</td>
					<td class="time" >{{p.comname}}</td>
					<td class="endnum">{{p.size}}</td>				
					<td class="endnum">{{p.money}}</td>				
					<td class="endnum">{{p.number}}</td>
					<td class="Allprice">{{p.allmoney}}</td>
					<td><span class="delectitem" @click="remove(p._id)">删除</span></td>
					</tr>

					</tbody>
				</table>
			</div>
		</p>
		
		<div class="submit">提交订单</div>
		
	
	</div>
</div>
</template>

<script>
	
import Vue from 'vue'
import Headmsg from './Head.vue'
import axios from 'axios'
import wsCache from 'web-storage-cache'

export default {
	components:{
	  	Headmsg
  	},
	data:() => {
        return{
        	data:[],
        	havePic:false,
        	haveImg:false

        }
    },
  	mounted(){
  		axios({
	            url:'/api/buycar/find'
	        })
	        .then((result) => {

	        	this.data = result.data.data        		    
	        })


  	},
  	methods:{
  		remove(id){

  			axios({
	            url:'/api/buycar/remove/'+id
	        })
	        .then((result) => {

	        	location.reload()

	        })
  		}
  	}
}

</script>