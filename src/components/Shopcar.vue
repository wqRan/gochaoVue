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
						<th style="width:100px">单价</th>
						<th style="width:100px">数量</th>
						<th style="width:100px">小计(元)</th>
						<th style="width:100px">操作</th>
					</tr>
					<tr>
					<td><span class="buyCarImg"><img src=""></span></td>
					<td class="time">24423432</td>
					<td class="endprice">2432434</td>				
					<td class="endnum">32434324</td>
					<td class="Allprice">3243432元</td>
					<td><span class="delectitem">删除</span></td>
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

import wsCache from 'web-storage-cache'

export default {
	components:{
	  	Headmsg
  	}
}

</script>