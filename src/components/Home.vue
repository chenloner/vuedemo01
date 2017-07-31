<template>
	<div id="home">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in imgList" :key='item.img'>
		  	<img :src="item.img">
		  </mt-swipe-item>
		</mt-swipe>

		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">练习我们</div></a></li>
		      
		        </ul> 
		</div>


	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgList:[]
			}
		},
		created(){
			var that = this;
			this.$http.get('http://182.254.146.100:8899/api/getlunbo').then(function(res){
				if(res.status = 0){
					return;
				}
				that.imgList = res.body.message;
			})
		}
	}
	
</script>

<style>
	#home {
		background-color: #fff;
	}
	.mint-swipe {
		margin-top: 40px;
		height: 302px;
	}
	.mint-swipe .mint-swipe-items-wrap{
		height: 302px;
	}
	.mint-swipe-item img {
		width: 100%;
		height: 100%;
	}
	.mui-media .mui-icon::before{
		content: "";
	}
	.mui-content ul{
		background-color: #fff;
	}
	.mui-media .mui-icon-home,
	.mui-media .mui-icon-email,
	.mui-media .mui-icon-chatbubble,
	.mui-media .mui-icon-location,
	.mui-media .mui-icon-search,
	.mui-media .mui-icon-phone{
		content: "";
		position: absolute;
		width: 40px;
		height: 40px;
		-webkit-background-size: 40px 40px;
		background-size: 40px 40px;
	}
	.mui-media .mui-icon-home{
		background-image: url('../../static/imgs/1.png');
	}
	.mui-grid-view.mui-grid-9 {
		border: none;
		background-color: #fff;
	}
	.mui-media .mui-icon-email{
		background-image: url('../../static/imgs/2.png');
	}
	.mui-media .mui-icon-chatbubble{
		background-image: url('../../static/imgs/3.png');
	}
	.mui-media .mui-icon-location{
		background-image: url('../../static/imgs/4.png');
	}
	.mui-media .mui-icon-search{
		background-image: url('../../static/imgs/5.png');
	}
	.mui-media .mui-icon-phone{
		background-image: url('../../static/imgs/6.png');
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}
</style>