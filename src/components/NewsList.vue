<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in dataList" :key="item.id">
					<router-link :to="{path:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url" id="newImg">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-html="item.zhaiyao"></p>
							<p id="newslow">发表时间：{{item.add_time | myTime('YYYY-MM-DD HH:mm:SS')}}&nbsp;&nbsp;
							点击数:<span>&nbsp;{{item.click}}</span></p>
						</div>
					</router-link>
				</li>

			</ul>
	</div>
</template>

<script>
	import apiHead from '../assets/common.js'
	export default {
		data(){
			return {
				dataList:[],
				id:0
			}
		},
		created(){
			var that = this;
			this.$http.get(apiHead.apidomain+'/api/getnewslist').then(function(res){
				that.dataList = res.body.message;
			})
		}
	}	
</script>

<style scoped>
	.mui-table-view {
		margin-top: 40px;
	}
	#newImg {
		max-width: 80px;
		width: 80px;
		height: 80px;
	}
	.mui-table-view {
		margin-bottom: 40px;
	}
	#newslow{
		margin-top: 15px;
		color:#0094ff;
	}
</style>