<template>
	
	<div id="newinfo">
		<h4 class="title">{{infoData.title}}</h4>
		<p class="title-time">{{infoData.add_time | myTime("YYYY-MM-DD")}}&nbsp;{{infoData.click}}次浏览</p>
		<div v-html="infoData.content" style="padding:5px">
		</div>
		<comment :id='id'></comment>
	</div>

</template>

<script>
	import api from '../assets/common.js'
	import comment from './conmment.vue'
	export default {
		data(){
			return {
				infoData:{},
				id:0
			}
		},
		components:{
			comment
		},
		created(){
			var that = this;
			this.id = this.$route.params.id;
			this.$http.get(api.apidomain+'/api/getnew/'+this.$route.params.id).then(function(res){
				that.infoData = res.body.message[0];
			})
		}
	}
</script>

<style scoped>
	#newinfo{
		margin-bottom: 40px;
	}
	.title{
		margin-top: 40px;
		color: #0094ff;
		text-align: center;
		line-height: 30px;
	}
	.title-time {
		color:rgba(0,0,0,0.5);
		padding-left: 5px;
	}
</style>