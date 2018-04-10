<template>
<div class="resgiter">
	<div class="logo clear">
		<img src="../assets/images/title6.png" alt="">
		<span></span>
	</div>
	<form class="regisiterform" action="login.html">
		<div class="cont-righta">
					<a class="blue" href="javascript:;">新用户注册</a>
		</div>
		<div class="regisiter-cont-tab">
			<!-- 手机号码 -->
			<p>
				<span class="regisiter-sp"><label>用 户 名 ：</label></span>
				<input v-model="username" type="text" id="registPhone" maxlength="30" autocomplete="off">
				<span>
					<!-- <b class="email21">请输入手机号</b> -->
					<b class="email22">手机号不能为空</b>
					<b class="email24">该手机号已经被注册，请更换其他账号</b>
					<b class="email23">请输入正确的手机号码</b>
					<b class="onCorrect2"> </b>
				</span>	
			</p>
			<!-- 设置密码 -->
			<p>
				<span class="regisiter-sp"><label>设置密码：</label></span>
				<input type="password" id="regisPass" maxlength="30" 
						autocomplete="off" v-model="password">
				<span>
					<!-- <b class="email31">请输入密码</b> -->
					<b class="email32">密码不能为空</b>
					<b class="email33">密码由6-18位字符组成，区分大小写，不能含空格</b>
					<b class="onCorrect3"> </b>
				</span>	
			</p>
			<!-- 确认密码 -->
			<p>
				<span class="regisiter-sp"><label>确认密码：</label></span>
				<input type="password" id="regisConfirm" maxlength="30" autocomplete="off" v-model="pass">
				<span>
					<!-- <b class="email41">请重复输入密码</b> -->
					<b class="email42">确认密码不能为空</b>
					<b class="email43">两次密码输入不一致，请重复输入 </b>
					<b class="onCorrect4"> </b>
				</span>
			</p>
			<!-- 验证码 -->
			<p>
				<span class="regisiter-sp"><label>验&nbsp;&nbsp;证&nbsp;&nbsp;码：</label></span>
				<input type="text" style="width:150px;" name="checkCode" id="registcheckCode" maxlength="4" v-model="Yanz" >
				<span class="regisiter-yzm">{{yanzheng}}
				</span>
				<span>
					<b class="email51">请输入验证码</b>
					<b class="email52">验证码不能为空</b>
					<b class="email53">验证码输入错误，请重复输入 </b>
					<b class="onCorrect5"> </b>
				</span>
			</p>
			<div>
				<input class="reisiter-submit"  id="registsubmit" value="注册" @click="dosignup">
			</div>
					
		</div>
	</form>
	<div class="rightLogo"><img src="../assets/images/rightLogo.png" height="451" width="391"></div>
</div>
</template>

<script>
import axios from 'axios'
	export default {
		data: ()=>{
			return{
				username:'',
				password:'',
				pass:'',
				Yanz:'',
				yanzheng:'1234'
			}
		},
		mounted(){
			var str = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
			var res = "";
			for(var i = 0 ; i < 4 ; i++){
				res += str.charAt(Math.round(Math.random()*62));
				this.yanzheng = res
			}
		},
		methods:{
			dosignup(){
				if (this.Yanz == this.yanzheng && this.password == this.pass) {
					axios({
						method:'post',
						url:'/api/users/signup',
						data:{
							username:this.username,
							password:this.password,
						}
					})
					.then((result)=>{
						if(result.data.data.success){
							this.$router.push("login")
						}else{
							console.log("注册失败")
						}
					})
				}
			}
		}
	}
</script>