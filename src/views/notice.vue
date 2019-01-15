<template>
    <div>
        <h2>浏览器消息队列</h2>
        <button id="button" @click="gid">有人想加你为好友</button>
        <p id="text" ref="texts"></p>
    </div>
</template>
<script>
export default {
    methods:{
        gid(){
            console.log(window.Notification);
            if (window.Notification) {
                if (Notification.permission == "granted") {
                    this.popNotice();
                } else if (Notification.permission != "denied") {
                    // Notification.requestPermission((permission)=>{
                    // this.popNotice();
                    // });
                    Notification.requestPermission().then(function(permission) { 
                         this.popNotice();

                     });
                }   
            }else{
                alert("浏览器不支持");
            }
        },
        popNotice() {
            console.log(123456)
            var notification = new Notification("Hi，帅哥：", {
                body: '可以加你为好友吗？',
                icon: '../../static/img/robot.png',
                dir:"ltr",//默认值是auto, 可以是ltr或rtl
                lang:"en",
                tag:"div",
                data:{
                    node:1111,
                    id:186,
                    url:123456,
                    names:[123,456,778],
                },
                 vibrate:[200, 100, 200],
                 silent:true,
                 sound:"hh",
                 noscreen:false,
                 sticky:true
                });
            console.log(notification);
            let that = this;
            notification.onclick = function() {
                that.$refs.texts.innerHTML = '张小姐已于' + new Date().toTimeString().split(' ')[0] + '加你为好友！';
                notification.close();    
            };
                 
        },
    }
}
</script>

