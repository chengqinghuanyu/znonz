<template>
    <div>AAAA

         <ul>
      <li>google.com <span id="ping-google"></span></li>
      <li>baidu.com <span id="ping-baidu"></span></li>
      <li>guildbit.com <span id="ping-guildbit"></span></li>
      <li>sf.guildbit.com <span id="ping-guildbit-sf"></span></li>
      <li>ny.guildbit.com <span id="ping-guildbit-ny"></span></li>
      <li>am.guildbit.com <span id="ping-guildbit-am"></span></li>
    </ul>
    </div>
</template>
<script>
import Ping from 'ping.js';

export default {
    mounted() {
        this.getLine();
    },
    methods:{
        getLine(){
            var p = new Ping();
            p.ping("http://google.com", function(err, data) {
        // Also display error if err is returned.
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-google").innerHTML = data;
      });
       p.ping("http://www.baidu.com", function(err, data) {
        // Also display error if err is returned.
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-baidu").innerHTML = data;
      });
      p.ping("http://guildbit.com", function(err, data) {
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-guildbit").innerHTML = data;
      });
      p.ping("http://sf.guildbit.com", function(err, data) {
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-guildbit-sf").innerHTML = data;
      });
      p.ping("http://ny.guildbit.com", function(err, data) {
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-guildbit-ny").innerHTML = data;
      });
      p.ping("http://am.guildbit.com", function(err, data) {
        if (err) {
          console.log("error loading resource")
          data = data + " " + err;
        }
        document.getElementById("ping-guildbit-am").innerHTML = data;
      });
            var EventUtil = { 
                addHandler: function (element, type, handler) { 
                    console.log(element)
                if (element.addEventListener) { 
                   console.log(11111)
                    element.addEventListener(type, handler, false); 

                } else if (element.attachEvent) { 
                    console.log(22222)
                element.attachEvent("on" + type, handler); 
                } else { 
                element["on" + type] = handler; 
                } 
                } 
            }; 
            EventUtil.addHandler(window, "online", function () { 
                console.log("Online"); 
                }); 
            EventUtil.addHandler(window, "offline", function () { 
                console.log("Offline"); 
                }); 
        }
    }
}
</script>

