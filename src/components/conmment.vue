<template>
	<div id='comment'>
		<h3 id="title">提交评论</h3>
		<textarea placeholder="请输入您要评论的内容..." v-model='val'  @keydown.enter="postComments"></textarea>
		<mt-button type="primary" size="large" @click='postComments'>发表</mt-button>
		<div id="com" v-for='(item,index) in comData' :key='item.index'>
			<p>第<span>{{index+1}}</span>楼:用户：<span>{{item.user_name}}</span>&nbsp;发表时间：<span>{{item.add_time|myTime("YYYY-MM-DD")}}</span></p>
			<div class='content'>
				{{item.content}}
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click='getMore'>加载更多</mt-button>
	</div>
</template>

<script>
	import api from '../assets/common.js';
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				val:'',
				comData:[],
				pageIndex:1
			}
		},
		props:['id'],
		created(){
			this.getCommentList(this.pageIndex);
		},
		methods:{
			postComments(){
				var that = this;
				if(this.val == ''){return;}
				this.$http.post(api.apidomain+'/api/postcomment/'+this.id,{content:this.val},{emulateJSON:true}).then(function(res){
					if(res.body.status !== 0)return;
					Toast(res.body.message);
					that.pageIndex=1;
					this.getCommentList(that.pageIndex);
					that.val = '';
				})
			},
			getCommentList(pageIndex){
				var that = this;
				this.$http.get(api.apidomain+'/api/getcomments/'+this.id+'?pageindex='+pageIndex).then(function(res){
					if(res.body.message.length<=0){
						Toast('没有更多评论消息');
						return;
					}
					if(pageIndex===1){
						that.comData =[].concat(res.body.message);
					}else{
						that.comData =that.comData.concat(res.body.message);
					}
				})
			},
			getMore(){
				this.pageIndex++;
				this.getCommentList(this.pageIndex);
			}
		}
	}

</script>

<style scoped>
	#comment {
		margin-bottom: 60px;
	}
	#title {
		padding-left: 5px;
	}
	#com {
		min-height: 60px;
	}
	#com p{
		line-height: 30px;
		border-radius: 5px;
		margin: 5px;
		color: #6d6d72;
		background-color: rgba(0,0,0,0.1);
		padding-left: 5px;
	}
	#com .content {
		padding-left: 20px;
	}
</style>