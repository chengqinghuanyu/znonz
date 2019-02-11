<template>
    <div>
       <button @click="login">登陆</button>
       <button @click="reqestDatas">reqestDatas</button>
    </div>
   
</template>
<script>
import Cookies from 'js-cookie'
import $ from "jquery"
export default {
    methods:{
        login(){
            // Cookies.set('usernameOrEmailAddress', 'aijin', { expires: 7 });

            $.ajax({
                url:"",
                method:"POST",
                data:{
                "usernameOrEmailAddress":"aijin",
                "password":"123qwe",
                "tenantId":1
            },
            success:function(res){
                console.log(document.cookie)
                console.log(123)
            },
            error:function(res){
                console.log(3456)
            }
            })
        },
        reqestDatas(){
          
             $.ajax({
                 url:"",
                 contentType:"application/x-www-form-urlencoded",
                 //contentType: "application/json",
                 type:"POST",
                 dataType: 'json',
                 xhrFields: {
                        withCredentials: true
                },
                
                 data:{
                        list:[{
                            tenantId:1,
                            residentId:268,
                            item:4,
                            obsTime:20180108,
                            obsUser:"艾今",
                            memo:"",
                            dataSource:1,
                            value:50,
                            creatorUserId:50
                       }]
                   },
                   beforeSend: function (XMLHttpRequest) {
         		                XMLHttpRequest.setRequestHeader("Cookie", '');
                        },
                   success:function(res){
                       console.log(res);
                   },
                   error:function(err){
                       console.log(err);
                   }
                   
                   })
        }
    },

}
</script>

