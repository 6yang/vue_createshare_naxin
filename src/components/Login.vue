<template>
	<div id="login">
	<div class="box">	
		<el-row >
		  <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light">
		  	<h1 class="title">TTMS-特特特</h1>
		  	<div class="fu_title">
		  		<span >后台影院管理系统</span>
		  	</div>
		  	<div class="from_text">
		  		<label>
		  			账号<input type="text" id="account" placeholder="请输入账号" v-model="from.account"/>
		  		</label>
		  	</div>
		  	<div class="from_password">
		  		<label>
		  			密码<input type="password" id="password" placeholder="请输入密码" v-model="from.password"/>
		  		</label>
		  	</div>
		  	<div class="err">
		  		<span>{{acc_pass_text}}</span>
		  	</div>
		  	<div class="login">
		  		<button @click="login">登录</button>
		  	</div>
		  	
		  </div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
	name:'login',
	data() {
      	return {
	        acc_pass_text:'',
	        from:{
				account:'',
		       	password:''
		    }
        }
    },
    methods: {
    	login(){
    		var account = this.from.account;
    		var pwd = this.from.password;
    		if(account==""||pwd==""){
    			this.acc_pass_text = "账号或密码不能为空";
    			var _this = this;
    			var t=setTimeout(function(){
	     			_this.acc_pass_text= "";
	     			document.getElementById("account").focus();
	     		},700);
    		}else{
    			if(account.length>16|pwd.length>16){
    				this.acc_pass_text = "账号或密码长度不符合";
    				var _this = this;
    				var t=setTimeout(function(){
		     			_this.acc_pass_text= "";
		     			_this.from.account = "";
		     			_this.from.password = "";
		     			document.getElementById("account").focus();
	     			},500);
    			}else{
    				this.$http.post(
    					"",
    					{
    						'account':account,
        					'passWord':pwd
    					}).then(function(res){
    						if(res.data.msg =="-1"){
    							this.acc_pass_text = "账号不存在";
    							var _this = this;
		    					var t=setTimeout(function(){
				     				_this.acc_pass_text= "";
				     				_this.from.account = "";
				     				_this.from.password = "";
				     				document.getElementById("account").focus();
			     				},500);
    						}else if(res.data.msg =="0"){
    							this.acc_pass_text = "密码错误";
    							var _this = this;
		    					var t=setTimeout(function(){
				     				_this.acc_pass_text= "";
				     				_this.from.password = "";
				     				document.getElementById("password").focus();
			     				},500);
    						}else if(res.data.msg =="1"){
    							if(res.data.IdCard =="-1"){
    								sessionStorage.setItem("IdCard","-1");
    								this.router.push('/admin');
    							}else if(res.data.IdCard =="0"){
    								sessionStorage.setItem("IdCard","0");
    								this.router.push('/manager');
    							}else if(res.data.IdCard =="1"){
    								sessionStorage.setItem("IdCard","1");
    								this.router.push('/conductor');
    							}else{
	    							alert("err");
    							}
    						}
    					}).bind(this).catch(function(res){
    						console.log("res");
    					})
    			}
    		}
    	}
    }
	}	
</script>
<style scoped type="text/css">

	.box{
		width: 100%;
		height: 100%;
		background: #f7fafc;
		background-size: 100%; position: fixed;
	}
	.title{
		width: 300px;
		line-height: 40px;
		color: #38aae1;
		font-style: italic;
		letter-spacing:2px;
		font-size: 40px;
		margin-left: 22%;
		margin-top: 156px;
		margin-bottom: 32px;
	}
	.fu_title{
		width: 300px;
		margin-left: 22%;
		text-align: center;
		margin-bottom: 58px;
	}
	.fu_title span{
		line-height: 18px;
		font-size: 18px;
		color: #333333;
	}
	.from_text,.from_password{
		width: 300px;
		height: 49px;
		margin-left: 22%;
		background: #ffffff;
		font-size: 14px;
		color: #555555;
	}
	.from_text{
		border: 1px solid #d5d5d5;
		border-radius:  5px 5px 0 0  ;
	}
	.from_password{
		border-bottom:1px solid #d5d5d5 ;
		border-left:1px solid #d5d5d5 ;
		border-right: 1px solid #d5d5d5;
		border-radius: 0 0 5px 5px ;
	}
	.from_text label{
		line-height: 49px;
		margin-left: 16px;
	}
	.from_password label{
		line-height: 49px;
		margin-left: 16px;
	}
	.from_text input{
		margin-left: 10px;
		width: 220px;
		border: none;
		outline: none;	
		text-align: center;
	}
	.from_password input{
		margin-left: 10px;
		width: 220px;
		border: none;	
		outline: none;
		text-align: center;
	}
	::-webkit-input-placeholder{
		color: #999999;
		text-align: center;
	}
	.err{
		width: 300px;
		height: 40px;
		margin-left: 22%;
		text-align: center;
	}
	.err span{
		font-size: 15px;
		line-height: 40px;
		color: #ff797a;
	}
	.login{
		width: 300px;
		height: 40px;
		margin-left: 22%;
	}
	.login button{
		width: 300px;
		height: 40px;
		background: #38AAE1;
		border: none;
		outline: none;
		border-radius: 20px;
		color: #FFFFFF;
		font-size: 20px;
	}
	.login button:hover{
		background: #38AAd1;
	}	
</style>