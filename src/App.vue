<template>
    <div>
   	
      <mt-header fixed title="我就是宋小宝" @click='g'></mt-header>
	
		<router-view></router-view>	
    	
	  <nav class="mui-bar mui-bar-tab">
				<router-link class="mui-tab-item" to="/home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</router-link>
				<router-link class="mui-tab-item" to="/tabbar-with-chat">
					<span class="mui-icon mui-icon-email"></span>
					<span class="mui-tab-label">会员</span>
				</router-link>
				<router-link class="mui-tab-item" to="/tabbar-with-contact">
					<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
					<span class="mui-tab-label">购物车</span>
				</router-link>
				<router-link class="mui-tab-item" to="/tabbar-with-map">
					<span class="mui-icon mui-icon-gear"></span>
					<span class="mui-tab-label">搜索</span>
				</router-link>
			</nav>
		</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
  	methods:{
  	g(){
  		console.log(1);
  		// this.$router.back(-1);
  	}
  }
}
</script>

<style scoped>

	.mui-icon-home,
	.mui-icon-email,
	.mui-icon-contact,
	.mui-icon-gear{

	}
</style>
