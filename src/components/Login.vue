<template>
<div class="login">
	<div class="logo clear">
		<img src="../assets/images/title6.png" alt="">
		<span></span>
	</div>


	<form id="fm1" class="cookieForm" action="index.html">
		<div class="cont-righta">
			<router-link to="/resgiter" class="blue">新用户?去注册</router-link>
		</div>
		<div class="cont-rightb">
			<!-- 用户名 -->
			<div class="rightb-email">
				<input id="username" name="username" class="required login-cont-inp1" tabindex="1" accesskey="u" type="text" value="" size="25" autocomplete="false" placeholder="请输入手机号" v-model="username">
			</div>
			<!-- 密码 -->
			<div class="mt15">
				<input id="password" name="password" type="password" value="" class="login-cont-inp1" tabindex="2" placeholder="请输入密码" v-model="password">
			</div>
			<!-- 忘记密码 -->
			<div id="errorLogin" class="login-error-cont clear">
				<span id="msg" class="tips">请输入账号与密码</span>
				<a class="blue fr" href="javascript:;">忘记密码？</a>
			</div>
			<!-- 登录按钮 -->
			<div class="pt10"><input @click="dologin" class="login-submit" id="loginsubmit" value="登陆">
			</div>
								
		</div>

		<div class="cont-rightc"></div>
	</form>


</div>
</template>
<script>
import Vue from 'vue'
import wsCache from 'web-storage-cache'
import axios from 'axios'
	export default {
		
		data: ()=>{
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			dologin(){
				axios({
					method:'post',
					url:'/api/users/signin',
					data:{
						username:this.username,
						password:this.password,
					}
				})
				.then((result)=>{
					const d = result.data
					if(d.data.success){
						this.$wsCache.set("username", d.data.username, { exp: 60 * 60 });
        				this.$wsCache.set('token', d.data.token, {exp : 3600 * 24})
						this.$router.push({path:'/'})
						// console.log('登录成功',this.username)
					}else{
						// console.log("登录失败")
					}
				})
			}
		}
	}
</script>