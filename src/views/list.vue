<template>
	<div @touchstart.stop="removeLongPress">
		
		<template v-if="data.length>0">
			<div id="list"></div>
			<my-scroll class="wrapper" 
			
			:click="clickTrue"
			@scroll="loadData"
			:scrollTotop="goTopnew"
			@scrollTotop="gotoTop"
			:listenScroll = "clickTrue"
			:refreshDelay="refreshDelay"
            :listen-scroll="listenScroll" :probe-type="probeType"
			>
				
			    <ul class="content">
			      <li v-for="item in data"  @touchstart="longPressStart(item.birth,$event)"  @touchmove="longPressMove(item.birth,$event)"  @touchend="longPressEnd(item.birth,$event)" :id="item.birth"  :class="{'active':item.isActive}">

			      	{{item.name}}--{{item.birth}}
			      	{{item.sex}}--{{item.time}}

			      </li>
			    </ul>
   				<div class="loading-wrapper"></div> 
  			</my-scroll>
  			<div  :style="{'display':longPressActive?'block':'none'}" class="tips-mask">
				<div class="my-tips" :style="{'display':longPressActive?'block':'none'}" ref="myTips">
					<li  @touchend.stop="removeUser" ref="removeUser" :class="{'active':tipsListStatus.removeUser}">移除住户</li>
					<li  @touchend.stop="setTopTop"  ref="setTop"  :class="{'active':tipsListStatus.setTop}">置顶</li>
					<li  @touchend.stop="cancelToTop" ref="cancelTop" :class="{'active':tipsListStatus.cancelTop}">取消置顶</li>
				</div>  				

  			</div>

  			<a href="#list" class="fixed">go</a>
		</template>
		
		
	</div>
	
</template>
<script>
 //import BSscroll from 'better-scroll'
 import myScroll from '../components/scroll'
 //import {datas} from '../mock/datas'
 //console.log(myScroll)
 const RESERVED_HEIGHT = 40
 export default {
 	data() {
      return {
      	data:[],
      	clickTrue:true,
      	pulldownnew:true,
      	refreshDelay: 50,
      	goTopnew:true,
      	touchStartTime:0,
      	touchEndTime:0,
      	touchStartX:0,
      	touchStartY:0,
      	touchEndX:0,
      	touchEndY:0,
      	touchDalyTime:800,
      	position20:20,
      	longPressActive:false,
      	userId:null,
      	tipsListStatus:{
      		removeUser:false,
      		setTop:false,
      		cancelTop:false
      	}

      }
    },
 	created(){
 		this.probeType = 2
      	this.listenScroll = true
 		this.loadData()
 	},
 	methods:{
 		loadData(pos){
 			console.log(pos);
 			let that = this;
 			let data =  function(){
 				
				let item=[]
				for(let k=0;k<100;k++){
					item.push({
						name:'myName'+k,
						birth:'birth'+k+k,
						isActive:false,
						time:that.getNewTimer(),
						sex:0
					})
				}
				return item;
			}
 			//requestData().then((res)=>{
 				let res = {
 					data:data()
 				}
 				//this.data = [];
 				this.data = res.data.concat(this.data)
 			//})
 		},
 		touchEnd(obj){
 			console.log(obj);
 		},
 		gotoTop(){
 				console.log(111);
 				//this.$refs.wrapper.scrollTo(0,0,0);
 				this.$on("scrollTo");
 		},
 		longPressStart(id,ev){
 			console.log(222)
 			console.log(event);
 			if(ev.target === ev.currentTarget){
 				this.touchStartTime = this.getNewTimer();
	 			//debugger
	 			this.touchStartX = ev.touches[0].clientX;
	 			this.touchStartY = ev.touches[0].pageY	;	
 			}
 			
			
 		},
 		longPressMove(id,ev){
 			console.log(333);
 			console.log(event);
 			if(this.longPressActive){
 				return false;
 			}
 			if(ev.target === ev.currentTarget){
 				this.touchMoveTime = this.getNewTimer();
 				this.touchStartX = ev.touches[0].clientX;
	 			this.touchStartY = ev.touches[0].pageY;
 			}

 		},
 		longPressEnd(id,ev){
 			console.log(444);
 			console.log(event);
 			if(this.longPressActive){
 				this.longPressActive = false;
 				this.data.forEach((item,index)=>{
	 				item.isActive = false;
	 			});
 				return false;
 			}
 			if(ev.target === ev.currentTarget){	
	 			this.touchEndTime = this.getNewTimer();
				if(this.touchEndTime-this.touchStartTime>this.touchDalyTime){			
					this.touchEndX = ev.changedTouches[0].clientX;
	 				this.touchEndY = ev.changedTouches[0].pageY;

	 				if(this.touchEndX === this.touchStartX && this.touchEndY === this.touchStartY ){
	 					this.data.forEach((item,index)=>{
	 						item.active = false;
	 						if(item.birth===id){
	 							item.isActive = true;
	 							this.longPressActive = true;
	 							this.userId = id;
	 							
	 							for(let i in  this.tipsListStatus){
	 								this.tipsListStatus[i]=false;
	 							}
	 							this.setTipsPositions(this.touchEndX,this.touchEndY)
	 						}
	 					})
	 					//this.func(id);
	 				}
				}
 			}

 		},
 		func(id){
 			console.log(11+id);
 		},
 		getNewTimer(){
 			//获取当前系统时间
 			return new Date().getTime()
 		},
 		setTipsPositions(x,y){
 			//设置提示窗的位置
 			let style = ``;
 			let tipsWidth = 100;
 			let tipsHeight = 108;
 			let setLeftPo = tipsWidth+x;
 			let setTopPo = tipsHeight+y;
 			let screenInfo  = this.getScreenInfo();
 			if(screenInfo.screenWidth<setLeftPo){
 				this.$refs.myTips.style.left = x - tipsWidth - 20+'px';
 			}else if(x<20){
 				this.$refs.myTips.style.left = 20+"px";	
 			}else{
 				this.$refs.myTips.style.left = x+"px";
 			}

 			if(screenInfo.screenHeight<setTopPo){
 				console.log(123)
 				this.$refs.myTips.style.top = y - tipsHeight+'px'
 			}else if(y<20){
 				console.log(444)
 				this.$refs.myTips.style.top = 20+"px";	
 			}else{
 				console.log(111)
 				this.$refs.myTips.style.top = y+"px";
 			}
 		},
 		getScreenInfo(){
 			//获取屏幕信息
 			return {
	 			screenWidth:window.screen.availWidth,
				screenHeight:window.screen.availHeight	
 			}
 		},
 		removeLongPress(event){
 			event.stopPropagation();
 			setTimeout(()=>{
 				if(this.longPressActive){
 				this.longPressActive = false;
 				this.data.forEach((item,index)=>{
	 				item.isActive = false;
	 			});
 					return false;
 				}
 			},500)
 			
 		},
 		removeUser(event){
 			//this.removeId
 			event.stopPropagation();
 			console.log(this.userId);
 			this.tipsListStatus = {
	      		removeUser:true,
	      		setTop:false,
	      		cancelTop:false
      		}
      		this.data.forEach((item,index)=>{
      			if(this.userId === item.birth){
      				this.data.splice(index,1);
      			}
      			
      		});
 		},

 		setTopTop(){
 			//设置置顶
 			console.log(this.userId)
 			this.tipsListStatus = {
	      		removeUser:false,
	      		setTop:true,
	      		cancelTop:false
      		}

      		let myItem = {}
      		this.data.forEach((item,index)=>{
      			if(this.userId === item.birth){
      				myItem = item;
      				this.data.splice(index,1);
      			}
      			
      		});
      		this.data.unshift(myItem);

 		},
 		cancelToTop(){
 			//取消设置置顶
 			console.log(this.userId);
 			this.tipsListStatus = {
	      		removeUser:false,
	      		setTop:false,
	      		cancelTop:true
      		};
 		}
 	},
 	watch: {
      scrollY(newVal) {
        //console.log(newVal)
        
      }
    },
 	components:{
 		'my-scroll':myScroll
 	}
 }
</script>
<style>
	.fixed{
		    position: fixed;
		    bottom: 20px;
		    background: #000;
		    color: #fff;
		    border-radius: 50%;
		    font-size: 12px;
		    padding: 10px;
	}
	.content li{
		height:2.25rem;
		line-height:2.25rem;
	}
	.active{
		background:#eee;
	}
	.my-tips{
		position:absolute;
		display:none;
		background:#fff;
		z-index:1000;
		left:20px;
		right:20px;
		bottom:0;
		top:20px;
		box-shadow: 0 0 5px #eee;
		border-radius: 4px;
		width:100px;
		height:108px;
	}
	.my-tips li{
		height:35px;
		line-height:35px;
		text-align:left;
		text-decoration: none;
		list-style: none;
    	font-size: 12px;
    	padding-left:20px;
    	padding-right:20px;
    	position:relative;
	}



	/*设置一像素边线*/
	.my-tips li:after{
		  position: absolute;
		  content: " ";
		  top: 0;
		  left: 0;
		  -webkit-transform-origin: top left;
		  transform-origin: top left;
		  width: 100%;
		  height: 100%;
		  -webkit-transform: scale(1);
		  transform: scale(1); 
		  border-bottom: 1px solid #eee; 
	}
	.my-tips li:last-child:after{
		display:none;
	}
	@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
	   .my-tips li:after{
	      width: 200%;
	      height: 200%;
	      -webkit-transform: scale(0.5);
	      transform: scale(0.5); 
	  }
	}
	@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
	    .my-tips li:after{
	      width: 300%;
	      height: 300%;
	      -webkit-transform: scale(0.33333);
	      transform: scale(0.33333); 
	  } 
	}
	/*遮罩mask*/
	.tips-mask{
		position:absolute;
		z-index:999;
		width:100%;
		height:100%;
		bottom:0;
		top:0;
		left:0;
		right:0;
	}




</style>