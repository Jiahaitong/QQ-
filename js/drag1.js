/**
 * Created by jiahaitong on 2016/3/20.
 */
function getClass(className,parent){
    var oParent=parent?document.getElementById(parent):document,
        eles=[],
        elements=oParent.getElementsByTagName("*");
    for(var i=0;i<elements.length;i++){
        if(elements[i].className==className){
            eles.push(elements[i]);
        }
    }
    return eles;
}

window.onload=drag;
function drag(){
    var oTitle=getClass("login_logo_webqq","loginPanel")[0];
    var oclose=document.getElementById("ui_boxyClose");
    oTitle.onmousedown=titleDown;
    oclose.onclick=function(){
        var parent=document.getElementById("loginPanel");
        parent.style.display="none";
    }

    var loginState=document.getElementById("loginState"),
        loginStatePanel=document.getElementById("loginStatePanel"),
        statePanel_lis=loginStatePanel.getElementsByTagName("li"),
        login2qq_state_txt=document.getElementById("login2qq_state_txt"),
        loginStateShow=document.getElementById("loginStateShow");
    loginState.onclick=function(e){
        e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
        loginStatePanel.style.display="block";
        for(var i=0;i<statePanel_lis.length;i++){
            statePanel_lis[i].onclick=function(e){
                e=e||window.event;
                if(e.stopPropagation){
                    e.stopPropagation();
                }else{
                    e.cancelBubble=true;
                }
                var id=this.id;
                loginStatePanel.style.display="none";
                login2qq_state_txt.innerHTML=getClass("stateSelect_text",id)[0].innerHTML;
                loginStateShow.className="";
                loginStateShow.className="login-state-show "+id;
            }
        }

    }

    document.onclick=function(){
        loginStatePanel.style.display="none";
    }

}

function titleDown(event){
    var event=event||window.event;
    var parent=document.getElementById("loginPanel");
    var oclose=document.getElementById("ui_boxyClose");
    var x=event.clientX-parent.offsetLeft;
    var y=event.clientY-parent.offsetTop;
    var winW=document.documentElement.clientWidth-parent.offsetWidth-oclose.right||document.body.clientWidth-parent.offsetWidth-oclose.right;
    var winH=document.documentElement.clientHeight-parent.offsetHeight||document.body.clientHeight-parent.offsetHeight;
    document.onmousemove=function(event){
       var l=event.clientX-x;
        var t=event.clientY-y;

  if(l<0){
      l=0;
  }else if(l>winW){
      l=winW;
  }
        if(t<0){
            t=0;
        }else if(t>winH){
            t=winH;
        }
        parent.style.left=l+"px";
        parent.style.top=t+"px";
    }
    document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
    }
}